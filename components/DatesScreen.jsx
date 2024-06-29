import * as React from 'react';
import HeaderComponent from './HeaderComponent';
import { SafeAreaView, Text, ScrollView, View, Image, StyleSheet } from 'react-native';

const DatesScreen = ({ navigation }) => {

    const dates = [
        {date: '1904', text: 'Открыта первая трансказахстанская магистраль Оренбург - Ташкент, протянувшаяся на 1668 км от границ с Россией на северо-западе и Узбекистаном на юге.'},
        {date: '1997', text: 'Созданием республиканского государственного предприятия «Қазақстан темiр жолы» начат первый этап преобразований в отрасли.'},
        {date: '2004', text: 'ЗАО «НК «ҚТЖ» преобразовано в Акционерное общество «Национальная компания «Қазақстан темір жолы».'},
        {date: '2011', text: 'АО «НК «ҚТЖ» из железнодорожной компании преобразовано в транспортно-логистический холдинг с задачей развития транзитного потенциала Казахстана и глобальной инфраструктурной интеграции.'},
    ]

    const values = [
        {heading: "БЕЗОПАСНОСТЬ", text: "Мы несем ответственность за жизнь, здоровье и сохранность каждого нашего работника, пассажира и груза"},
        {heading: "ЛИДЕРСТВО", text: "Нам важно работать слаженно, ведь мы часть единой системы, которая работает на благо каждого нашего клиента и страны в целом"},
        {heading: "АМБИЦИИ", text: "Мы с достоинством встречаем все сложности и вызовы, настойчиво преодолеваем любые препятствия на нашем пути, потому что знаем, от нас зависит благополучие наших клиентов, чьи интересы и потребности для нас - основной приоритет"},
        {heading: "ГОРДОСТЬ", text: "Мы посвящаем отрасли всю жизнь, поскольку доставляем критичные для населения грузы, соединяем города и государства, и работаем даже в самых отдаленных регионах страны"},
        {heading: "ОТВЕТСТВЕННОСТЬ", text: "Мы обеспечиваем качественные услуги для всех наших клиентов, ведь мы флагман на рынке транспортных услуг"}
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
            <HeaderComponent screenName={"Даты и ценности"} navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator="false" className="h-full pt-6 w-5/6 mx-auto">
                <Text className="text-2xl font-bold text-center text-theme-amber mb-5">Ключевые даты</Text>
                <View className="mb-5">
                {
                    dates.map((elem, index) => (
                        <Text key={index} className="mb-5">
                            <Text className="text-xl font-bold text-theme-amber">{elem.date} </Text>
                            <Text className="text-base font-medium text-gray-600">- {elem.text}</Text>
                        </Text>
                    ))
                }
                <Image className="rounded mb-2" style={styles.image} source={require('../assets/poezd.jpg')} />
                </View>
                <Text className="text-2xl font-bold text-center text-theme-amber mb-5">Ключевые ценности</Text>
                <View>
                    {
                        values.map((elem, index) => (
                            <Text key={index} className="mb-3">
                                <Text className="text-lg text-theme-blue font-semibold">{elem.heading} </Text>
                                <Text className="text-base text-gray-600 font-medium">- {elem.text}</Text>
                            </Text>
                        ))
                    }
                </View>
            <View className="h-16"></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DatesScreen;