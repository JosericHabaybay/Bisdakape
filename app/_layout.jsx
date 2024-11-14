import { Stack } from 'expo-router';
import React from 'react';

const MainLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" option={{
     headerShown:false
    }}/>

      {/* Home screen */}
      <Stack.Screen name="home" options={{ headerShown: false }} />


        {/* Confirm Payment screen */}
        <Stack.Screen name="confirmPayment" options={{ headerShown: true, title: "Confirm Payment" }} />

     


    
      
    </Stack>
  );
};

export default MainLayout;
