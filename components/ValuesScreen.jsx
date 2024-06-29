import * as React from 'react';
import HeaderComponent from './HeaderComponent';
import { SafeAreaView, Text, ScrollView, View } from 'react-native';

const ValuesScreen = ({ navigation }) => {

    const values = [
        {heading: "БЕЗОПАСНОСТЬ", text: "Мы несем ответственность за жизнь, здоровье и сохранность каждого нашего работника, пассажира и груза"},
        {heading: "ЛИДЕРСТВО", text: "Нам важно работать слаженно, ведь мы часть единой системы, которая работает на благо каждого нашего клиента и страны в целом"},
        {heading: "АМБИЦИИ", text: "Мы с достоинством встречаем все сложности и вызовы, настойчиво преодолеваем любые препятствия на нашем пути, потому что знаем, от нас зависит благополучие наших клиентов, чьи интересы и потребности для нас - основной приоритет"},
        {heading: "ГОРДОСТЬ", text: "Мы посвящаем отрасли всю жизнь, поскольку доставляем критичные для населения грузы, соединяем города и государства, и работаем даже в самых отдаленных регионах страны"},
        {heading: "ОТВЕТСТВЕННОСТЬ", text: "Мы обеспечиваем качественные услуги для всех наших клиентов, ведь мы флагман на рынке транспортных услуг"}
    ]

    return(
        <SafeAreaView backgroundColor="#fefefe">
            <HeaderComponent screenName={"Ключевые ценности"} navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator="false" className="h-full pt-6 w-5/6 mx-auto">
                {
                    values.map((elem, index) => (
                        <Text key={index} className="mb-3">
                            <Text className="text-lg text-theme-blue font-semibold">{elem.heading} </Text>
                            <Text className="text-base text-gray-600 font-medium">- {elem.text}</Text>
                        </Text>
                    ))
                }
                <View className="h-16"></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ValuesScreen;