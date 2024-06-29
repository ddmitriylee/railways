import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as React from 'react';

const styles = StyleSheet.create({
    logo: {
        width: 35,
        height: 35
    },
    menu: {
        width: 20,
        height: 15,
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 2
    }
})

const HeaderComponent = ({ screenName, navigation }) => {
    return(
        <View style={styles.shadow} backgroundColor='#fefefe' className="pb-3 container z-0">
            <View className="w-5/6 flex flex-row items-center mx-auto">
                <View className="mr-auto">
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                </View>
                <Text className="mx-auto font-semibold text-lg text-center">{screenName}</Text>
                <TouchableOpacity className="ml-auto" onPress={() => navigation.openDrawer()}>
                    <Image style={styles.menu} source={require('../assets/menu.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderComponent;