import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './components/HomeScreen';
import DatesScreen from './components/DatesScreen';
import AimsScreen from './components/AimsScreen';
import EduScreen from './components/EduScreen';
import RulesScreen from './components/RulesScreen';
import GuideScreen from './components/GuideScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Домашняя страница" screenOptions={{ headerShown: false, drawerPosition: 'right' }}>
        <Drawer.Screen name="Домашняя страница" component={HomeScreen} />
        <Drawer.Screen name="Ключевые даты и ценности" component={DatesScreen} />
        <Drawer.Screen name="Стратегические цели" component={AimsScreen} />
        <Drawer.Screen name="Система обучения и развития" component={EduScreen} />
        <Drawer.Screen name="Правила" component={RulesScreen} />
        <Drawer.Screen name="Путеводитель по зданию" component={GuideScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
