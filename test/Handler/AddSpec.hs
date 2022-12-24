{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
module Handler.AddSpec (spec) where

import TestImport
import Data.Aeson
import Database.Persist.Sql (toSqlKey, fromSqlKey)

-- Media
--     title Text
--     author Text 
--     releaseDate Day 
--     mediaType Text
--     UniqueTitle title
--     deriving Show


spec :: Spec
spec = withApp $ do
    describe "valid request" $ do
        it "gives a 200" $ do
            -- authorize myself
            userEntity <- createUser "foo"
            authenticateAs userEntity

            get AddR
            statusIs 200
        it "gives a 200 when post requesting" $ do

            userEntity <- createUser "foo"
            authenticateAs userEntity


            theEntity <- runDB $ insert $ Media "MegaMind" "Ben" (fromGregorian 2018 1 1) "Movie"
            let mediaId = fromSqlKey theEntity
                message = "My message" :: Text
                body = object [ "mediaId" .= mediaId ]
                encoded = encode body
            
            request $ do
                setMethod "POST"
                setUrl AddR
                setRequestBody encoded
                addRequestHeader ("Content-Type", "application/json")

            statusIs 200

            medias <- runDB $ selectList [MediaTitle ==. "MegaMind"] []
            Entity _id med <-
                case medias of
                    [ent] -> pure ent
                    _ -> error "needed 1 entity"
            assertEq "Should have " med (Media "MegaMind" "Ben" (fromGregorian 2018 1 1) "Movie")