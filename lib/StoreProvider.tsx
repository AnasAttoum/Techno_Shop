'use client'
import { useRef, useState } from 'react'
import { Provider } from 'react-redux'
import { makeStore, persistor } from '../lib/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode,
}) {
  const storeRef = useRef<typeof makeStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore
  }
  const [mode, setMode] = useState(storeRef.current.getState().persistedReducer.theme.mode)

  const toggleTheme = () => {
    if(storeRef.current)
      setMode(storeRef.current.getState().persistedReducer.theme.mode);
  }

  storeRef.current.subscribe(toggleTheme)

  return <Provider store={storeRef.current}>
    <PersistGate loading={null} persistor={persistor}>
    <div className={`theme ${mode}`}>
      {children}
    </div>
    </PersistGate>
  </Provider>
}