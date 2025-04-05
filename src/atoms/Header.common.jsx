import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, Platform, StyleSheet, TouchableOpacity, View } from "react-native";
const {width} = Dimensions.get('screen');
const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerView}>
            <TouchableOpacity style={styles.backBtn} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/backArrow.png')} style={styles.goBackView} resizeMode={'contain'} />
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerView: {
        marginTop: Platform.OS === 'android' ? 50 : 0,
        width: width * 0.88,
        height: 57,
        justifyContent: 'center'
    },
    backBtn: {
        height: 20,
        width: 20
    },
    goBackView: {
        width: 10,
        height: 18
    },
})