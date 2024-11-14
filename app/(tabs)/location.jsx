import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

const Location = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTA3M2Eta3NxeW5zZWcuanBn.jpg' }} // Background image
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlayContainer}>
        {/* Location Banner with Map Image */}
        <View style={styles.banner}>
          <Image
            source={{ uri: 'https://cdn3.vectorstock.com/i/1000x1000/66/07/best-location-coffee-shop-vector-19256607.jpg' }} // Map image
            style={styles.mapImage}
          />
          <View style={styles.overlay}>
            <Text style={styles.locationTitle}></Text>
          </View>
        </View>

        {/* Address and Contact Information */}
        <View style={styles.infoContainer}>
          <Text style={styles.heading}>Visit Us</Text>
          <Text style={styles.text}>123 Coffee Street</Text>
          <Text style={styles.text}>Toledo City, Philippines</Text>
          <Text style={styles.text}>Open: Mon - Sat, 8am - 8pm</Text>
          <Text style={styles.text}>Contact: +639 234 567 842</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // Dark overlay for readability
    justifyContent: 'center',
  },
  banner: {
    alignItems: 'center',
    marginBottom: 30,
  },
  mapImage: {
    width: 360,
    height: 150,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
  },
  infoContainer: {
    alignItems: 'center',
    padding: 20,
  },
  locationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 5,
  },
});

export default Location;
