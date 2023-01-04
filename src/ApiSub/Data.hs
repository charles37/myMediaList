-- @ApiSub/Data.hs
{-# LANGUAGE QuasiQuotes     #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeFamilies    #-}
module ApiSub.Data where

import           Yesod

-- Subsites have foundations just like master sites.
data ApiSub = ApiSub

-- We have a familiar analogue from mkYesod, with just one extra parameter.
-- We'll discuss that later.
mkYesodSubData "ApiSub" [parseRoutes|
/ SubHomeR GET
|]