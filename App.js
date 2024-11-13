import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ImageBackground } from "react-native";

export default function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    require("./assets/yg9jVeK-birthday-card-backgrounds.jpg")
  );
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [textStyle, setTextStyle] = useState(styles.textStyle1); // Default text style

  const changeText = (inputText) => {
    const formattedText = "\u{1F632}" + inputText;
    setText(formattedText);
  };

  const endEditing = () => {
    const formattedText = text + "\u{2708}";
    setText(formattedText);
  };

  const templates = [
    require("./assets/5woHady-birthday-card-backgrounds.jpg"),
    require("./assets/wp2714637-happy-birthday-background-hd.jpg"),
    require("./assets/wp2714640-happy-birthday-background-hd.jpg"),
    require("./assets/wp2976232-hd-birthday-background.jpg"),
    require("./assets/yefNMuo-birthday-card-backgrounds.jpg"),
    require("./assets/yg9jVeK-birthday-card-backgrounds.jpg"),
  ];

  const changeTextColor = (color) => {
    setTextColor(color);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>🎉 Happy Birthday! 🎉</Text>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <Text style={[textStyle, { color: textColor }]}>{text}</Text>
      </ImageBackground>

      <TextInput
        style={styles.textinput}
        placeholder="Enter your text here"
        onChangeText={changeText}
        onEndEditing={endEditing}
      />

      <View style={styles.templateContainer}>
        {templates.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setBackgroundImage(image)}
          >
            <Image source={image} style={styles.templateImage} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.colorOptions}>
        <TouchableOpacity
          onPress={() => changeTextColor("#FFFFFF")}
          style={[styles.colorBox, { backgroundColor: "#FFFFFF" }]}
        />
        <TouchableOpacity
          onPress={() => changeTextColor("#FF6347")}
          style={[styles.colorBox, { backgroundColor: "#FF6347" }]}
        />
        <TouchableOpacity
          onPress={() => changeTextColor("#4682B4")}
          style={[styles.colorBox, { backgroundColor: "#4682B4" }]}
        />
        <TouchableOpacity
          onPress={() => changeTextColor("#32CD32")}
          style={[styles.colorBox, { backgroundColor: "#32CD32" }]}
        />
      </View>

      <View style={styles.textStyleOptions}>
        <TouchableOpacity onPress={() => setTextStyle(styles.textStyle1)}>
          <Text style={styles.buttonText}>Style 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTextStyle(styles.textStyle2)}>
          <Text style={styles.buttonText}>Style 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTextStyle(styles.textStyle3)}>
          <Text style={styles.buttonText}>Style 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTextStyle(styles.textStyle4)}>
          <Text style={styles.buttonText}>Style 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffefd5",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ff69b4",
    textAlign: "center",
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  templateContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  templateImage: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  textinput: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F5FCFF',
  },
  textView: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  colorOptions: {
    flexDirection: "row",
    marginTop: 10,
  },
  colorBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  textStyleOptions: {
    flexDirection: "row",
    marginTop: 15,
  },
  buttonText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#000",
  },
  textStyle1: { fontSize: 20, fontWeight: "bold", textAlign: "center" },
  textStyle2: { fontSize: 22, fontStyle: "italic", textAlign: "center" },
  textStyle3: { fontSize: 24, textDecorationLine: "underline", textAlign: "center" },
  textStyle4: { fontSize: 26, fontWeight: "bold", fontStyle: "italic", textAlign: "center" },
});
