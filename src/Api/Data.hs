
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE RankNTypes #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE ViewPatterns #-}
{-# OPTIONS_GHC -fno-warn-orphans #-}
module Api.Data where
    

import Yesod
import Yesod.Auth
import Database.Persist.Sql (SqlBackend)
import ClassyPrelude

-- Subsites have foundations just like master sites.
data ApiSub = ApiSub 


class (Yesod m) => YesodApi m where
  toMaster :: m -> Route m

-- type ApiHandler a = forall master. (Yesod master, YesodAuth master, YesodPersistBackend master ~ SqlBackend, YesodPersist master) => HandlerT ApiSub (HandlerT master IO) a
-- newtype HandlerFor master a = HandlerFor (HandlerData master -> IO a)


-- We have a familiar analogue from mkYesod, with just one extra parameter.
mkYesodSubData "ApiSub" $(parseRoutesFile "config/apiRoutes.yesodroutes")
