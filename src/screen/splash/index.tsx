import React, {useCallback, useEffect, useRef} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import root from '@utils/navigation/root';
import LatLong from 'react-native-latlon';

interface props {
  componentId: string;
}

const Splash: React.FC<props> = () => {
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const onFetchCountry = useCallback(() => {
    const timeout = setTimeout(() => {
      LatLong.getIp().then((results) => {
        if (results !== null) {
          if (results.country.match(/Japan|Indonesia|Vietnam/gi)) {
            root.tabs();
          } else {
            root.staticaly();
          }
        }
      });
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(onFetchCountry);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
    </View>
  );
};

export default Splash;
