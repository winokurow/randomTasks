import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import ExpoFileSystemStorage from "redux-persist-expo-filesystem"
import subjectsReducer from './components/SubjectsReducer'

const persistConfig = {
    key: 'subjectsReducer',
    storage: ExpoFileSystemStorage,
}

const persistedReducer = persistReducer(persistConfig, subjectsReducer)




export default () => {

  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}