{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE QuasiQuotes #-}

module Handler.CurUser where

import Import 
-- import Yesod.Form.Bootstrap3 (BootstrapFormLayout (..), renderBootstrap3)
-- import Text.Julius (RawJS (..))
import Database.Persist.Sql (toSqlKey, fromSqlKey)
import Data.Text (Text)


--developer route used to get the current users id and name and display it

getCurUserR :: Handler Html
getCurUserR = do
    -- Retrieve the currently logged-in user
    Entity userId user <- requireAuth
    let userName = userIdent user

    -- Render the users credentials passing the logged-in user and media list as arguments to a whamlet quasiquote no widget file
    defaultLayout $ do
        setTitle "MyMediaList - Current User"
        [whamlet|
            <h1>Current User
            <p>UserId: #{show userId}
            <p>UserName: #{userName}
        |]



