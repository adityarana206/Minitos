import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PRODUCT_LIST = [
  { name: 'Milk', image: 'https://via.placeholder.com/100x100.png?text=Milk' },
  { name: 'Bread', image: 'https://via.placeholder.com/100x100.png?text=Bread' },
  { name: 'Eggs', image: 'https://via.placeholder.com/100x100.png?text=Eggs' },
  { name: 'Butter', image: 'https://via.placeholder.com/100x100.png?text=Butter' },
  { name: 'Cheese', image: 'https://via.placeholder.com/100x100.png?text=Cheese' },
  { name: 'Apple', image: 'https://via.placeholder.com/100x100.png?text=Apple' },
  { name: 'Banana', image: 'https://via.placeholder.com/100x100.png?text=Banana' },
  { name: 'Orange', image: 'https://via.placeholder.com/100x100.png?text=Orange' },
  { name: 'Tomato', image: 'https://via.placeholder.com/100x100.png?text=Tomato' },
  { name: 'Potato', image: 'https://via.placeholder.com/100x100.png?text=Potato' },
  { name: 'Onion', image: 'https://via.placeholder.com/100x100.png?text=Onion' },
];

const ProfileScreen = () => {
  const [search, setSearch] = useState('');
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
      <View style={styles.innerContainer}>
        <Text style={styles.findProduct}>Find Product</Text>
        <View style={styles.searchContainer}>
          <MaterialIcons
            name="search"
            size={24}
            color="#999"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for products"
            style={styles.searchInput}
            placeholderTextColor="#999"
            value={search}
            onChangeText={handleSearch}
          />
        </View>

        <FlatList
          data={filteredList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.box}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
  findProduct: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  list: {
    paddingVertical: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  box: {
    backgroundColor: '#f2f2f2',
    width: '48%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
