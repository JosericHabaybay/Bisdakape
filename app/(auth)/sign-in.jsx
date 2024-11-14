import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

export default function SignIn() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ImageBackground
      source={{ uri: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTA3M2Eta3NxeW5zZWcuanBn.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        
        <TextInput style={styles.input} placeholder="Email" />
        
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(prev => !prev)} style={styles.eyeIcon}>
            <Image
              source={showPassword ? require('../../assets/icons/show.png') : require('../../assets/icons/hide.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={() => router.push('../home')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => router.push('./sign-up')}>
          <Text style={styles.registerLink}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
  },
  registerLink: {
    color: '#007bff',
    marginTop: 15,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
