import {Navigation} from 'react-native-navigation';
import Home from '@screen/home';
import Splash from '@screen/splash';
import List from '@screen/list';
import Settings from '@screen/settings';
import Bookmark from '@screen/bookmark';
import Posts from '@screen/posts';
import Reader from '@screen/reader';
import Detail from '@screen/detail';
import Histroy from '@screen/history';
import Faq from '@screen/faq';
import Account from '@screen/account';
import PrivacyPolicy from '@screen/privacy';
import Buy from '@screen/buy';
import Advance from '@screen/advance';
import Search from '@screen/search';
import HomeStaticaly from '@staticaly/Home';
import PostsStaticaly from '@staticaly/Posts';

Navigation.registerComponent('net.loveheaven.splash', () => Splash);

//use Staticaly
Navigation.registerComponent(
  'net.loveheaven.homestaticaly',
  () => HomeStaticaly,
);
Navigation.registerComponent(
  'net.loveheaven.postsstaticaly',
  () => PostsStaticaly,
);

Navigation.registerComponent('net.loveheaven.home', () => Home);
Navigation.registerComponent('net.loveheaven.list', () => List);
Navigation.registerComponent('net.loveheaven.advance', () => Advance);
Navigation.registerComponent('net.loveheaven.search', () => Search);
Navigation.registerComponent('net.loveheaven.bookmark', () => Bookmark);

Navigation.registerComponent('net.loveheaven.settings', () => Settings);
Navigation.registerComponent('net.loveheaven.history', () => Histroy);
Navigation.registerComponent('net.loveheaven.faq', () => Faq);
Navigation.registerComponent('net.loveheaven.account', () => Account);
Navigation.registerComponent('net.loveheaven.privacy', () => PrivacyPolicy);
Navigation.registerComponent('net.loveheaven.buy', () => Buy);

Navigation.registerComponent('net.loveheaven.posts', () => Posts);
Navigation.registerComponent('net.loveheaven.detail', () => Detail);
Navigation.registerComponent('net.loveheaven.reader', () => Reader);
