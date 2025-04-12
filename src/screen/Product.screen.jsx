const Productfilter = () => {
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [filteredList, setFilteredList] = useState(PRODUCT_LIST);

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
    backgroundColor: 'yellow'
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
