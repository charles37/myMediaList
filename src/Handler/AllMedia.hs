{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE QuasiQuotes     #-}
module Handler.AllMedia where

import Import 
-- import Yesod.Form.Bootstrap3 (BootstrapFormLayout (..), renderBootstrap3)
-- import Text.Julius (RawJS (..))
import Database.Persist.Sql (toSqlKey, fromSqlKey)


-- | Handler to display all media in the database
getAllMediaR :: Handler Html
getAllMediaR = do 
    -- Retrieve the currently logged-in user
    mUser <- requireAuth
    let userId = entityKey mUser
    -- Retrieve the media list from the database
    mediaList <- runDB $ selectList [] [Asc MediaTitle]
    -- Render the media list passing the logged-in user and media list as arguments to a whamlet quasiquote no widget file
    defaultLayout $ do
        setTitle "MyMediaList - All Media"
        [whamlet|
            <h1>All Media
            <table>
                <thead>
                    <tr>
                        <th>Title
                        <th>Media Type
                <tbody>
                    $forall Entity medId media <- mediaList
                        <tr>
                            <td>#{mediaTitle media}
                            <td>#{fromMaybe "" (mediaAuthor media)}
                            <td>#{show (mediaReleaseDate media)}
                            <td>#{showMediaType (mediaMediaType media)}
                            <td>
                                <form method=post action=@{DeleteR medId}>
                                    <input type="submit" value="Delete">
        |]
    where
        -- | Helper function to match a mediaTypeId to a text mediaType
        showMediaType :: MediaTypeId -> Text
        showMediaType mediaTypeId
            | fromSqlKey mediaTypeId == 5 = "Movie"
            | fromSqlKey mediaTypeId == 6 = "TV Show"
            | fromSqlKey mediaTypeId == 8 = "Book"
            | otherwise = "Error"