import React from 'react';
import { View, Text } from 'react-native';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      {children}
    </View>
  );
};

export default MainLayout;