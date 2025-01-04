import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import FormField from "@/components/form-field";
const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-4 justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <View>
            <Text className="text-2xl font-psemibold mt-10 text-white">
              Log in
            </Text>
          </View>
          <FormField />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
