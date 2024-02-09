import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Home(){

  const [category, setCategory] = useState<string>(CATEGORIES[0])

  const handleCategorySelect = (category: string) => setCategory(category)

  return (
    <View className="pt-8 flex-1">
      <Header title="Faça seu pedido" cartQuantityItems={7} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CategoryButton title={item} isSelected={category == item} onPress={() => handleCategorySelect(item)} />}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  )
}