//react + navigation
import React from 'react'
import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import { enableScreens } from 'react-native-screens'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'

//redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { withLocalReducer } from 'data'
import localReducers from 'local/reducers'

//styles
import Appearance from 'modules/appearance'

//common bootstrap logic
function Bootstrap(Component) {
    //enable native screens
    enableScreens()

    //init redux
    const { store, persistor } = withLocalReducer(localReducers)

    return ()=>(
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Appearance>
                    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                        <Component />
                    </SafeAreaProvider>
                </Appearance>
            </PersistGate>
        </Provider>
    )
}

//register targets
AppRegistry.registerComponent('app', () => 
    Bootstrap(require('./app').default)
)

AppRegistry.registerComponent('extension', () => 
    Bootstrap(require('./extension').default)
)