import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './src/routes/BottomNav'
import MainStack from './src/routes/MainStack'
import { Provider } from 'react-redux'
import { persistor, store } from './src/redux/Store'
import { PersistGate } from 'redux-persist/es/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App