import React, {useCallback, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import styles from './styles';
import Image from 'react-native-fast-image';
import {Picker} from '@react-native-picker/picker';
import root from 'utils/navigation/root';

interface props {
  componentId: string;
}

interface sumbit {
  onSumbit?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | any;
  onChangeText?: ((text: string) => void) | undefined;
  onValueChange?:
    | ((itemValue: React.ReactText, itemIndex: number) => void)
    | any;
  selectedValue?: string | number | undefined;
}

const Input: React.FC<sumbit> = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSumbit}
        style={styles.input}
        placeholder={'text...'}
      />
      <Picker
        selectedValue={props.selectedValue}
        style={{height: 50, width: 100}}
        onValueChange={props.onValueChange}>
        <Picker.Item label="Dark" value="dark" />
        <Picker.Item label="Light" value="light" />
      </Picker>
    </View>
  );
};

const HomeStaticaly: React.FC<props> = (props) => {
  const [inText, setText] = useState<string>('');
  const [state, setState] = useState<string>('dark');

  const onText = useCallback((text: string) => {
    setText(text);
  }, []);

  root.useStaticaly(props.componentId);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {inText.length > 1 ? (
          <Image
            style={[StyleSheet.absoluteFill]}
            source={{
              uri: `https://cdn.statically.io/og/theme=${state}/${inText}.jpg`,
            }}
          />
        ) : null}
      </View>
      <Input
        onValueChange={(value: any) => {
          setState(value);
        }}
        selectedValue={state}
        onChangeText={onText}
      />
    </View>
  );
};

export default HomeStaticaly;
