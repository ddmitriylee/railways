import { SafeAreaView, Text, ScrollView } from 'react-native';
import HeaderComponent from './HeaderComponent';

const HomeScreen = ({ navigation }) => {
    return(
        <SafeAreaView backgroundColor="#fefefe" className="container flex justify-center">
            <HeaderComponent screenName={"Добро пожаловать!"} navigation={navigation} />
            <ScrollView className="pt-12 h-full w-5/6 mx-auto">
                <Text className="text-theme-blue text-xl font-bold text-center mb-5">Уважаемый Коллега!</Text>
                <Text className="text-gray-600 text-base font-semibold text-center">Я рад приветствовать Вас в команде профессионалов АО «НК «ҚТЖ»! Теперь Вы работник системообразующего транспортно-логистического холдинга Казахстана. Миссией АО «НК «ҚТЖ» является обеспечение качественной основы устойчивого роста бизнеса наших клиентов, служение на пользу потребителям и обществу в целом путем оказания безопасных и конкурентоспособных перевозочных услуг.
                Именно Вы помогаете создавать и оказывать клиентам наши услуги, а значит, именно от Вашего профессионализма зависит качество нашего сервиса и мнение клиентов о нас.</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;