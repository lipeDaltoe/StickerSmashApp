import { useState } from "react";
import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import { type ImageSource } from "expo-image";
import EmojiList from "@/components/EmojiList";

const PlaceholderImage = require('@/assets/images/background-image.png')

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);

  const onReset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  const onSaveImageAsync = () => {

  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("Você não escolheu uma imagem!!!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Resetar" onPress={onReset} />
            <CircleButton onPress={onAddSticker}/>
            <IconButton icon="save-alt" label="Salvar" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style = {styles.footerContainer}>
          <Button
            label="Escolher uma Foto"
            theme="primary"
            onPress={pickImageAsync}
          />
          <Button label="Usar esta Foto" onPress={() => setShowAppOptions(true)}/>
        </View>
  )} 
    <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
      <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
    </EmojiPicker>
  </View >
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  }
})