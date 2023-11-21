import {WebView} from "react-native-webview";

export const WebDemonstrationScreen = ({route}) => {
  const url = route.params;
  return <WebView source={{ uri: url }} />
}
