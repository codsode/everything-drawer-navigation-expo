# Expo Drawer Navigation - Complete Guide

A comprehensive guide to implementing drawer navigation in Expo using Expo Router and React Navigation.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Step-by-Step Implementation](#step-by-step-implementation)
- [Advanced Features](#advanced-features)
- [Customization](#customization)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Examples](#examples)

## Overview

Drawer navigation is a popular navigation pattern in mobile applications that provides a sliding side menu. This guide covers how to implement drawer navigation in Expo using:

- **Expo Router**: File-based routing system
- **React Navigation**: Navigation library
- **React Native Gesture Handler**: For gesture support
- **React Native Reanimated**: For smooth animations

## Prerequisites

Before starting, ensure you have:

- Node.js (v16 or higher)
- Expo CLI installed globally: `npm install -g @expo/cli`
- An Expo project initialized
- Basic knowledge of React Native and Expo

## Installation

### Step 1: Install Required Dependencies

```bash
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

### Step 2: Verify Installation

Check your `package.json` to ensure these packages are installed:

```json
{
  "dependencies": {
    "@react-navigation/drawer": "^6.x.x",
    "react-native-gesture-handler": "^2.x.x",
    "react-native-reanimated": "^3.x.x"
  }
}
```

### Step 3: No Additional Configuration Needed

The Reanimated Babel plugin is automatically configured in `babel-preset-expo` when you install the library.

## Project Structure

For a typical drawer navigation app, organize your files as follows:

```
my-expo-app/
├── app/
│   ├── _layout.js          # Root layout with drawer
│   ├── index.js            # Home screen
│   ├── profile.js          # Profile screen
│   ├── settings.js         # Settings screen
│   ├── about.js            # About screen
│   └── user/
│       └── [id].js         # Dynamic user screen
├── components/
│   └── CustomDrawerContent.js
├── constants/
│   └── Colors.js
├── package.json
└── app.json
```

## Step-by-Step Implementation

### Step 1: Create the Root Layout

Create or update `app/_layout.js`:

```javascript
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer />
    </GestureHandlerRootView>
  );
}
```

**Explanation:**

- `GestureHandlerRootView`: Enables gesture handling for the drawer
- `Drawer`: The main drawer navigator component
- `style={{ flex: 1 }}`: Ensures the drawer takes up the full screen

### Step 2: Create Screen Components

Create `app/index.js` (Home screen):

```javascript
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen</Text>
      <Text style={styles.subtitle}>
        Pull from left or tap menu to open drawer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
```

Create `app/profile.js`:

```javascript
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.subtitle}>User profile information goes here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
```

Create `app/settings.js`:

```javascript
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text style={styles.subtitle}>App settings and preferences</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff5ee",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
```

### Step 3: Configure Drawer Options

Update `app/_layout.js` with drawer configuration:

```javascript
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: "#2196F3",
          drawerInactiveTintColor: "#757575",
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: "#2196F3",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Profile",
            title: "Profile",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
```

**Explanation:**

- `drawerActiveTintColor`: Color for the active drawer item
- `drawerInactiveTintColor`: Color for inactive drawer items
- `drawerIcon`: Function that returns an icon component
- `drawerLabel`: Text shown in the drawer for each screen
- `title`: Text shown in the header

### Step 4: Test Your Implementation

Run your app:

```bash
npx expo start
```

You should now be able to:

- Swipe from the left edge to open the drawer
- Tap the hamburger menu icon to open the drawer
- Navigate between screens using the drawer items

## Advanced Features

### Custom Drawer Content

Create `components/CustomDrawerContent.js`:

```javascript
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function CustomDrawerContent(props) {
  const router = useRouter();

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
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
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
        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          )}
          label="Home"
          onPress={() => router.push("/")}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          )}
          label="Profile"
          onPress={() => router.push("/profile")}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          )}
          label="Settings"
          onPress={() => router.push("/settings")}
        />
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
}

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
```

Update `app/_layout.js` to use custom drawer content:

```javascript
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "../components/CustomDrawerContent";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerActiveTintColor: "#2196F3",
          drawerInactiveTintColor: "#757575",
          headerStyle: {
            backgroundColor: "#2196F3",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* Your drawer screens */}
      </Drawer>
    </GestureHandlerRootView>
  );
}
```

### Dynamic Routes

Create `app/user/[id].js` for dynamic user profiles:

```javascript
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function UserScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.subtitle}>User ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
```

## Customization

### Colors and Themes

Create `constants/Colors.js`:

```javascript
export const Colors = {
  primary: "#2196F3",
  secondary: "#FFC107",
  background: "#f5f5f5",
  surface: "#ffffff",
  text: "#333333",
  textSecondary: "#666666",
  border: "#e0e0e0",
  error: "#f44336",
  success: "#4caf50",
};
```

### Drawer Position and Type

Configure drawer behavior:

```javascript
<Drawer
  screenOptions={{
    drawerPosition: 'left', // 'left' or 'right'
    drawerType: 'slide', // 'slide', 'front', 'back', 'permanent'
    drawerStyle: {
      backgroundColor: '#fff',
      width: 280,
    },
    drawerActiveTintColor: '#2196F3',
    drawerInactiveTintColor: '#757575',
  }}
>
```

### Drawer Options Reference

Common drawer configuration options:

```javascript
{
  drawerPosition: 'left', // Position of the drawer
  drawerType: 'slide', // Animation type
  drawerStyle: { /* Drawer container styles */ },
  drawerActiveTintColor: '#2196F3', // Active item color
  drawerInactiveTintColor: '#757575', // Inactive item color
  drawerActiveBackgroundColor: '#e3f2fd', // Active item background
  drawerInactiveBackgroundColor: 'transparent', // Inactive item background
  drawerLabelStyle: { /* Label text styles */ },
  drawerItemStyle: { /* Item container styles */ },
  drawerContentStyle: { /* Content container styles */ },
  drawerIcon: ({ color, size }) => <Icon />, // Icon component
  drawerLabel: 'Screen Name', // Label text
  title: 'Header Title', // Header title
  headerShown: true, // Show/hide header
  swipeEnabled: true, // Enable/disable swipe gestures
  gestureEnabled: true, // Enable/disable all gestures
}
```

## Best Practices

### 1. Performance Optimization

```javascript
// Use React.memo for drawer items
const DrawerItem = React.memo(({ icon, label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    {icon}
    <Text>{label}</Text>
  </TouchableOpacity>
));

// Lazy load screens
const LazyProfile = React.lazy(() => import("./profile"));
```

### 2. Accessibility

```javascript
<Drawer.Screen
  name="profile"
  options={{
    drawerLabel: "Profile",
    title: "Profile",
    drawerIcon: ({ color, size }) => (
      <Ionicons
        name="person-outline"
        color={color}
        size={size}
        accessibilityLabel="Profile icon"
      />
    ),
  }}
/>
```

### 3. Type Safety (TypeScript)

```typescript
// types/navigation.ts
export type RootDrawerParamList = {
  index: undefined;
  profile: undefined;
  settings: undefined;
  "user/[id]": { id: string };
};

// In your component
import { DrawerScreenProps } from "@react-navigation/drawer";

type Props = DrawerScreenProps<RootDrawerParamList, "profile">;

export default function ProfileScreen({ navigation, route }: Props) {
  // Component implementation
}
```

## Troubleshooting

### Common Issues and Solutions

#### 1. Drawer Not Opening

**Problem**: Drawer doesn't respond to gestures or button taps.
**Solution**: Ensure `GestureHandlerRootView` wraps your drawer and has `style={{ flex: 1 }}`.

#### 2. Icons Not Showing

**Problem**: Icons appear as empty squares or don't render.
**Solution**:

- Check if `@expo/vector-icons` is installed
- Ensure icon names are correct
- Verify the icon library is properly imported

#### 3. Navigation Not Working

**Problem**: Drawer items don't navigate to screens.
**Solution**:

- Verify file names match the route names
- Check if screens are properly exported
- Ensure routes are correctly defined in the drawer

#### 4. Styling Issues

**Problem**: Drawer doesn't look as expected.
**Solution**:

- Check that styles are applied correctly
- Verify theme colors are defined
- Ensure proper style inheritance

#### 5. Performance Issues

**Problem**: Drawer animations are laggy.
**Solution**:

- Enable Hermes engine
- Use `react-native-reanimated` for animations
- Optimize component rendering

### Debug Commands

```bash
# Clear cache
npx expo start --clear

# Check dependencies
npx expo install --check

# Run with debugging
npx expo start --dev-client
```

## Examples

### Basic Drawer Setup

```javascript
// app/_layout.js
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="index" options={{ drawerLabel: "Home" }} />
        <Drawer.Screen name="profile" options={{ drawerLabel: "Profile" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
```

### Drawer with Custom Header

```javascript
// app/_layout.js
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomHeader from "../components/CustomHeader";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          header: (props) => <CustomHeader {...props} />,
        }}
      >
        <Drawer.Screen name="index" options={{ drawerLabel: "Home" }} />
        <Drawer.Screen name="profile" options={{ drawerLabel: "Profile" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
```

### Conditional Drawer Items

```javascript
// app/_layout.js
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { useAuth } from "../hooks/useAuth";

export default function RootLayout() {
  const { isAuthenticated, user } = useAuth();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="index" options={{ drawerLabel: "Home" }} />
        {isAuthenticated && (
          <Drawer.Screen name="profile" options={{ drawerLabel: "Profile" }} />
        )}
        {user?.isAdmin && (
          <Drawer.Screen
            name="admin"
            options={{ drawerLabel: "Admin Panel" }}
          />
        )}
      </Drawer>
    </GestureHandlerRootView>
  );
}
```

## Additional Resources

- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [React Navigation Drawer](https://reactnavigation.org/docs/drawer-navigator/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

## Contributing

If you find any issues or have suggestions for improvements, please feel free to:

1. Open an issue on GitHub
2. Submit a pull request
3. Share your feedback

## License

This guide is provided under the MIT License. Feel free to use and modify as needed.

---

**Happy coding with Expo Drawer Navigation!** 🚀
