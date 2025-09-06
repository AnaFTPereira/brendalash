import { TouchableOpacity, Text } from "react-native";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-primary px-5 py-2 rounded-md border-none"
      onPress={props.onPress}
    >
      <Text className="text-white text-center">{props.children}</Text>
    </TouchableOpacity>
  );
}


