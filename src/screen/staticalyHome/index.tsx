import React, {useRef, useCallback, useState} from 'react';
import {Animated, Text, TextInput, View, Pressable as P} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import root from '@utils/navigation/root';

const Pressable = Animated.createAnimatedComponent(P);

interface props {
  componentId: string;
}

const StaticalyHome: React.FC<props> = (props) => {
  const [url, setUrl] = useState<string>('');
  const showRef = useRef<Animated.Value>(new Animated.Value(0)).current;

  const setText = (text: string) => {
    setUrl(text);
    if (text.length > 1) {
      Animated.timing(showRef, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(showRef, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  const onPress = useCallback(() => {
    const timeout = setTimeout(() => {
      root.push(
        props.componentId,
        'staticalypost',
        {
          topBar: {
            visible: false,
          },
          statusBar: {
            visible: false,
          },
          animations: {
            push: {
              sharedElementTransitions: [
                {
                  fromId: 'image',
                  toId: 'imageDest',
                },
              ],
            },
          },
        },
        {
          url: url.replace(/^(https?|ftp):\/\//g, ''),
        },
      );
    }, 100);

    return () => clearTimeout(timeout);
  }, [props.componentId, url]);

  const translateX = showRef.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.title}>
          Screenshot allows you to convert a URL into image and PDF.
        </Text>
      </View>
      <View style={styles.box}>
        <TextInput
          value={url}
          style={styles.input}
          placeholderTextColor={'rgba(255,255,255,.5)'}
          placeholder={'URL....'}
          onChangeText={setText}
          multiline
        />
        <Pressable
          style={{
            transform: [{translateX}],
          }}
          onPress={onPress}>
          <Icon name={'rightcircleo'} size={30} color={'#fff'} />
        </Pressable>
      </View>
    </View>
  );
};

export default StaticalyHome;
