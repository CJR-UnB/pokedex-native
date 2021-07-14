import React from 'react';
import { StyleSheet } from 'react-native';
import { BaseButton, BaseButtonProps } from 'react-native-gesture-handler';
import { Colors, Sizing } from '../styles';

type ButtonProps = {
  children: React.ReactNode;
} & BaseButtonProps;

export default function Button({children, ...props}: ButtonProps) {
  return (
    <BaseButton style={styles.container} {...props}>
      {children}
    </BaseButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: Sizing.x10,
    backgroundColor: Colors.primary,
    height: Sizing.x60,
    padding: Sizing.x20,
    alignItems: "center",
    marginVertical: Sizing.x40,
  }
});