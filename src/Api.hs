{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE RankNTypes #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE ViewPatterns #-}
{-# LANGUAGE FlexibleInstances #-}

{-# OPTIONS_GHC -fno-warn-orphans #-}


module Api
  ( module Api.Data
  , module Api
  ) where

import Api.Data
import Yesod
import Import.NoFoundation 
import Prelude hiding ((.))
import Foundation 

-- instance (Yesod master
--          ,YesodPersistBackend master ~ SqlBackend
--          ,YesodPersist master
--          ,YesodAuth master) =>
--          YesodSubDispatch ApiSub master where
--   yesodSubDispatch = $(mkYesodSubDispatch resourcesApiSub)


instance
  ( Yesod master
  , YesodPersist master
  , YesodPersistBackend master ~ SqlBackend
  , YesodAuth master
  ) => YesodSubDispatch ApiSub master where
  yesodSubDispatch = $(mkYesodSubDispatch resourcesApiSub)

-- instance (Yesod master
--          ,YesodPersistBackend master ~ SqlBackend
--          ,YesodPersist master
--          ,YesodAuth master) =>
--          YesodSubDispatch ApiSub master where
--   yesodSubDispatch = $(mkYesodSubDispatch resourcesApiSub)



getSubHomeR :: Yesod master => SubHandlerFor ApiSub master Html
getSubHomeR = liftHandler $ defaultLayout [whamlet|Welcome to the subsite!|]

getUserR :: SubHandlerFor ApiSub master RepJson
getUserR = return $ repJson $ object ["name" .= name, "age" .= age]
  where
    name = "Sibi" :: Text
    age = 28 :: Int



-- Post User to DB, 
-- postUserR ::  Yesod master => SubHandlerFor ApiSub master RepJson
-- postUserR = do
--   user <- runInputPost $ User
--     <$> ireq textField "ident"
--     <*> ireq textField "password"
--   _ <- lift $ runDB $ insert user
--   return $ repJson $ object ["ident" .= userIdent user, "password" .= userPassword user]

-- type ApiHandle a = forall master. (master ~ App
--                                    ,AuthId master ~ Key User
--                                    ,YesodAuth master
--                                    ,YesodPersistBackend master ~ SqlBackend
--                                    ,YesodPersist master) =>
--                                    HandlerT ApiSub (HandlerT master IO) a

getSettingsR :: SubHandlerFor ApiSub App RepJson
getSettingsR = do
  app <- getYesod
  let appSet = appSettings app
  return $ repJson $ object ["port" .= (appPort appSet)] 

-- patchUserPasswordR :: Yesod master => Text -> SubHandlerFor ApiSub master Value
-- patchUserPasswordR ident = do
--     user <- (lift runDB) $ do
--       updateWhere [UserIdent ==. ident] [UserPassword =. Nothing]
--       selectFirst [UserIdent ==. ident] []
--     case user of
--         Nothing -> notFound
--         Just (Entity _ u) -> return $ object ["ident" .= userIdent u, "password" .= userPassword u]