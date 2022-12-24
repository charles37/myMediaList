{-# LANGUAGE EmptyDataDecls             #-}
{-# LANGUAGE FlexibleInstances          #-}
{-# LANGUAGE GADTs                      #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE MultiParamTypeClasses      #-}
{-# LANGUAGE NoImplicitPrelude          #-}
{-# LANGUAGE OverloadedStrings          #-}
{-# LANGUAGE TemplateHaskell            #-}
{-# LANGUAGE TypeFamilies               #-}
{-# LANGUAGE DerivingStrategies         #-}
{-# LANGUAGE StandaloneDeriving         #-}
{-# LANGUAGE UndecidableInstances       #-}
{-# LANGUAGE DataKinds                  #-}
{-# LANGUAGE DeriveAnyClass             #-}

module Model where

import ClassyPrelude.Yesod
import Database.Persist.Quasi
import Database.Persist.Sql (fromSqlKey, toSqlKey)

-- You can define all of your database entities in the entities file.
-- You can find more information on persistent and how to declare entities
-- at:
-- http://www.yesodweb.com/book/persistent/
share [mkPersist sqlSettings, mkMigrate "migrateAll"]
    $(persistFileWith lowerCaseSettings "config/models.persistentmodels")


instance Num (Key Media) where
    (+) a b = toSqlKey $ fromSqlKey a + fromSqlKey b
    (-) a b = toSqlKey $ fromSqlKey a - fromSqlKey b
    (*) a b = toSqlKey $ fromSqlKey a * fromSqlKey b
    negate = toSqlKey . negate . fromSqlKey
    abs = toSqlKey . abs . fromSqlKey
    signum = toSqlKey . signum . fromSqlKey
    fromInteger = toSqlKey . fromInteger

    
instance Enum (Key Media) where
    toEnum = toSqlKey . toEnum
    fromEnum = fromEnum . fromSqlKey

instance Real (Key Media) where
    toRational = toRational . fromSqlKey

instance Integral (Key Media) where
    toInteger = toInteger . fromSqlKey
