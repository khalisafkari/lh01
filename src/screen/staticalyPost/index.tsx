import React from 'react';
import {View} from 'react-native';
import Image from 'react-native-fast-image';
import styles, {absolute} from './styles';

interface props {
  url: string;
}

const StaticalyPost: React.FC<props> = (props) => {
  return (
    <View style={styles.container} nativeID={'imageDest'}>
      <Image
        style={absolute}
        resizeMode={Image.resizeMode.stretch}
        source={{
          uri:
            'https://cdn.statically.io/screenshot/device=mobile/' + props.url,
        }}
      />
    </View>
  );
};

export default StaticalyPost;
