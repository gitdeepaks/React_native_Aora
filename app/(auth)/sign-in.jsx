import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../contants";
import FormField from "../../components/FormField";

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  return (
    <View className="bg-primary h-full">
      <ScrollView>
        <SafeAreaView className="w-full justify-center min-h-[85vh]px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <FormField title="Email" value={form.email} />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default SignIn;
