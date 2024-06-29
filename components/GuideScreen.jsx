import * as React from 'react';
import HeaderComponent from './HeaderComponent';
import { Text, View, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native';

const GuideScreen = ({ navigation }) => {

    const places = [
        '3 этаж Блок А, Б',
        '16 этаж блок А, Б',
        '22 этаж Блок А, Б',
        'ул. Кунаева 10, 1 этаж «Starbucks»',
        'ул. Кунаева 10, 2 этаж «Тарелка»',
        'Расположение музея АО «НК «ҚТЖ»: 2 этаж, Блок А',
        'Зимний сад: 37 этаж Блок А',
        'Мажилис зал: 3 этаж Блок А',
        'Конференц-залы: 3 этаж Блок А, 36 этаж Блок А; 34 этаж блок А',
        'Спортивный зал и бассейн: 1 этаж блок А',
        'Продуктовый магазин: 2 этаж блок А',
        'Банкомат: филиал «Халык Банк»: 2 этаж блок А',
        'Учебный центр - Филиал Центр оценки и развития персонала ж/д транспорта, адрес: г.Нур-Султан, ул.А184, 9/1',
        'Переходы между блоками А и Б: 16 этаж, 22 этаж, 28 этаж',
    ]

    const styles = StyleSheet.create({
        image: {
            width: '100%',
            height: 200,
            objectFit: 'cover'
        }
    })

    return(
        <SafeAreaView backgroundColor="#fefefe">
            <HeaderComponent navigation={navigation} screenName={"Путеводитель"} />
            <ScrollView showsVerticalScrollIndicator={false} className="h-full pt-6 w-5/6 mx-auto">
                <Text className="text-2xl font-bold text-center text-theme-amber mb-5">Путеводитель по административному зданию</Text>
                <View className="mb-5">
                    <Text className="text-xl font-semibold text-theme-blue mb-4">Расположение столовых и кофеин:</Text>
                    {places.map((el, i) => (
                        <View key={i} className="border-b border-theme-blue py-1 mb-2">
                            <Text className="text-base font-medium text-gray-600">{el}</Text>
                        </View>
                    ))}
                </View>
                <View>
                    <Text className="text-xl font-semibold text-theme-blue mb-5">Врач в здании</Text>
                    <Image className="rounded mb-5" style={styles.image} source={require('../assets/doctor.jpg')} />
                    <View>
                        <Text className="text-lg font-bold text-gray-600 mb-4">Медицинские услуги, которые оказываются в здании по ул. Кунаева 6 (вход 5 со стороны спортивного зала):</Text>
                        <Text className="text-base font-medium text-gray-500 mb-2">кабинет врача-терапевта, который обслуживает работников, застрахованных в рамках добровольного медицинского страхования на случай болезни. Чтобы попасть на прием необходимо позвонить в Call-центр и записаться к терапевту.</Text>
                        <Text className="text-base font-medium text-gray-500 mb-4">физиокабинет, оказывающий услуги: ДДТ, магнит, биоптрон </Text>
                        <Text className="text-lg font-bold text-gray-600">Режим работы врача-терапевта и физиокабинета в будние дни с 08:00 до 15:30 часов</Text>
                    </View>
                </View>
                <View className="h-16"></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default GuideScreen;