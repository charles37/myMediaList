{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
module Handler.Home where

import Import 
import Yesod.Form.Bootstrap3 (BootstrapFormLayout (..), renderBootstrap3)
import Text.Julius (RawJS (..))
import Database.Persist.Sql (toSqlKey)

-- Define our data that will be used for creating the form.
data FileForm = FileForm
    { fileInfo :: FileInfo
    , fileDescription :: Text
    }

-- This is a handler function for the GET request method on the HomeR
-- resource pattern. All of your resource patterns are defined in
-- config/routes.yesodroutes
--
-- The majority of the code you will write in Yesod lives in these handler
-- functions. You can spread them across multiple files if you are so
-- inclined, or create a single monolithic file.
-- getHomeR :: Handler Html
-- getHomeR = do
--     (formWidget, formEnctype) <- generateFormPost sampleForm
--     let submission = Nothing :: Maybe FileForm
--         handlerName = "getHomeR" :: Text
--     allComments <- runDB $ getAllComments

--     defaultLayout $ do
--         let (commentFormId, commentTextareaId, commentListId) = commentIds
--         aDomId <- newIdent
--         setTitle "Welcome To Yesod!"
--         $(widgetFile "homepage")

-- getHomeR :: Handler Html
-- getHomeR = do
--     -- Retrieve the currently logged-in user, if any
--     mUser <- maybeAuth
--     -- Retrieve the list of media items for the logged-in user
--     mediaList <- case mUser of
--         Just (Entity userId user) -> runDB $ selectList [UserMediaUser ==. userId] []
--         Nothing -> return []
--     -- Render the home page template, passing the logged-in user and media list as arguments
--     defaultLayout $ do
--         setTitle "MyMediaList - Home"
--         $(widgetFile "homepage")



getHomeR :: Handler Html
getHomeR = do
    -- Retrieve the currently logged-in user, if any
    mUser <- maybeAuth
    -- Retrieve the list of UserMedia records for the logged-in user
    userMediaList <- case mUser of
        Just (Entity userId user) -> runDB $ selectList [UserMediaUser ==. userId] []
        Nothing -> return []
    -- Use the UserMedia records to fetch the corresponding Media records
    mediaList' <- forM userMediaList $ \(Entity _ userMedia) -> do
        runDB $ get $ userMediaMedia userMedia
    -- Filter out any Media records that were deleted
    let mediaList = catMaybes mediaList'
    
    -- Render the home page template, passing the logged-in user and media list as arguments
    defaultLayout $ do
        setTitle "MyMediaList - Home"
        $(widgetFile "homepage")

-- postHomeR :: Handler Html
-- postHomeR = do
--     ((result, formWidget), formEnctype) <- runFormPost sampleForm
--     let handlerName = "postHomeR" :: Text
--         submission = case result of
--             FormSuccess res -> Just res
--             _ -> Nothing
--     allComments <- runDB $ getAllComments

--     defaultLayout $ do
--         let (commentFormId, commentTextareaId, commentListId) = commentIds
--         aDomId <- newIdent
--         setTitle "Welcome To Yesod!"
--         $(widgetFile "homepage")

-- sampleForm :: Form FileForm
-- sampleForm = renderBootstrap3 BootstrapBasicForm $ FileForm
--     <$> fileAFormReq "Choose a file"
--     <*> areq textField textSettings Nothing
--     -- Add attributes like the placeholder and CSS classes.
--     where textSettings = FieldSettings
--             { fsLabel = "What's on the file?"
--             , fsTooltip = Nothing
--             , fsId = Nothing
--             , fsName = Nothing
--             , fsAttrs =
--                 [ ("class", "form-control")
--                 , ("placeholder", "File description")
--                 ]
--             }

-- commentIds :: (Text, Text, Text)
-- commentIds = ("js-commentForm", "js-createCommentTextarea", "js-commentList")

-- getAllComments :: DB [Entity Comment]
-- getAllComments = selectList [] [Asc CommentId]
