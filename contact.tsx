import { Text, View, TextInput, TouchableOpacity, Linking, Alert } from "react-native";
import { Button } from "../components/Button";
import { isValidEmail } from "@my-monorepo/utils";
import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = () => {
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    Alert.alert("Mensagem enviada!", "Funcionalidade de envio de e-mail não implementada.");
    setEmail("");
    setMessage("");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#b95fa6", marginBottom: 20 }}>Contato</Text>
      <View style={{ width: "100%", maxWidth: 400, gap: 15 }}>
        <TextInput
          placeholder="Seu E-mail"
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: emailError ? "red" : "#ccc",
            borderRadius: 5,
          }}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError && <Text style={{ color: "red", fontSize: 12 }}>Por favor, insira um e-mail válido.</Text>}
        <TextInput
          placeholder="Sua Mensagem"
          multiline
          numberOfLines={5}
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            height: 100,
            textAlignVertical: "top",
          }}
          value={message}
          onChangeText={setMessage}
        />
        <Button onPress={handleSubmit}>Enviar Mensagem</Button>
      </View>
      <View style={{ flexDirection: "row", gap: 20, marginTop: 30 }}>
        <TouchableOpacity onPress={() => Linking.openURL("https://wa.me/5511999999999")}>
          <Text style={{ color: "blue", textDecorationLine: "underline" }}>WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Rede Social", "Link para Rede Social 1")}>
          <Text style={{ color: "blue", textDecorationLine: "underline" }}>Rede Social 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Rede Social", "Link para Rede Social 2")}>
          <Text style={{ color: "blue", textDecorationLine: "underline" }}>Rede Social 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


