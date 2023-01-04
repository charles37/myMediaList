-- @ApiSub.hs
{-# LANGUAGE FlexibleInstances     #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE OverloadedStrings     #-}
{-# LANGUAGE QuasiQuotes           #-}
{-# LANGUAGE TemplateHaskell       #-}
module ApiSub
    ( module ApiSub.Data
    , module ApiSub
    ) where

import           ApiSub.Data
import           Yesod    


-- -- And we'll spell out the handler type signature.
-- getSubHomeR :: Yesod master => SubHandlerFor ApiSub master Html
-- getSubHomeR = liftHandler $ defaultLayout $ do
--         setTitle "Welcome To Yesod!"
--         addScript $ ApiR builds_bundle_js
--         [whamlet|
--             <h1.jumbotron>
--                 Welcome to Yesod!

--             $# <div #app>
--         |]
                


instance Yesod master => YesodSubDispatch ApiSub master where
    yesodSubDispatch = $(mkYesodSubDispatch resourcesApiSub)

getSubHomeR :: Yesod master => SubHandlerFor ApiSub master Html
getSubHomeR = liftHandler $ defaultLayout $ do
        setTitle "Welcome To Yesod!"
        [whamlet|
            <h1.jumbotron>
                Welcome to Yesod Api!
            $# <div #app>
        |]