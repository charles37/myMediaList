{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
module Handler.Home where

import Import
import Yesod.Form.Bootstrap3 (BootstrapFormLayout (..), renderBootstrap3)
import Text.Julius (RawJS (..))

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

getHomeR :: Handler Html
getHomeR = do
    -- Get the current user's ID from the session.
    muid <- maybeAuthId

    -- If the user is logged in, fetch their "MediaList" from the database.
    mediaList <- case muid of
        Just uid -> do
            -- Use the `join` function from the `persistent` library to join the
            -- `UserMedia` and `Media` tables and select the `Media` records that
            -- belong to the current user.
            media <- runDB $ select $ from $ \um -> do
                -- Inner join the `UserMedia` and `Media` tables on the `media` column
                -- of the `UserMedia` table.
                innerJoin (um `InnerJoin` media) $ \um media -> do
                    -- Select all `Media` records where the `user` column of the
                    -- `UserMedia` table is equal to the current user's ID.
                    on (um ^. UserMediaUser ==. val uid)
                    return media
                media
        -- If the user is not logged in, return an empty list.
        Nothing -> return []

    -- Render the home page template, passing the "MediaList" as a parameter.
    defaultLayout $ do
        setTitle "MyMediaList"
        $(widgetFile "homepage")

postHomeR :: Handler Html
postHomeR = do
    ((result, formWidget), formEnctype) <- runFormPost sampleForm
    let handlerName = "postHomeR" :: Text
        submission = case result of
            FormSuccess res -> Just res
            _ -> Nothing
    allComments <- runDB $ getAllComments

    defaultLayout $ do
        let (commentFormId, commentTextareaId, commentListId) = commentIds
        aDomId <- newIdent
        setTitle "Welcome To Yesod!"
        $(widgetFile "homepage")

sampleForm :: Form FileForm
sampleForm = renderBootstrap3 BootstrapBasicForm $ FileForm
    <$> fileAFormReq "Choose a file"
    <*> areq textField textSettings Nothing
    -- Add attributes like the placeholder and CSS classes.
    where textSettings = FieldSettings
            { fsLabel = "What's on the file?"
            , fsTooltip = Nothing
            , fsId = Nothing
            , fsName = Nothing
            , fsAttrs =
                [ ("class", "form-control")
                , ("placeholder", "File description")
                ]
            }

commentIds :: (Text, Text, Text)
commentIds = ("js-commentForm", "js-createCommentTextarea", "js-commentList")

getAllComments :: DB [Entity Comment]
getAllComments = selectList [] [Asc CommentId]
