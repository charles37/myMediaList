{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE QuasiQuotes #-}
module Handler.Test where

import Import 

-- import Yesod.Form.Bootstrap3 (BootstrapFormLayout (..), renderBootstrap3)
-- import Text.Julius (RawJS (..))
import Database.Persist.Sql (toSqlKey, fromSqlKey)





getTestR :: Handler Html
getTestR = do
    let myVariable = "hello, world!" :: Text

    defaultLayout $ do
        setTitle "MyMediaList | Home"
        addScript $ StaticR builds_header_js
        addScript $ StaticR builds_homepage_js


        $(widgetFile "test")

