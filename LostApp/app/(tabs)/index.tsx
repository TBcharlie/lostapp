import { View,StyleSheet,TouchableOpacity,Pressable } from 'react-native';
import { Link } from 'expo-router'
import MainLayout from '../../components/layouts/mainlayout'
import { Card, Text,useTheme } from 'react-native-paper';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import * as ImagePicker from 'expo-image-picker';



export default function Index() {
  const navigation = useNavigation();
  const { colors } = useTheme();  // Utiliza o tema atual
  const totalSelecionado = 5;  // Exemplo de valores
  const totalCriado = 10;

  // const openCamera = async () => {
  //   const result = await ImagePicker.launchCameraAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.cancelled) {
  //     console.log(result.uri); // Aqui você pode manipular a URI da imagem
  //   }
  // };

  return (
    <MainLayout>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("lista-compras" as never)}>
          <Card 
            mode="outlined"
            style={[styles.card, { borderColor: colors.outlineVariant, backgroundColor: '#FFFFFF' }]}
          >
            <Card.Content style={styles.cardContent}>
              <View style={styles.leftSide}>
                <Text style={styles.leftText}>Lista de Compras</Text>
              </View>
              <View style={styles.rightSide}>
                <Text style={styles.rightText}>{totalSelecionado}/{totalCriado}</Text>
                <Icon name="cart-outline" size={24} color="black" style={styles.icon} />
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("lista-compras" as never)}>
          <Card 
            mode="outlined"
            style={[styles.card, { borderColor: colors.outlineVariant, backgroundColor: '#FFFFFF' }]}
          >
            <Card.Content style={styles.cardContent}>
              <View style={styles.leftSide}>
                <Text style={styles.leftText}>Historico de Compras</Text>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <View style={styles.card}>
          {/* Pressable para abrir a câmera */}
          <Pressable 
          // onPress={openCamera} 
          // style={styles.iconWrapper}
          >
            <Icon name="camera" size={24} color="black" />
          </Pressable>

          {/* Barra divisória */}
          {/* <View style={styles.divider} /> */}

          {/* Pressable para navegar para uma nova tela */}
          <Pressable 
          // style={styles.textWrapper} 
          
          onPress={() => navigation.navigate('NotasFiscaisScreen' as never)}>
            <Text 
            // style={styles.title}
            >Notas Fiscais</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Text>Home</Text>
        <Link href="/lista-compras">View details</Link>
      </View>
    </MainLayout>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 16,
  },
  card: {
    marginVertical: 10,
    // borderColor: '#b0bec5',  // Cor da borda (outline variant),
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    flex: 1,
  },
  leftText: {
    fontSize: 18,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightText: {
    fontSize: 16,
    marginRight: 8,
  },
  icon: {
    marginLeft: 4,
  },
});


// const styles = StyleSheet.create({
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF', // Fundo branco
//     borderColor: '#E0E0E0', // Outline variant
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 16,
//     marginVertical: 8,
//   },
//   iconWrapper: {
//     marginRight: 16,
//   },
//   textWrapper: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   divider: {
//     height: '80%', // Altura da barra divisória
//     width: 1,
//     backgroundColor: '#E0E0E0', // Cor da barra divisória
//     marginHorizontal: 16,
//   },
// });
