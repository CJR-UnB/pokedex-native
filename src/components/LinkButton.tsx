import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { Colors, Sizing } from '../styles';

type LinkButtonProps = {
  text: string;
} & BorderlessButtonProps;

export default function LinkButton({text, ...props}: LinkButtonProps) {
  return (
    <BorderlessButton style={styles.container} {...props}>
      <Text style={styles.linkButtonText}>{text}</Text>
    </BorderlessButton>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    padding: Sizing.x10,
  },
  linkButtonText: {
    fontFamily: "Barlow_600SemiBold",
    color: Colors.primary,
    fontSize: 18,
    textDecorationLine: "underline",
  }
});