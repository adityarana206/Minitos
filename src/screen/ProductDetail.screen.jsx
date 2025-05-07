import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';
import { AntDesign, Feather, Ionicons } from 'react-native-vector-icons';

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      
      {/* Pagination Dots */}
      <View style={styles.pagination}>
        <View style={[styles.paginationDot, styles.activeDot]}></View>
        <View style={styles.paginationDot}></View>
        <View style={styles.paginationDot}></View>
      </View>
      
      {/* Product Info */}
      <View style={styles.productInfo}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Naturel Red Apple</Text>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="#888" />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>1kg, Price</Text>
        
        {/* Quantity Selector */}
        <View style={styles.quantityPriceContainer}>
          <View style={styles.quantitySelector}>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>−</Text>
            </TouchableOpacity>
            <View style={styles.quantityDisplay}>
              <Text style={styles.quantityText}>{quantity}</Text>
            </View>
            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
              <Text style={[styles.quantityButtonText, { color: '#FF6B6B' }]}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>$4.99</Text>
        </View>
        
        {/* Product Details */}
        <TouchableOpacity style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Product Detail</Text>
          <AntDesign name="down" size={20} color="black" />
        </TouchableOpacity>
        
        <Text style={styles.description}>
          Apples Are Nutritious. Apples May Be Good For Weight Loss. 
          Apples May Be Good For Your Heart. As Part Of A Healtful 
          And Varied Diet.
        </Text>
        
        {/* Nutrition Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionLeft}>
            <Text style={styles.sectionTitle}>Nutritions</Text>
          </View>
          <View style={styles.sectionRight}>
            <View style={styles.nutritionBadge}>
              <Text style={styles.nutritionText}>100gr</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </View>
        </View>
        
        {/* Reviews Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionLeft}>
            <Text style={styles.sectionTitle}>Review</Text>
          </View>
          <View style={styles.sectionRight}>
            <View style={styles.ratingContainer}>
              {[1, 2, 3, 4, 5].map((_, index) => (
                <AntDesign key={index} name="star" size={16} color="#FFD700" />
              ))}
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </View>
        </View>
      </View>
      
      {/* Add To Basket Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add To Basket</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageContainer: {
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '100%',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 20,
    backgroundColor: '#FF6B6B',
  },
  productInfo: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 4,
  },
  quantityPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
  },
  quantityButton: {
    padding: 8,
    width: 36,
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#888',
  },
  quantityDisplay: {
    paddingHorizontal: 16,
    width: 40,
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '500',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 16,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  sectionLeft: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  sectionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nutritionBadge: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8,
  },
  nutritionText: {
    fontSize: 12,
    color: '#888',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#FF6B6B',
    margin: 16,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProductScreen;