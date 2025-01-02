import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

const TabIcon = ({
  icon,
  focused,
  color,
  size,
  name,
}: {
  icon: ImageSourcePropType;
  focused: boolean;
  color: string;
  size: number;
  name: string;
}) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
        tintColor={`${focused ? color : ""}`}
      />
      <Text
        className={`${
          focused ? `font-psemibold text-[#FFA001]` : `font-pregular text-white`
        } text-xs`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          height: 84,
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const props = {
              icon: icons.home,
              focused: focused,
              color: color,
              size: size,
              name: "home",
            };
            return <TabIcon {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const props = {
              icon: icons.plus,
              focused: focused,
              color: color,
              size: size,
              name: "Create",
            };
            return <TabIcon {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const props = {
              icon: icons.bookmark,
              focused: focused,
              color: color,
              size: size,
              name: "Bookmark",
            };
            return <TabIcon {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const props = {
              icon: icons.profile,
              focused: focused,
              color: color,
              size: size,
              name: "Profile",
            };
            return <TabIcon {...props} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
