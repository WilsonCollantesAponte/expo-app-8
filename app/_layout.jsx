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
import { Link } from "expo-router";

export default function HomeLayout() {
  return (
    <View>
      <View>
        <Link href="/">Main</Link>
        <Link href="/home">Home</Link>
        <Link href="/other">Othert</Link>
      </View>
      <Slot />;
    </View>
  );
}
