import { useState } from "react";
import {
    Dimensions,
    FlatList,
    Modal,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { width, height } = Dimensions.get('screen');

const FilterModal = ({ modalVisible, setModalVisible }) => {
    const categories = ['Eggs', 'Noodles & Pasta', 'Chips & Crisps', 'Fast Food'];
    const brands = ['Individual Collection', 'Cocola', 'Ifad', 'Kazi Farmas'];
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const handleCategoryItem = (item) => {
        if (selectedCategories.includes(item)) {
            setSelectedCategories(prev => prev.filter(selItem => selItem !== item));
        } else {
            setSelectedCategories(prev => [...prev, item]);
        }
    }

    const handleBrandItem = (item) => {
        if (selectedBrands.includes(item)) {
            setSelectedBrands(prev => prev.filter(selItem => selItem !== item));
        } else {
            setSelectedBrands(prev => [...prev, item]);
        }
    }

    const renderCategoryItem = ({ item }) => {
        const isSelected = selectedCategories.includes(item);
        return (
            <View style={styles.checkboxRow}>
                <TouchableOpacity style={[styles.checkBoxView, isSelected && styles.checkBoxSelectView]} activeOpacity={0.8} onPress={() => handleCategoryItem(item)}>
                    {isSelected && <MaterialIcons name={'check'} color={'#fff'} size={15} />}
                </TouchableOpacity>
                <Text style={[styles.checkboxLabel, { color: isSelected ? '#F26B6B' : '#000' }]}>{item}</Text>
            </View>
        )
    }

    const renderBrandItem = ({ item }) => {
        const isSelected = selectedBrands.includes(item);
        return (
            <View style={styles.checkboxRow}>
                <TouchableOpacity style={[styles.checkBoxView, isSelected && styles.checkBoxSelectView]} activeOpacity={0.8} onPress={() => handleBrandItem(item)}>
                    {isSelected && <MaterialIcons name={'check'} color={'#fff'} size={15} />}
                </TouchableOpacity>
                <Text style={[styles.checkboxLabel, { color: isSelected ? '#F26B6B' : '#000' }]}>{item}</Text>
            </View>
        )
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <MaterialIcons
                            name="clear"
                            size={24}
                            color="#000"
                            style={styles.searchIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textStyle}>Filter</Text>
                </View>
                <View style={styles.bottomView}>
                    <View>
                        <Text style={styles.categoryStyle}>Categories</Text>
                        <FlatList
                            data={categories}
                            keyExtractor={(item) => item}
                            renderItem={renderCategoryItem}
                            scrollEnabled={false}
                        />
                    </View>

                    <View>
                        <Text style={[styles.categoryStyle, styles.brandTextStyle]}>Brand</Text>
                        <FlatList
                            data={brands}
                            keyExtractor={(item) => item}
                            renderItem={renderBrandItem}
                            scrollEnabled={false}
                        />
                    </View>
                    {/* Apply Filter Button */}
                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyText}>Apply Filter</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    )
}
export default FilterModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 60,
        width: width,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        marginRight: 8,
    },
    textStyle: {
        width: 200,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 20,
    },
    bottomView: {
        height: height * 0.8,
        width: width,
        backgroundColor: '#F2F3F2',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 28,
        paddingVertical: 30
    },
    categoryStyle: {
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 24,
        marginBottom: 20
    },
    brandTextStyle: {
        marginVertical: 40
    },
    checkBoxView: {
        height: 24,
        width: 24,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: '#B1B1B1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkBoxSelectView: {
        height: 24,
        width: 24,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: '#F26B6B',
        backgroundColor: '#F26B6B',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkboxLabel: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Roboto',
        left: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    section: {
        fontSize: 16,
        fontWeight: '700',
        marginVertical: 12,
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    selectedLabel: {
        color: '#E57373',
    },
    applyButton: {
        backgroundColor: '#E57373',
        padding: 15,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: height * 0.15
    },
    applyText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
})