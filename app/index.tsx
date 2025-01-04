import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "@/components/custom-button";
export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="justify-center items-center px-4 flex min-h-[85vh]">
          <Image
            source={images.logo}
            style={{ width: 130, height: 84 }}
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            style={{ maxWidth: 380, width: "100%", height: 300 }}
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-pbold text-center">
              Discover Endless possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute -bottom-2 -right-8"
              style={{ width: 136, height: 15 }}
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation; embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            containerStyles="w-full mt-7"
            handlePress={() => {
              router.push("/(auth)/sign-in");
            }}
          >
            Continue with Email
          </CustomButton>
        </View>
      </ScrollView>
      {/* <StatusBar backgroundColor={"#161622"} /> */}
    </SafeAreaView>
  );
}
