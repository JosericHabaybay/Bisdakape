import { View, Text, StyleSheet, FlatList, Image, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';

const coffeeMenu = [
  { id: '1', name: 'Espresso', price: 70.00, description: 'Rich and bold espresso shot.', image: 'https://i.pinimg.com/originals/b0/56/8b/b0568b8b587e270f89834eef1715683b.png' },
  { id: '2', name: 'Cappuccino', price: 48.00, description: 'Creamy and frothy, perfect balance.', image: 'https://png.pngtree.com/png-vector/20240219/ourlarge/pngtree-cup-of-hot-cappuccino-coffee-on-white-background-png-image_11752259.png' },
  { id: '3', name: 'Latte', price: 50.00, description: 'Smooth milk with a shot of espresso.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7QHRyoSg8_FIhIMcKNqfD3hVoMQgdKZHKA&s' },
  { id: '4', name: 'Mocha', price: 45.00, description: 'Chocolate meets coffee in this favorite.', image: 'https://static.vecteezy.com/system/resources/previews/036/160/711/original/ai-generated-mocha-by-a-combination-of-espresso-steamed-milk-and-chocolate-with-transparent-background-free-png.png' },
];

const Home = () => {
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    Alert.alert("Added to Cart", `${item.name} has been added to your cart.`);
  };

  const handleConfirmPayment = () => {
    if (cart.length > 0) {
      console.log(cart);
      navigation.navigate('confirmPayment');
    } else {
      Alert.alert("Cart is Empty", "Please add some items to your cart first.");
    }
  };

  const handleCancelOrder = () => {
    setCart([]);
    Alert.alert("Order Canceled", "Your order has been canceled.");
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <ImageBackground
      source={{ uri: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTA3M2Eta3NxeW5zZWcuanBn.jpg' }}
      style={styles.backgroundImage}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Just BISDAKAPE</Text>
        <Text style={styles.subtitle}>USOK PALANG MASARAP NA</Text>

        <FlatList
          data={coffeeMenu}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Image source={{ uri: item.image }} style={styles.coffeeImage} />
              <View style={styles.menuText}>
                <View style={styles.namePriceContainer}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>₱{item.price.toFixed(2)}</Text>
                </View>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => handleAddToCart(item)}
                >
                  <Text style={styles.buttonText}>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalPrice}>₱{totalPrice}</Text>
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
          <Text style={styles.buttonText}>Confirm Payment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={handleCancelOrder}>
          <Text style={styles.buttonText}>Cancel Order</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    padding: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 15,
    marginVertical: 10,
    borderRadius: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  coffeeImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  menuText: {
    flexDirection: 'column',
    maxWidth: '60%',
  },
  namePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  itemName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4E342E',
  },
  itemDescription: {
    fontSize: 14,
    color: '#6D4C41',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF7043',
  },
  addButton: {
    backgroundColor: '#FF7043',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 75,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 10,
    width: '50%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 30,
  },
  totalLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4E342E',
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF7043',
  },
  confirmButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 10,
    width: '50%',
    alignItems: 'center',
    marginBottom: 15,
    alignSelf: 'center',
  },
  cancelButton: {
    backgroundColor: '#FF4500',
    paddingVertical: 15,
    borderRadius: 10,
    width: '50%',
    alignItems: 'center',
    marginBottom: 15,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;