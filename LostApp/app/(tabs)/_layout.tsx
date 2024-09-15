import { MaterialCommunityIcons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Bem vindo',
          tabBarIcon: ({ color }) => <IconButton icon="home" iconColor={color} />,
        }}
      />
      <Tabs.Screen
        name="lista-compras"
        options={{
          title: 'Lista Compras',
          tabBarIcon: ({ color }) =>  <IconButton icon="cart" iconColor={color} />,
        }}
      />
    </Tabs>
  );
}
