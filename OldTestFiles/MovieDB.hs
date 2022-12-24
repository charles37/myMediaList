{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RecordWildCards #-}


import Network.HTTP.Req
import Data.Aeson (FromJSON, parseJSON, withObject, (.:))
import Data.Text (Text, unpack)

data Movie = Movie
  { movieTitle :: Text
  , movieOverview :: Text
  , movieReleaseDate :: Text
  } deriving (Show)

instance FromJSON Movie where
  parseJSON = withObject "Movie" $ \o -> do
    title <- o .: "title"
    overview <- o .: "overview"
    releaseDate <- o .: "release_date"
    return Movie{..}

searchMovies :: Text -> IO (Maybe [Movie])
searchMovies query = do
  let apiKey = "your_api_key_here"
      url = "https://api.themoviedb.org/3/search/movie"
      params =
        [ "api_key" =: apiKey
        , "query" =: query
        , "include_adult" =: True
        ]
  r <- runReq defaultHttpConfig $ req GET url NoReqBody jsonResponse params
  return $ responseBody r

main :: IO ()
main = do
  movies <- searchMovies "Matrix"
  case movies of
    Just ms -> mapM_ (putStrLn . unpack . movieTitle) ms
    Nothing -> putStrLn "No movies found"