// import { Tabs } from "expo-router";

// export default function Layout() {
//   return (
//     <Tabs>
//       <Tabs.Screen
//         // Name of the route to hide.
//         name="oneFolder/index"
//         options={{
//           // This tab will no longer show up in the tab bar.
//           href: null,
//         }}
//       />
//     </Tabs>
//   );
// }

import { Slot } from "expo-router";
import { View } from "react-native-web";

export default function HomeLayout() {
  return (
    <View>
      <Slot />;
    </View>
  );
}
