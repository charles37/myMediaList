{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
module Handler.SearchUser where

import Import 
-- import Yesod.Form.Bootstrap3 (BootstrapFormLayout (..), renderBootstrap3)
-- import Text.Julius (RawJS (..))
import Database.Persist.Sql (toSqlKey, fromSqlKey)

getSearchUserR :: Handler Html
getSearchUserR = do
  (widget, enctype) <- generateFormPost searchUserForm
  defaultLayout $ do
    setTitle "Search for another user"
    $(widgetFile "search")

postSearchUserR :: Handler Html
postSearchUserR = do
  -- get the current userId
  curUser <- requireAuth
  let myUserId = entityKey curUser


  ((result, widget), enctype) <- runFormPost searchUserForm
  case result of
    FormSuccess ident -> do
      mUser <- runDB $ getBy $ UniqueUser ident
      case mUser of
        Just (Entity userId user) ->
          redirect $ CompareR myUserId userId 
        Nothing -> do
          setMessage $ toHtml $ "User not found: " ++ ident
          redirect SearchUserR
    _ -> do
      setMessage "Invalid input"
      redirect SearchUserR

searchUserForm :: Form Text
searchUserForm = renderDivs $ areq textField "Username:" Nothing