import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import initializeAppsflyer from "./appsflyerInit";
import {useEffect} from "react";
import {OneSignal} from "react-native-onesignal";
import URLInputScreen from "./src/screens/URLInputScreen";
import {QuizScreen} from "./src/screens/QuizScreen";

import {RootNavigator} from "./src/navigation/RootNavigation";
import {Provider} from "react-redux";
import {store} from "./src/store";


export default function App() {

  // useEffect(() => {
  //   initializeAppsflyer();
  //   OneSignal.initialize("YOUR-ONESIGNAL-APP-ID");
  // }, []);

  return (
    <Provider store={store} >
      <RootNavigator />
    </Provider>

    // <View style={styles.container}>
    //   {/*<URLInputScreen />*/}
    //   {/*<QuizScreen />*/}
    //
    // <WebView source={{ uri: 'https://github.com/react-native-webview/react-native-webview/blob/master/docs/Guide.md#add-support-for-file-download' }} />
  );
}


