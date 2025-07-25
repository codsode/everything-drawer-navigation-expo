import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import type { DrawerContentComponentProps } from "@react-navigation/drawer";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => {
          // Handle logout logic here
          console.log("User logged out");
        },
      },
    ]);
  };
  return (
    <DrawerContentScrollView style={{ flex: 1 }} {...props}>
      {/* Header */}
      <View style={styles.drawerHeader}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={40} color="#fff" />
        </View>
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      {/* Navigation Items */}
      <View style={styles.drawerSection}>
        <DrawerItemList {...props} />
        {/* <DrawerItem
          label={"Home"}
          onPress={() => router.navigate("/")}
          icon={({ color, size }) => {
            return <Ionicons name={"home-outline"} size={size} color={color} />;
          }}
        />
        <DrawerItem
          label={"Profile"}
          onPress={() => router.navigate("/profile")}
          icon={({ color, size }) => {
            return (
              <Ionicons name={"person-outline"} size={size} color={color} />
            );
          }}
        />
        <DrawerItem
          label={"Settings"}
          onPress={() => router.navigate("/settings")}
          icon={({ color, size }) => {
            return (
              <Ionicons name={"settings-outline"} size={size} color={color} />
            );
          }}
        /> */}
      </View>

      {/* Footer */}
      <View style={styles.drawerFooter}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#ff4444" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    padding: 20,
    backgroundColor: "#2196F3",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
  drawerSection: {
    flex: 1,
    paddingTop: 10,
  },
  drawerFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#ff4444",
  },
});

export default CustomDrawerContent;
