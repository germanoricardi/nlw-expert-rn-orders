import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { Product } from "@/components/product";
import { CATEGORIES, MENU } from "@/utils/data/products";
import { useState } from "react";
import { FlatList, SectionList, Text, View } from "react-native";

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

      <SectionList
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Product data={item} />
        )}
        renderSectionHeader={({ section: { title } }) => <Text className="text-xl text-white font-heading mt-8 mb-3">{ title }</Text>}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </View>
  )
}