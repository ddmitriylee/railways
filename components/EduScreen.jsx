import * as React from 'react';
import HeaderComponent from './HeaderComponent';
import { PieChart } from 'react-native-gifted-charts';
import { SafeAreaView, Text, ScrollView, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    colorSquare: {
        height: 18,
        width: 18,
        marginRight: 10,
        borderRadius: 4
    }
})

const EduScreen = ({ navigation }) => {

    const data = [
        {name: 'Практика', color: '#2394C6', value: 70},
        {name: 'Обучение на рабочем месте', color: '#BA8C00', value: 20},
        {name: 'Традиционное обучение', color: '#6b7280', value: 10},
    ]

    return(
        <SafeAreaView backgroundColor="#fefefe">
            <HeaderComponent navigation={navigation} screenName="Обучение и развитие"/>
            <ScrollView showsVerticalScrollIndicator={false} className="h-full pt-6 w-5/6 mx-auto">
                <Text className="text-2xl font-bold text-center text-theme-amber mb-5">Система обучения и развития</Text>
                <View>
                    <Text className="text-base text-gray-500 font-medium">Все сотрудники Компании должны повышать уровень своей квалификации, деловых навыков и компетенций  с помощью обучающих мероприятий (семинаров, тренингов, специальных проектов и т.д.) согласно Индивидуальному плану развития (ИПР), который утверждается на годовой период. Индивидуальный план развития сотрудника (ИПР) — это программа мероприятий, нацеленная на повышение эффективности работника и его профессиональный рост в компании. </Text>
                </View>
                <Text className="text-2xl font-bold text-center text-theme-amber mt-5">Принцип 70/20/10</Text>
                <View className="flex items-center">
                    <PieChart data={data}
                        radius={140}
                        donut
                        showText
                        showValuesAsLabels
                        showTextBackground
                        textBackgroundColor="#fefefe"
                        textBackgroundRadius={22}
                        textColor="#333"
                        textSize={16}
                        fontWeight="semibold"
                        strokeWidth={2}
                        strokeColor="#333"
                        innerCircleBorderWidth={2}
                        innerCircleBorderColor="#333"
                        innerRadius={50}
                        focusOnPress
                        />
                    <View className="mt-4">
                        {data.map((el, i) => (
                            <View key={i} className="flex flex-row mb-2" >
                                <View style={styles.colorSquare} backgroundColor={el.color} />
                                <Text className="text-gray-500 font-medium text-sm">{el.name}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-lg font-semibold text-gray-600 mb-4">Система обучения и развития в Компании:</Text>
                    <Text className="text-base font-medium text-gray-500 mb-2">- позволяет иметь четкое представление о плане повышения квалификации, что является очевидным стимулом к росту.</Text>
                    <Text className="text-base font-medium text-gray-500 mb-2">- позволяет определить приоритетные направления для роста </Text>
                    <Text className="text-base font-medium text-gray-500 mb-2">- дает возможность объединить цели сотрудника с целями компании</Text>
                    <Text className="text-base font-medium text-gray-500 mb-2">- мотивирует к саморазвитию</Text>
                </View>
                <View className="h-16"></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EduScreen;