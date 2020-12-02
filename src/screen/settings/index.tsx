import React from 'react';
import {View} from 'react-native';
import MenuItem from '@components/menuItem';
import styles from './styles';
import leaguage from '@utils/leaguage';

interface props {
  componentId: string;
}

const Settings: React.FC<props> = (props) => {
  return (
    <View style={styles.container}>
      <MenuItem
        id={'account'}
        componentId={props.componentId}
        title={leaguage.translate('accounts')}
        icon={'setting'}
      />
      <MenuItem
        icon={'book'}
        componentId={props.componentId}
        title={leaguage.translate('HISTORY')}
        id={'history'}
      />
      <MenuItem
        id={'faq'}
        icon={'infocirlceo'}
        componentId={props.componentId}
        title={leaguage.translate('FAQ')}
      />
      <MenuItem
        id={'privacy'}
        icon={'infocirlceo'}
        componentId={props.componentId}
        title={'PRIVACY POLICY'}
      />
    </View>
  );
};

export default Settings;
