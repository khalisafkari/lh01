import React from 'react';
import {StyleSheet, View} from 'react-native';
import styles from './styles';
import Image from 'react-native-fast-image';

interface props {
  url: string;
}

const PostsStaticaly: React.FC<props> = (props) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode={Image.resizeMode.stretch}
        source={{
          uri:
            'https://cdn.statically.io/screenshot/device=mobile/' + props.url,
        }}
        style={[StyleSheet.absoluteFill]}
      />
    </View>
  );
};

export default PostsStaticaly;
