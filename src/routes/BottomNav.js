import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Chat from '../page/Chat'
import Friend from '../page/Friend'
import Profile from '../page/Profile'

const Tab = createBottomTabNavigator()

const BottomNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 8
                }
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => <Image style={styles.icon} source={focused ? require('../assets/image/btchat_ch.png') : require('../assets/image/btchat.png')} />,
                    tabBarLabel: ({ focused }) => focused ? <Text style={styles.label}>Tin nhắn</Text> : null
                }}

                name="Chat" component={Chat} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => <Image style={styles.icon} source={focused ? require('../assets/image/btfriend_ch.png') : require('../assets/image/btfriend.png')} />,
                    tabBarLabel: ({ focused }) => focused ? <Text style={styles.label}>Bạn bè</Text> : null
                }}
                name="Friend" component={Friend} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => <Image style={styles.icon} source={focused ? require('../assets/image/btprofile_ch.png') : require('../assets/image/btprofile.png')} />,
                    tabBarLabel: ({ focused }) => focused ? <Text style={styles.label}>Thông tin</Text> : null
                }}
                name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
    label: {
        fontSize: 12,
        color: "#2997F5"
    }
})

export default BottomNav