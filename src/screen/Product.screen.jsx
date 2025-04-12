import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Get screen width and height for responsiveness
const { width, height } = Dimensions.get('window');

const PRODUCT_LIST = [
  { name: 'Fruits', image: 'https://via.placeholder.com/100x100?text=Fruits' },
  { name: 'Vegetables', image: 'https://via.placeholder.com/100x100?text=Vegetables' },
  { name: 'Dairy', image: 'https://via.placeholder.com/100x100?text=Dairy' },
  { name: 'Bakery', image: 'https://via.placeholder.com/100x100?text=Bakery' },
  { name: 'Beverages', image: 'https://via.placeholder.com/100x100?text=Beverages' },
  { name: 'Snacks', image: 'https://via.placeholder.com/100x100?text=Snacks' },
  { name: 'Frozen', image: 'https://via.placeholder.com/100x100?text=Frozen' },
];

const Productfilter = () => {
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [filteredList, setFilteredList] = useState(PRODUCT_LIST);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = PRODUCT_LIST.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredList(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput
          placeholder="Search categories"
          style={styles.searchInput}
          placeholderTextColor="#999"
          value={search}
          onChangeText={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity style={styles.filterIcon}>
          <MaterialIcons name="filter-list" size={28} color="#999" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.name}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity style={styles.addToCartIcon}>
              <MaterialIcons name="add-shopping-cart" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Productfilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.04, // 4% of screen width
    paddingTop: 20,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    backgroundColor:'yellow'
  },
  filterIcon: {
    marginLeft: 10,
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#f9f9f9',
    width: '48%',  // Adjust width to 48% for two-column layout
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    position: 'relative', 
  },
  image: {
    width: width * 0.22, // 22% of screen width
    height: width * 0.22, // Keep square aspect ratio for images
    marginBottom: 10,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  addToCartIcon: {
    position: 'absolute', 
    bottom: 10,         
    right: 10,           
    backgroundColor: '#F26B6B',
    borderRadius: 50,
    padding: 10,
  },
});
