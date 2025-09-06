import { Text, View } from "react-native";
import { Button } from "../components/Button";
import { event } from "@my-monorepo/content/pt.json";
import MapView, { Marker } from 'react-native-maps';

export default function Event() {
  const handleStripeCheckout = () => {
    alert("Redirecionando para o checkout do Stripe (funcionalidade de integração não implementada).");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#b95fa6" }}>{event.title}</Text>
      <Text style={{ fontSize: 16, color: "#111827", textAlign: "center", marginHorizontal: 20 }}>{event.description}</Text>
      <Button onPress={handleStripeCheckout}>Inscrever-se (Stripe Demo)</Button>
      <View style={{ width: '100%', height: 300, marginTop: 20 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.421999999999995,
            longitude: -122.08424999999999,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 37.421999999999995,
              longitude: -122.08424999999999,
            }}
            title="Local do Evento"
            description="Googleplex"
          />
        </MapView>
      </View>
    </View>
  );
}


