import { TouchableOpacity, Text } from "react-native";
import React from "react";

type CustomButtonProps = {
  title?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  containerStyles?: string;
  textStyles?: string;
  children: React.ReactNode;
  handlePress?: () => void;
};

const CustomButton = ({
  children,
  title,
  handlePress,
  isLoading,
  isDisabled,
  containerStyles,
  textStyles,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      className={
        `min-h-[62px] flex justify-center items-center bg-secondary-100 rounded-xl p-2 ${
          isLoading ? " opacity-50 " : ""
        }` +
        " " +
        containerStyles
      }
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
