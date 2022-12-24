{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
module Handler.Profile where



import Import
import Database.Persist.Sql (toSqlKey, fromSqlKey)
-- getProfileR :: Handler Html
-- getProfileR = do
--     -- Retrieve the currently logged-in user
--     Entity userId user <- requireAuth

--     -- user :: AuthEntity User
--     -- Retrieve the list of UserMedia records for the logged-in user
--     userMediaList <- runDB $ selectList [UserMediaUser ==. userId] []

--     -- Use the UserMedia records to fetch the corresponding Media records
--     mediaList' <- forM userMediaList $ \(Entity _ userMedia) -> do
--         runDB $ get $ userMediaMedia userMedia
--     -- Filter out any Media records that were deleted
--     let mediaList = catMaybes mediaList'
    
--     -- Render the profile page template, passing the logged-in user and media list as arguments
--     defaultLayout $ do
--         setTitle . toHtml $ userIdent user <> "'s User page"
--         $(widgetFile "profile")


-- getProfileR :: Handler Html
-- getProfileR = do
--     -- Retrieve the currently logged-in user
--     Entity userId user <- requireAuth

--     -- user :: AuthEntity User
--     -- Retrieve the list of UserMedia records for the logged-in user
--     userMediaList <- runDB $ select $
--         from $ \(userMedia `LeftOuterJoin` media `LeftOuterJoin` mediaType) -> do
--             on (mediaType ?. MediaTypeId ==. media ?. MediaMediaType)
--             on (media ?. MediaId ==. userMedia ?. UserMediaMedia)
--             where_ (userMedia ?. UserMediaUser ==. val userId)
--             return (media, mediaType)

--     -- Use the UserMedia records to fetch the corresponding Media records
--     let mediaList = map (\(Entity _ media, Entity _ mediaType) -> (media, mediaType)) userMediaList

--     -- Render the profile page template, passing the logged-in user and media list as arguments
--     defaultLayout $ do
--         setTitle . toHtml $ userIdent user <> "'s User page"
--         $(widgetFile "profile")

searchUserForm :: Form Text
searchUserForm = renderDivs $ areq textField "Username:" Nothing



getProfileR :: Handler Html
getProfileR = do
    -- Retrieve the currently logged-in user
    Entity userId user <- requireAuth

    -- user :: AuthEntity User
    -- Retrieve the list of UserMedia records for the logged-in user
    userMediaList <- runDB $ selectList [UserMediaUser ==. userId] []


    -- Use the UserMedia records to fetch the corresponding Media records
    mediaList' <- forM userMediaList $ \(Entity _ userMedia) -> do
        media <- runDB $ get $ userMediaMedia userMedia
        mediaType <- case mediaMediaType <$> media of
            Just mediaTypeId -> runDB $ get mediaTypeId
            Nothing -> return Nothing
        return ((media, mediaType), userMediaMedia userMedia)
    -- Filter out any Media records that were deleted
    let mediaList = filter (isJust . snd . fst) mediaList'
    --mediaList :: [(Maybe Media, Maybe MediaType)]
    
    

    -- Searchbar for Users to compare
    (widget, enctype) <- generateFormPost searchUserForm


    -- Render the profile page template, passing the logged-in user and media list as arguments
    defaultLayout $ do
        setTitle . toHtml $ userIdent user <> "'s User page"
        $(widgetFile "profile")
