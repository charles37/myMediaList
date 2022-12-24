{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
module Handler.Fill where

import Import 
import Yesod.Form.Bootstrap3 (BootstrapFormLayout (..), renderBootstrap3)
import Text.Julius (RawJS (..))
import Database.Persist.Sql (toSqlKey, fromSqlKey)

getFillR :: Handler Html
getFillR = do
    -- Retrieve the currently logged-in user
    mUser <- requireAuth
    let userId = entityKey mUser
    
    
    movieTypeId  <- runDB $ insert $ MediaType "Movie"
    tvShowTypeId <- runDB $ insert $ MediaType "TV Show"
    bookTypeId   <- runDB $ insert $ MediaType "Book"
    gameTypeId   <- runDB $ insert $ MediaType "Game"

    runDB $ insert $ Media "The Matrix" Nothing (fromGregorian 1999 3 31) movieTypeId

    -- insert lots of dummy data
    runDB $ insertMany_ [ Media "The Shawshank Redemption" Nothing (fromGregorian 1994 3 23) movieTypeId
                      , Media "Inception" (Just "Christopher Nolan") (fromGregorian 2010 3 16) movieTypeId
                      , Media "The Lord of the Rings: The Fellowship of the Ring" (Just "J.R.R. Tolkien") (fromGregorian 1954 10 3) bookTypeId
                      , Media "Harry Potter and the Goblet of Fire" (Just "J.K. Rowling") (fromGregorian 2000 7 8) bookTypeId
                      , Media "The Legend of Zelda: Ocarina of Time" Nothing (fromGregorian 1998 3 23) gameTypeId
                      , Media "Super Mario 64" Nothing (fromGregorian 1996 6 23) gameTypeId
                      , Media "Game of Thrones" (Just "George R.R. Martin") (fromGregorian 2011 3 6) tvShowTypeId
                      , Media "Stranger Things" (Just "The Duffer Brothers") (fromGregorian 2016 7 15) tvShowTypeId
                      ]
    defaultLayout $ do
        setTitle "MyMediaList - Fill"
        $(widgetFile "fill")