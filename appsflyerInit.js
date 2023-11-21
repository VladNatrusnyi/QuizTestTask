// appsflyerInit.js
import appsFlyer from 'react-native-appsflyer';

const initializeAppsflyer = () => {
  appsFlyer.initSdk(
    {
      devKey: 'K2***********99',
      isDebug: false,
      appId: '41*****44',
      onInstallConversionDataListener: true,
      onDeepLinkListener: true,
      timeToWaitForATTUserAuthorization: 10
    },
    (result) => {
      console.log(result);
    },
    (error) => {
      console.error(error);
    }
  );
};

export default initializeAppsflyer;
