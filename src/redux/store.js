import {createStore,applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import reducer from './reducer'

const config = {
  key: 'todo',
  storage,
  stateReconciler: hardSet,
  timeout: null
}

const persistedReducer = persistReducer(config,reducer)

export default function(){
  const store = createStore(
    persistedReducer,
    applyMiddleware(
      promiseMiddleware,
      logger,
    )
  )
  const persistor = persistStore(store)
  return {store, persistor}
}

// export default () => {
//   let store = createStore(
//     persistedReducer,
//     promiseMiddleware,
//     logger
//   )
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

// export default createStore(reducer)