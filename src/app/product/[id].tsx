import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";
import { useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/data/functions/format-currency";
import { PRODUCTS } from "@/utils/data/products";
import { Feather } from "@expo/vector-icons";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { Image, Text } from "react-native";
import { View } from "react-native";

export default function Product() {
  const cartStore = useCartStore()
  const navigation = useNavigation()

  const { id } = useLocalSearchParams();

  const product = PRODUCTS.find((item) => item.id === id)
  
  if(!product)
    return <Redirect href="/" />

  function handleAddToCart() {
    if(product) {
      cartStore.add(product)
      navigation.goBack()
    }
  }

  return (
    <View className="flex-1">
      <Image source={product.cover} resizeMode="cover" className="w-full h-52" />

      <View className="p-5 mt-8 flex-1">

        <Text className="text-white font-heading text-3xl">{product.title}</Text>

        <Text className="text-lime-400 text-2xl font-heading my-2">
          { formatCurrency(product.price) }
        </Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          { product.description }
        </Text>

        {
          product.ingredients.map((ingredient) => (
            <Text key={ingredient} className="text-slate-400 font-body text-base leading-6">
              {"\u2022"} { ingredient }
            </Text>
          ))
        }
      </View>

      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          
          <Button.Text>
            Adicionar ao pedido
          </Button.Text>
        </Button>

        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  )
}