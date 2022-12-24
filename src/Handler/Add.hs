{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
module Handler.Add where

import Import 
-- import Yesod.Form.Bootstrap3 (BootstrapFormLayout (..), renderBootstrap3)
-- import Text.Julius (RawJS (..))
import Database.Persist.Sql (toSqlKey, fromSqlKey)

getAddR :: Handler Html
getAddR = do
    -- Retrieve the currently logged-in user
    mUser <- requireAuth
    let userId = entityKey mUser

    mediaList <- runDB $ selectList [] [Asc MediaId]

    -- Render the add page template, passing the logged-in user and media list as arguments
    defaultLayout $ do
        setTitle "MyMediaList - Add Media"
        $(widgetFile "add")


postAddR :: Handler Html
postAddR = do
    -- Retrieve the currently logged-in user
    mUser <- requireAuth
    let userId = entityKey mUser
    -- Read the MediaId from the form submission
    mediaId <- runInputPost $ ireq intField "mediaId"
    -- Add a new UserMedia record to link the user and media
    runDB $ insert_ $ UserMedia userId mediaId
    -- Redirect the user back to the home page
    redirect ProfileR