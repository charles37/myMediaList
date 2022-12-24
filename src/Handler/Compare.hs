{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
module Handler.Compare where

import Import hiding (intersect)
import Yesod.Form.Bootstrap3 (BootstrapFormLayout (..), renderBootstrap3)
import Text.Julius (RawJS (..))
import Database.Persist.Sql (toSqlKey)
import Data.List (intersect)
import qualified Data.Text as T
import Handler.UtilityFuncs (showMediaType)

getCompareR :: UserId -> UserId -> Handler Html
getCompareR userId1 userId2 = do
    -- returieve the userNames from the userIds
    user1 <- runDB $ get userId1
    user2 <- runDB $ get userId2
    case (user1, user2) of
        (Nothing, _) -> notFound
        (_, Nothing) -> notFound
        (Just u1, Just u2) -> do
            let userName1 = userIdent u1
            let userName2 = userIdent u2
            -- Retrieve the lists of UserMedia records for both users
            userMediaList1 <- runDB $ selectList [UserMediaUser ==. userId1] []
            userMediaList2 <- runDB $ selectList [UserMediaUser ==. userId2] []
            -- Use the UserMedia records to fetch the corresponding Media records
            mediaList1' <- forM userMediaList1 $ \(Entity _ userMedia) -> do
                runDB $ get $ userMediaMedia userMedia
            mediaList2' <- forM userMediaList2 $ \(Entity _ userMedia) -> do
                runDB $ get $ userMediaMedia userMedia
            -- Filter out any Media records that were deleted
            let mediaList1 = catMaybes mediaList1'
            let mediaList2 = catMaybes mediaList2'
            -- Get the intersection of the two lists of Media records
            let intersection = mediaList1 `intersect` mediaList2
            -- Calculate the percentage overlap between the two lists
            let overlap = (fromIntegral $ length intersection) / (fromIntegral $ length mediaList1) * 100
            -- Render the compare page template, passing the two lists of Media records and the overlap percentage as arguments
            defaultLayout $ do
                setTitle . toHtml $ userName1 <> " and " <> userName2
                $(widgetFile "compare") 


    -- -- Retrieve the lists of UserMedia records for both users
    -- userMediaList1 <- runDB $ selectList [UserMediaUser ==. userId1] []
    -- userMediaList2 <- runDB $ selectList [UserMediaUser ==. userId2] []

    -- -- Use the UserMedia records to fetch the corresponding Media records
    -- mediaList1' <- forM userMediaList1 $ \(Entity _ userMedia) -> do
    --     runDB $ get $ userMediaMedia userMedia
    -- mediaList2' <- forM userMediaList2 $ \(Entity _ userMedia) -> do
    --     runDB $ get $ userMediaMedia userMedia

    -- -- Filter out any Media records that were deleted
    -- let mediaList1 = catMaybes mediaList1'
    -- let mediaList2 = catMaybes mediaList2'


    -- -- Get the intersection of the two lists of Media records
    -- let intersection = mediaList1 `intersect` mediaList2

    -- -- Calculate the percentage overlap between the two lists
    -- let overlap = (fromIntegral $ length intersection) / (fromIntegral $ length mediaList1) * 100

    -- -- Render the compare page template, passing the two lists of Media records and the overlap percentage as arguments
    -- defaultLayout $ do
    --     setTitle ("Compared MediaList's of Users " ++ userName1 ++ " and " ++ userName2) 
    --     $(widgetFile "compare")
