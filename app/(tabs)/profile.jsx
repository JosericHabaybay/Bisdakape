import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router'; // Import useRouter from expo-router

const Profile = () => {
  const router = useRouter(); // Get the router object

  const handleLogout = () => {
    console.log("Logout button pressed"); // Debug log
    router.push('/'); // Navigate to the index page (assuming it's the root)
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTA3M2Eta3NxeW5zZWcuanBn.jpg' }} // Background image URL
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1008650588697944064/2OghK9Sl_400x400.jpg' }} // Profile image URL
          style={styles.profileImage}
        />

        <Text style={styles.name}>JiJi Habaybay</Text>
        <Text style={styles.bio}>
          |☕|
        </Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Age:</Text>
            <Text style={styles.detailText}>20</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Location:</Text>
            <Text style={styles.detailText}>Toledo City, Philippines</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Adds a dark overlay for readability
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#ff6347',
    marginBottom: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  bio: {
    fontSize: 18,
    color: '#ddd',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
    lineHeight: 24,
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background for details
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailText: {
    fontSize: 16,
    color: '#eee',
  },
  logoutButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;
