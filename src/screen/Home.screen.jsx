import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PRODUCT_LIST = [
  {id: 1, name: 'Apple'},
  {id: 2, name: 'Banana'},
  {id: 3, name: 'Orange'},
];

const {width} = Dimensions.get('window');

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = useState(PRODUCT_LIST);

  const handleSearch = text => {
    setSearch(text);
    const filtered = PRODUCT_LIST.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredList(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/icon.png')} style={styles.imgStyle} />
        <Text style={styles.location}>
          <Ionicons name="location-sharp" size={20} color="black" /> Location
        </Text>
      </View>

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

      <View style={styles.results}>
        {filteredList.map(item => (
          <Text key={item.id} style={styles.resultItem}>
            {item.name}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imgStyle: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'contain',
  },
  location: {
    marginTop: 10,
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  results: {
    paddingTop: 10,
  },
  resultItem: {
    fontSize: 16,
    paddingVertical: 4,
  },
});
