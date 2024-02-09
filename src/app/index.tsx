import { Header } from "@/components/header";
import { Text, View } from "react-native";

export default function Home(){
  return (
    <View className="pt-8 flex-1">
      <Header title="Faça seu pedido" cartQuantityItems={7} />
    </View>
  )
}