import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const banners = [
  require('../assets/banner.png'),
  require('../assets/banner.png'),
  require('../assets/banner.png'),
];

const filteredList = [
  {
    name: 'Product 1',
    image:
      'https://yt3.googleusercontent.com/FJI5Lzbf2dMd32xOqhoKpJArJooZhoX6v2qOcFO-wjSZUvs3H9xqq2gK4DQ47X0KnYgf7X2rpdU=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    name: 'Product 2',
    image:
      'https://yt3.googleusercontent.com/FJI5Lzbf2dMd32xOqhoKpJArJooZhoX6v2qOcFO-wjSZUvs3H9xqq2gK4DQ47X0KnYgf7X2rpdU=s900-c-k-c0x00ffffff-no-rj',
  },
];

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleSearch = text => setSearch(text);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % banners.length;
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const SectionHeader = ({title}) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCard = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.cardImage} />
      <Text style={styles.name}>{item.name}</Text>
      <TouchableOpacity style={styles.addToCartIcon}>
        <MaterialIcons name="add-shopping-cart" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={filteredList}
        keyExtractor={(item, index) => item.name + index}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            {/* Location */}
            <View style={styles.locationWrapper}>
              <Text style={styles.location}>
                <Ionicons name="location-sharp" size={20} color="black" />{' '}
                Location
              </Text>
            </View>

            {/* Search */}
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

            {/* Banner with Dots */}
            <View style={styles.bannerWrapper}>
              <FlatList
                ref={flatListRef}
                data={banners}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                renderItem={({item}) => (
                  <View style={styles.slide}>
                    <Image source={item} style={styles.bannerImage} />
                  </View>
                )}
              />
              <View style={styles.indicatorContainer}>
                {banners.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      index === currentIndex && styles.activeDot,
                    ]}
                  />
                ))}
              </View>
            </View>

            {/* Sections */}
            <SectionHeader title="Exclusive Offer" />
          </>
        }
        ListFooterComponent={
          <>
            <SectionHeader title="Best Selling" />
            <FlatList
              data={filteredList}
              keyExtractor={(item, index) => item.name + 'bs' + index}
              numColumns={2}
              columnWrapperStyle={styles.row}
              scrollEnabled={false}
              renderItem={renderCard}
            />

            <SectionHeader title="Groceries" />
            <FlatList
              data={filteredList}
              keyExtractor={(item, index) => item.name + 'gr' + index}
              numColumns={2}
              columnWrapperStyle={styles.row}
              scrollEnabled={false}
              renderItem={renderCard}
            />
          </>
        }
        renderItem={renderCard}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  locationWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  location: {
    fontSize: 16,
    fontWeight: '500',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  bannerWrapper: {
    position: 'relative',
    width: width - 32,
    height: width * 0.45,
    alignSelf: 'center',
    marginTop: 20,
  },
  slide: {
    width: width - 32,
    height: width * 0.45,
    borderRadius: 16,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#F75C03',
  },
  sectionHeader: {
    marginTop: 24,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  seeAll: {
    fontSize: 14,
    color: 'red',
    fontWeight: '600',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: (width - 48) / 2,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  addToCartIcon: {
    backgroundColor: '#F26B6B',
    alignSelf: 'flex-end',
    padding: 6,
    borderRadius: 50,
  },
});
