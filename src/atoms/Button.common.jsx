import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ title, customStyle, onPress,titleText }) => {
    return (
        <TouchableOpacity style={[styles.buttonView,customStyle]} onPress={onPress} activeOpacity={0.8}>
            <Text style={[styles.titleText,titleText]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default Button;

const styles = StyleSheet.create({
    buttonView:{
        backgroundColor: '#F26B6B',
        padding: 15,
        width: 364,
        borderRadius: 16,
        alignSelf: 'center',
        alignItems: 'center',
    },
    titleText:{
        color: '#fff',
        fontWeight: '600',
        fontSize: 16, 
    }
})