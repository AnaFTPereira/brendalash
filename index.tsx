import { Text, View } from "react-native";
import { Button } from "../components/Button";
import { home } from "@my-monorepo/content/pt.json";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#b95fa6" }}>{home.title}</Text>
      <Text style={{ fontSize: 16, color: "#111827", textAlign: "center", marginHorizontal: 20 }}>{home.description}</Text>
      <Button>Agendar Agora</Button>
    </View>
  );
}


