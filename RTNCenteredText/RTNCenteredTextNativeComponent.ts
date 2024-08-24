// import type { ViewProps } from "ViewPropTypes";
// import type { HostComponent } from "react-native";
// import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

// export interface NativeProps extends ViewProps {
//   text?: string;
//   // add other props here
// }

// export default codegenNativeComponent<NativeProps>(
//   "RTNCenteredText"
// ) as HostComponent<NativeProps>;

import type { HostComponent,StyleProp, ViewStyle } from "react-native";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

// Define custom props for your native component
export interface NativeProps {
  style?: StyleProp<ViewStyle>; // Include style prop if needed
  text?: string;                // Custom prop for text
  // Add other custom props here
}

// Generate the native component
export default codegenNativeComponent<NativeProps>(
  "RTNCenteredText"
) as HostComponent<NativeProps>;
