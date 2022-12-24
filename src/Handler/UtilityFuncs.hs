{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}

module Handler.UtilityFuncs where

import Import
import Yesod.Form.Bootstrap3 (BootstrapFormLayout (..), renderBootstrap3)
import Text.Julius (RawJS (..))
import Database.Persist.Sql (toSqlKey, fromSqlKey)
import Data.Text (Text)

-- | Helper function to get the current user's id
getCurrentUserId :: Handler UserId
getCurrentUserId = do
    mUser <- requireAuth
    let userId = entityKey mUser
    return userId

-- | Helper function to get the current user's name
getCurrentUserName :: Handler Text
getCurrentUserName = do
    mUser <- requireAuth
    let userName = userIdent $ entityVal mUser
    return userName

-- | Helper function to match a mediaTypeId to a text mediaType
showMediaType :: MediaTypeId -> Text
showMediaType mediaTypeId
    | fromSqlKey mediaTypeId == 5 = "Movie"
    | fromSqlKey mediaTypeId == 6 = "TV Show"
    | fromSqlKey mediaTypeId == 8 = "Book"
    | otherwise = "Error"