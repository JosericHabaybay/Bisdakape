import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router'; // Ensure this is correctly imported

const ConfirmPayment = () => {
  const navigation = useNavigation();

  // Function to handle payment confirmation
  const handlePaymentConfirmation = () => {
    // Alert confirming the payment is successful
    alert("Thank you for your payment! Wait for 5mins and you can pick up your order.");
    // Navigate back to the home page or any other page you want
    navigation.navigate('/'); // This navigates to the home page
  };

  // Function to handle going back without confirming payment
  const handleGoBack = () => {
    // Simply navigate back to the previous screen without an alert
    navigation.goBack(); // Navigates back to the previous screen
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTA3M2Eta3NxeW5zZWcuanBn.jpg' }} // Replace with your image URL
      style={styles.backgroundImage} // Apply styles to the background
      blurRadius={6} // Optional: Add a blur effect to the background
    >
      <View style={styles.container}>
        <Text style={styles.message}>Do you want to proceed with your payment?</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Yes, Proceed"
            onPress={handlePaymentConfirmation} // Call the confirmation function
            color="#FFD700" // Gold color for Yes button
          />
          <Button
            title="No, Go Back"
            onPress={handleGoBack} // Call the function to go back
            color="#FF7043" // Orange color for No button
          />
        </View>
      </View>
    </ImageBackground>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background with transparency for readability
    borderRadius: 10, // Optional: Add rounded corners
    margin: 20, // Optional: Add some margin
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E342E',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default ConfirmPayment;
