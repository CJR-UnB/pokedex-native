import React from "react";
import { Modal, View, ModalProps, TouchableWithoutFeedback, StyleSheet } from "react-native";

type ModalViewProps = {
  children: React.ReactNode;
  closeModal: () => void;
} & ModalProps;

export default function ModalView({ children, closeModal, ...props }: ModalViewProps) {
  return (
    <Modal
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={closeModal}
      {...props}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>{children}</View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "flex-end",
  },
});
