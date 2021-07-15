import React from "react";
import { StyleSheet, Pressable, PressableProps, Text } from "react-native";
import { BaseButton, BaseButtonProps } from "react-native-gesture-handler";
import { Colors, Sizing } from "../styles";

type ButtonProps = {
  text: string;
  variant?: "default" | "ghost";
} & PressableProps;

export default function Button({ variant = "default", text, ...props }: ButtonProps) {
  return (
    <Pressable {...props} style={StyleSheet.compose(containerStyles[variant], props.style)}>
      <Text style={textStyles[variant]}>{text}</Text>
    </Pressable>
  );
}

const containerStyles = StyleSheet.create({
  default: {
    borderRadius: Sizing.x10,
    backgroundColor: Colors.primary,
    height: Sizing.x60,
    padding: Sizing.x20,
    alignItems: "center",
    justifyContent: "center",
  },
  ghost: {
    borderRadius: Sizing.x10,
    borderWidth: 2,
    borderColor: Colors.primary,
    height: Sizing.x60,
    padding: Sizing.x20,
    alignItems: "center",
    justifyContent: "center",
  },
});

const textStyles = StyleSheet.create({
  default: {
    fontFamily: "Barlow_600SemiBold",
    color: Colors.white,
    fontSize: 18,
  },
  ghost: {
    fontFamily: "Barlow_600SemiBold",
    color: Colors.primary,
    fontSize: 18,
  },
});
