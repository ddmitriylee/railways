import * as React from 'react';
import HeaderComponent from './HeaderComponent';
import { List } from 'react-native-paper';
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
  
const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: 'bold', 
        fontSize: 18, 
        color: '#2394C6'
    },
    containerStyle: {
        width: '100%', 
        borderTopWidth: '1px', 
        borderBottomWidth: '1px', 
        borderColor: '#333', 
        borderStyle: 'solid'
    }
})

const RulesScreen = ({ navigation }) => {
    return (
        <SafeAreaView backgroundColor="#fefefe">
            <HeaderComponent navigation={navigation} screenName={"Правила"} />
            <ScrollView showsVerticalScrollIndicator={false} className="h-full pt-6 w-5/6 mx-auto">
                <Text className="text-2xl font-bold text-center text-theme-amber mb-5">Регламент и правила работы в офисе</Text>
                <List.Accordion titleStyle={styles.titleStyle} style={styles.containerStyle} title="График">
                    <View className="py-5 px-4">
                        <Text className="mb-2 text-base font-medium text-gray-600">Рабочий день: с 9:00-18:30</Text>
                        <Text className="mb-2 text-base font-medium text-gray-600">Обеденный перерыв: с 13:00-14:30</Text>
                        <Text className="mb-2 text-base font-medium text-gray-600">Выходные дни: суббота, воскресенье</Text>
                    </View>
                </List.Accordion>
                <List.Accordion titleStyle={styles.titleStyle} style={styles.containerStyle} title="Дресс-код">
                    <View className="py-5 px-4">
                        <Text className="mb-2 text-base font-medium text-gray-600">для женщин предпочтительны: деловые костюмы, платья, юбки ниже колен, однотонные блузки, брюки классические туфли на небольшом каблуке</Text>
                        <Text className="mb-2 text-base font-medium text-gray-600">для мужчин предпочтительны: костюмы, брюки и рубашки с длинным (в зимний период) или коротким (в летний период) рукавом, наличие галстука, трикотажные пуловеры, темные носки</Text>
                        <Text className="mb-2 text-base font-medium text-gray-600">Для работников производственных подразделений специальная или форменная одежда</Text>
                    </View>
                </List.Accordion>
                <List.Accordion titleStyle={styles.titleStyle} style={styles.containerStyle} title="Правила посещения здания">
                    <View className="py-5 px-4">
                        <Text className="mb-2 text-base font-medium text-gray-600">перемещение посторонних лиц по зданию необходимо осуществлять с персональным пропуском, либо с сопровождающим лицом</Text>
                        <Text className="mb-2 text-base font-medium text-gray-600">будьте внимательны и осторожны во время влажной уборки (скользкий пол)</Text>
                        <Text className="mb-2 text-base font-medium text-gray-600">при включении сигнала оповещения об аварийной ситуации необходимо немедленно проследовать в соответствии с планами эвакуации, расположенными на этажах и в холлах здания</Text>
                        <Text className="mb-2 text-base font-medium text-gray-600">на лестницах держитесь за перила</Text>
                        <Text className="mb-4 text-base font-medium text-gray-600">если вы обнаружили огонь, попытайтесь воспользоваться огнетушителем</Text>
                    </View>
                </List.Accordion>
                <List.Accordion titleStyle={styles.titleStyle} style={styles.containerStyle} title="Запрещается:">
                    <View className="py-5 px-4">
                        <Text className="mb-2 text-base font-medium text-red-500">Курить в административном здании АО «НК «ҚТЖ»</Text>
                        <Text className="mb-2 text-base font-medium text-red-500">Производить фото и видеосъемку без разрешения </Text>
                        <Text className="mb-2 text-base font-medium text-red-500">Пользоваться лифтом во время пожара и землетрясения</Text>
                        <Text className="mb-2 text-base font-medium text-red-500">Перегружать лифт</Text>
                        <Text className="mb-2 text-base font-medium text-red-500">Пользоваться неисправным лифтом и без освещения в кабинете</Text>
                        <Text className="mb-2 text-base font-medium text-red-500">Сорить в административном здании и на прилегающей территории </Text>
                    </View>
                </List.Accordion>
                <List.Accordion titleStyle={styles.titleStyle} style={styles.containerStyle} title="Правила информационной безопасности">
                    <View className="py-5 px-4">
                        <Text className="mb-2 text-base font-medium text-gray-600">для пересылки служебной информации используйте только рабочий адрес</Text>
                        <Text className="mb-2 text-base font-medium text-gray-600">не использовать любые программы на компьютере без проверки имеющимся на компьютере антивирусом</Text>
                        <Text className="mb-2 text-base font-medium text-gray-600">покидая рабочее место необходимо блокировать персональный компьютер, во избежание стороннего проникновения посторонних лиц, не имеющих доступа к информации Компании</Text>
                        <Text className="mb-2 text-base font-medium text-gray-600">сохранять известные вам пароли в тайне</Text>
                        <Text className="mb-2 text-base font-medium text-gray-600"> закрывать активные сеансы по завершению работы</Text>
                        <Text className="mb-2 text-base font-medium text-gray-600">по завершению работы выходить из учетной записи </Text>
                        <Text className="mb-2 text-base font-medium text-gray-600">для утилизации конфиденциальных документов должны использоваться уничтожители бумаги </Text>
                    </View>
                </List.Accordion>
                <View className="h-16"></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RulesScreen;