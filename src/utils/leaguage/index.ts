import * as RNLocalize from 'react-native-localize';

const lang = {
  'en-US': require('./en.json'),
  'ja-JP': require('./jp.json'),
};

const leaguage = {
  translate: (key: string): string => {
    const l =
      RNLocalize.findBestAvailableLanguage(['ja-JP']) !== undefined
        ? 'ja-JP'
        : 'en-US';
    return lang[l][key.toLowerCase()];
  },
};

export default leaguage;
