import Network.HTTP.Conduit
import Data.Aeson

-- myMediaList
-- H9!
-- Replace YOUR_API_KEY with your actual API key
apiKey = "YOUR_API_KEY"

-- Function to search for a movie by title
searchMovie :: String -> IO (Maybe Movie)
searchMovie title = do
    -- Construct the URL for the API request
    let url = "https://api.themoviedb.org/3/search/movie?api_key=" ++ apiKey ++ "&query=" ++ title

    -- Make the HTTP request
    response <- simpleHttp url

    -- Parse the response JSON into a Haskell value
    let movieData = eitherDecode response :: Either String MovieData
    return $ case movieData of
        Right data -> Just data
        Left _ -> Nothing


-- Data type to represent a movie
data Movie = Movie
    { movieTitle :: String
    , movieReleaseDate :: String
    , movieOverview :: String
    } deriving (Show, Eq)

-- Data type to represent the JSON response from the API
data MovieData = MovieData
    { results :: [Movie]
    } deriving (Show, Eq)

-- Convert the MovieData data type to/from JSON
instance FromJSON MovieData where
    parseJSON = withObject "MovieData" $ \v -> MovieData
        <$> v .: "results"

instance ToJSON MovieData where
    toJSON (MovieData results) = object
        [ "results" .= results
        ]

-- Convert the Movie data type to/from JSON
instance FromJSON Movie where
    parseJSON = withObject "Movie" $ \v -> Movie
        <$> v .: "title"
        <*> v .: "release_date"
        <*> v .: "overview"

instance ToJSON Movie where
    toJSON (Movie title releaseDate overview) = object
        [ "title" .= title
        , "release_date" .= releaseDate
        , "overview" .= overview
        ]

main :: IO ()
main = do
    -- Search for a movie by title
    movie <- searchMovie "The Matrix"

    -- Print the movie title
    case movie of
        Just movie -> putStrLn $ movieTitle movie
        Nothing -> putStrLn "No movie found"
