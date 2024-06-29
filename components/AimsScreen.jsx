import * as React from 'react';
import HeaderComponent from './HeaderComponent';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';
import { SafeAreaView, Text, ScrollView, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    icon: {
        display: 'block',
        position: 'absolute',
        bottom: '15%',
        left: '50%'
    },
    containerShadow: {
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: { width: 2, height: 5 },
        shadowRadius: 2
    }
});

const AimsScreen = ({ navigation }) => {

    const aims = [
        { text: 'Повышение эффективности Компании', icon: <FontAwesome style={styles.icon} name="angle-double-up" size={24} color="#2394C6" opacity="0.5" /> }, 
        { text: 'Повышение удовлетворенности Компании', icon: <FontAwesome6 style={styles.icon} name="smile" size={24} color="#2394C6" opacity="0.5" /> },
        { text: 'Гарантирование безопасности движения поездов', icon: <MaterialIcons style={styles.icon} name="security" size={24} color="#2394C6" opacity="0.5" /> },
        { text: 'Обеспечение устойчивого развития Компании', icon: <Octicons style={styles.icon} name="graph" size={24} color="#2394C6" opacity="0.5" /> }
    ];

    const steps = [
        {name: 'КАСКАДИРОВАНИЕ', text: 'Непосредственный руководитель информирует работников о корпоративных КПД и целях для каскадирования в индивидуальные цели работников.'},
        {name: 'ПРЕДВАРИТЕЛЬНОЕ ПЛАНИРОВАНИЕ', text: 'Работник формирует предварительный лист оценки по целям на полугодие в соответствии с подходом SMART'},
        {name: 'ОБСУЖДЕНИЕ С НЕПОСРЕДСТВЕННЫМ РУКОВОДИТЕЛЕМ', text: 'Непосредственный руководитель и работник обсуждают предварительный лист по целям на полугодие, в том числецелевые значения и форму завершения'},
        {name: 'СОГЛАСОВАНИЕ С HR БИЗНЕС-ПАРТНЕРОМ HR СЛУЖБОЙ', text: 'Согласование целей работником на соответствие подходу SMART и каскадирование'},
        {name: 'УТВЕРЖДЕНИЕ ', text: 'Утверждение целей работника непосредственным руководителем'},
    ]

    const smart = [
        {letter: 'S', name: 'Конкретная', text: 'Что я хочу?'},
        {letter: 'M', name: 'Измеримая', text: 'Как я узнаю, что достиг цели?'},
        {letter: 'A', name: 'Достижимая', text: 'Можно ли вообще достичь этой цели? '},
        {letter: 'R', name: 'Согласованная', text: 'Почему эта задача важна сегодня?'},
        {letter: 'T', name: 'Определенная по времени', text: 'Когда я хочу достичь этой цели?'}
    ]

    return (
        <SafeAreaView backgroundColor="#fefefe">
            <HeaderComponent screenName={"Цели"} navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={false} className="h-full pt-6 w-5/6 mx-auto">
                <Text className="text-2xl font-bold text-center text-theme-amber mb-5">Стратегические цели</Text>
                <View className="flex flex-row flex-wrap justify-between p-1">
                    {aims.map((aim, index) => (
                        <View key={index} style={styles.containerShadow} className="block px-3 pt-3 pb-10 mb-3 w-custom-half relative bg-theme-white rounded">
                            <Text className="text-center text-sm font-medium mb-3">{aim.text}</Text>
                            {aim.icon}
                        </View>
                    ))}
                    <View style={styles.containerShadow} className="block px-3 pt-3 pb-10 mb-3 w-full relative rounded bg-theme-white">
                        <Text className="text-center text-sm font-medium mb-3">Вывод Компании из зоны финансового риска и обеспечение финансовой устойчивости</Text>
                        <FontAwesome6 style={styles.icon} name="money-bill-trend-up" size={24} color="#2394C6" opacity="0.5" />
                    </View>
                </View>
                <Text className="text-2xl font-bold text-center text-theme-amber mb-5 mt-8">Постановка целей</Text>
                <Text className="text-base font-medium text-left text-gray-500">
                    Помогает определить основные и выбрать приоритетные цели, а также эффективно их достигать, повышает личную ффективность на рынке.
                </Text>
                <View>
                    <Text className="text-2xl font-bold text-center text-theme-amber mb-5 mt-8">Этапы постановки целей</Text>
                    {steps.map((el, i) => (
                        <View className="mb-4" key={i}>
                            <Text className="text-base font-medium text-theme-blue mb-2">{i+1 + ". " + el.name}</Text>
                            <Text className="text-base font-medium text-gray-500">{el.text}</Text>
                        </View>
                    ))}
                </View>
                <View className="flex flex-col">
                    <Text className="text-2xl font-bold text-center text-theme-amber mb-5 mt-8">SMART подход</Text>
                    {smart.map((el, i) => (
                        <View key={i} className="flex-row justify-between mb-2 items-center">
                            <View style={styles.containerShadow} className="w-3/12 rounded bg-theme-amber py-2">
                                <Text className="text-theme-white text-lg text-center">{el.letter}</Text>
                            </View>
                            <View className="w-7/12">
                                <Text className="text-base font-semibold text-gray-600">{el.name}</Text>
                                <Text className="text-base font-medium text-gray-500">{el.text}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <View className="h-16"></View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AimsScreen;
