import { Stack } from "expo-router"
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  colors: {
    primary: '#6200EE', // Cor primária do Material Design 3
    accent: '#03DAC5', // Cor secundária do Material Design 3
  },
}

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      </Stack>
    </PaperProvider>
  )
}