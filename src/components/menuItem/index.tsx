import React, {useCallback} from 'react';
import {Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import root from 'utils/navigation/root';

interface props {
  id: string;
  componentId: string;
  title: string;
  icon: string;
}

const MenuItem: React.FC<props> = (props) => {
  const onPress = useCallback(() => {
    const timeout = setTimeout(() => {
      root.push(props.componentId, props.id, {
        topBar: {
          title: {
            text: props.title,
          },
        },
        bottomTabs: {
          visible: false,
        },
      });
    }, 100);
    return () => clearTimeout(timeout);
  }, [props.componentId, props.id, props.title]);

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.subContainer}>
        <Icon name={props.icon} size={20} color={'#fff'} />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </Pressable>
  );
};

export default MenuItem;
