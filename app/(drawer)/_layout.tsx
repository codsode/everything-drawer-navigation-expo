// import { Ionicons } from "@expo/vector-icons";
// import { Drawer } from "expo-router/drawer";
// import React from "react";

// const Layout = () => {
//   return (
//     <Drawer
//       screenOptions={{
//         drawerActiveTintColor: "red",
//         drawerInactiveTintColor: "gray",
//         drawerLabelStyle: {
//           fontSize: 20,
//           marginLeft: 20,
//           fontWeight: "bold",
//         },
//         headerStyle: {
//           // backgroundColor:"red"
//         },
//         headerTitleStyle: {
//           //   fontWeight: "bold",
//           //   fontSize: 25,
//         },
//         headerTitleAlign: "center",
//         headerTintColor: "red",
//         drawerStyle: {
//           backgroundColor: "white",
//           //   width: 80,
//         },
//         // headerRight: () => (
//         //   <View
//         //     style={{
//         //       marginRight: 10,
//         //       width: 60,
//         //       height: 60,
//         //       justifyContent: "center",
//         //       backgroundColor: "red",
//         //     }}
//         //   />
//         // ),
//         drawerAllowFontScaling: false,
//         // drawerIcon: ({ color, size }) => (
//         //   <Ionicons name="add-circle" color={color} size={size} />
//         // ),
//         // headerTransparent: true,
//         swipeEnabled: true,
//         // overlayColor: "red",
//       }}
//     >
//       <Drawer.Screen
//         name="index"
//         options={{
//           title: "Home",
//           drawerLabel: "Home Screen",
//           drawerIcon: ({ color, size }) => {
//             return <Ionicons name="home-outline" color={color} size={size} />;
//           },
//         }}
//       />
//       <Drawer.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           drawerLabel: "Profile Screen",
//           drawerIcon: ({ color, size }) => (
//             <Ionicons name="person-outline" color={color} size={size} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="settings"
//         options={{
//           title: "Settings",
//           drawerLabel: "Settings Screen",
//           drawerIcon: ({ color, size }) => (
//             <Ionicons name="settings-outline" color={color} size={size} />
//           ),
//         }}
//       />
//     </Drawer>
//   );
// };

// export default Layout;

import CustomDrawerContent from "@/components/CustomDrawerContent";
import { Drawer } from "expo-router/drawer";
import React from "react";

const Layout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerPosition: "right",
        drawerType: "slide",
      }}
    />
  );
};

export default Layout;
