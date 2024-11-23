import React from "react";
import { FirstSimilarMeal } from "./FirstSimilarMeal";
import { SecondSimilarMeal } from "./SecondSimilarMeal";


export const SimilarMeal: React.FC = () => {
  return (
    <section className="p-0">
      <FirstSimilarMeal />
      <SecondSimilarMeal />
    </section>
  );
};
