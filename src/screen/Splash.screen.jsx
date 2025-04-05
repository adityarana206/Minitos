import { Dimensions, Text, View } from "react-native";
const { height, width } = Dimensions.get('screen');

const Splash = () => {
    return (
        <View style={{ height: height, width: width, backgroundColor: 'red' }}>
            <Text>Splash</Text>
        </View>
    )
};

export default Splash;
