import { StatusBar } from 'expo-status-bar'; 
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background Image */}
      <Image 
        source={{ uri: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTA3M2Eta3NxeW5zZWcuanBn.jpg' }} 
        style={styles.backgroundImage}
      />
      
      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          {/* Bisdakape Text Logo */}
          <Image 
            source={images.textimage}
            style={styles.textimage} 
          />
          {/* Coffee Logo */}
          <Image 
            source={images.logo}
            style={styles.logo} 
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Just Bisdakape: Bring the coffee shop experience right to your fingertips, making it easy to enjoy your favorite brews anytime, anywhere.
          </Text>
        </View>
        {/* Button Container */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('../(auth)/sign-in')}
          >
            <Text style={styles.buttonText}>Go to App</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#4F46E5" style="light" />
    </SafeAreaView>
  );
}

const styles = {
  safeArea: {
    flex: 1, 
    backgroundColor: 'primary',
  },
  scrollContainer: {
    flexGrow: 1, 
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',  
    zIndex: -1,
  },
  logoContainer: {
    alignItems: 'center', 
    marginTop: 10,
    marginBottom: 5,
  },
  textimage: {
    width: 250, 
    height: 200, 
    marginBottom: -40,
    resizeMode: 'contain',
  },
  logo: {
    width: 500, 
    height: 160, 
    resizeMode: 'contain',
    marginTop: -30,
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 5,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 21,
    color: '#808080',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};
