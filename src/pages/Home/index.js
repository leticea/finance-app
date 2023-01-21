import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix cliente X',
    value: '2.500,00',
    date: '17/09/2022',
    type: 0 //receita / entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.500,00',
    date: '17/09/2022',
    type: 0 //receita / entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Maria" />
      <Balance saldo="9.250.90" gastos="-527.00" />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Text>TESTE</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
