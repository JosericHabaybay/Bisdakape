import { View, Text, StyleSheet, FlatList, Image, ImageBackground, Dimensions } from 'react-native';
import React from 'react';

const coffeeDeals = [
  { id: '1', name: 'Buy 1 Get 1 Free - Cappuccino', discount: '50% OFF', description: 'Enjoy a free cappuccino with every purchase.', image: 'https://png.pngtree.com/png-vector/20240219/ourlarge/pngtree-cup-of-hot-cappuccino-coffee-on-white-background-png-image_11752259.png' },
  { id: '2', name: '20% Off on Espresso', discount: '20% OFF', description: 'Get a strong and rich espresso at a discounted price.', image: 'https://i.pinimg.com/originals/b0/56/8b/b0568b8b587e270f89834eef1715683b.png' },
];

const Deals = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTA3M2Eta3NxeW5zZWcuanBn.jpg' }} // Background image for the deals page
      style={styles.backgroundImage}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Special Coffee Deals</Text>
        <Text style={styles.subtitle}>Exclusive Offers for You</Text>

        <FlatList
          data={coffeeDeals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.dealItem}>
              <Image source={{ uri: item.image }} style={styles.coffeeImage} />
              <View style={styles.dealText}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDiscount}>{item.discount}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text visibility
    width: '100%',
    height: '100%',
    padding: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFD700', // Gold for the premium feel
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
  dealItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // White background with slight transparency for a clean look
    padding: 15,
    marginVertical: 10,
    borderRadius: 20,
    width: '100%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6, // Elevation for Android shadows
    marginTop: 50,
  },
  coffeeImage: {
    width: 80,
    height: 80,
    borderRadius: 10, // Rounded image corners
    marginRight: 15,
  },
  dealText: {
    flexDirection: 'column',
    maxWidth: '60%', // Space for text
  },
  itemName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4E342E', // Rich coffee color
    marginBottom: 5,
  },
  itemDiscount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF7043', // Bright color for discounts
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#6D4C41', // Neutral description text color
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5722', // Standout color for price
  },
});

export default Deals;