{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
module Handler.Delete where

import Import 
import Yesod.Form.Bootstrap3 (BootstrapFormLayout (..), renderBootstrap3)
import Text.Julius (RawJS (..))
import Database.Persist.Sql (toSqlKey, fromSqlKey)

postDeleteR :: MediaId -> Handler Html
postDeleteR medId = do
    -- Retrieve the currently logged-in user
    mUser <- requireAuth
    let userId = entityKey mUser

    -- Retrieve the MediaId from the URL
    -- medId <- runInputGet $ ireq hiddenField "medId"

    runDB $ deleteBy $ UniqueUserMedia userId medId
    -- Redirect the user back to the home page
    redirect ProfileR

