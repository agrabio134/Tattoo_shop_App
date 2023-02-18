import React, { useState } from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#222' }}>
      <View style={styles.profileImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.noImage}>No Profile Picture Selected</Text>
        )}
        <Button title="Select Profile Picture" onPress={pickImage} />
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Harvs Agrabio</Text>
          <Text style={styles.info}>
            <Text style={styles.bold}>Age:</Text> 21
          </Text>
          <Text style={styles.info}>
            <Text style={styles.bold}>Gender:</Text> Male
          </Text>
          <Text style={styles.info}>
            <Text style={styles.bold}>Address:</Text> 123 Main St
          </Text>
          <Text style={styles.info}>
            <Text style={styles.bold}>City:</Text> Anytown
          </Text>
          <Text style={styles.info}>
            <Text style={styles.bold}>State:</Text> CA
          </Text>
          <Text style={styles.info}>
            <Text style={styles.bold}>Zip Code:</Text> 12345
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  noImage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  body: {
    marginTop: 20,
  },
  bodyContent: {
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: 'white',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
