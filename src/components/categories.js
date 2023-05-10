import React from "react";
import { ScrollView, View, Text } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
    </ScrollView>
  );
};

export default Categories;
