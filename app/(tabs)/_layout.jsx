import { View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect} from 'expo-router'
import { icons } from '../../constants'

const TabIcon=({icon,color,name,focused})=>{
  return (
    <View>
      <Image style={{width:20}}
        source={icon}
        resizeMode="contain"
        className="w-1 h-1"
        tintColor={color}
      />
    </View>
  )  
}
const TabLayout = () => {
  return (
   <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title:'Home',
            headerShown:false,
            tabBarIcon: ({color,focused}) =>(
              <TabIcon
                icon={icons.home}
                color={color}
                name="home"
                focused={focused}
              />
            )
          }} 
        />// end of Home Screen
        <Tabs.Screen
          name="deals"
          options={{
            title:'Deals',
            headerShown:false,
            tabBarIcon: ({color,focused}) =>(
              <TabIcon
                icon={icons.deals}
                color={color}
                name="deals"
                focused={focused}
              />
            )
          }} 
        />//end of Deals
        <Tabs.Screen
          name="location"
          options={{
            title:'Location',
            headerShown:false,
            tabBarIcon: ({color,focused}) =>(
              <TabIcon
                icon={icons.location}
                color={color}
                name="location"
                focused={focused}
              />
            )
          }} 
        />//end of chat
        <Tabs.Screen
          name="profile"
          options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon: ({color,focused}) =>(
              <TabIcon
                icon={icons.profile}
                color={color}
                name="profile"
                focused={focused}
              />
            )
          }} 
        />//end of user
      </Tabs>
   </>
  )
}
export default TabLayout



