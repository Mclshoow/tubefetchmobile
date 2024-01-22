import { StatusBar } from "expo-status-bar";
import { TextInput, StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import Constants from "expo-constants";
import React, { useEffect } from 'react';


export default function App() {
  let valorInicial = ["Arroz", "Feijao"];

  let [listaCompras, definirListaCompras] = useState(valorInicial);

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://localhost:5001/v1/todos", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        console.error("Erro ao buscar dados. Código de status:", xhr.status);
      }
    }
  };

  xhr.send();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={listaCompras}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <TextInput
        placeholder={"Adicionar Novo Item"}
        onSubmitEditing={({ nativeEvent }) =>
          definirListaCompras(listaCompras.concat(nativeEvent.text))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
