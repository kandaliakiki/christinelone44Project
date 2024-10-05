import HealthControlCalories from "@/components/A4_2/HealthControlCalories";
import HealthControlCard from "@/components/A4_2/HealthControlCard";
import HealthControlDosage from "@/components/A4_2/HealthControlDosage";
import React from "react";

const page = () => {
  return (
    <div className="text-white font-montserrat">
      <h1 className="text-5xl my-14">
        Health<br></br> Control
      </h1>
      <HealthControlCard
        bgColorClass="bg-red-500"
        cardImage="/assets/inject.svg"
        title="Dosage"
        subtitle="Insulin"
      >
        <HealthControlDosage />
      </HealthControlCard>
      <div className="mt-3"></div>
      <HealthControlCard
        bgColorClass="bg-violet-400"
        cardImage="\assets\fire.svg"
        title="Calories"
        subtitle="Kcal"
      >
        <HealthControlCalories />
      </HealthControlCard>
      <div className="mt-3"></div>
      <HealthControlCard
        bgColorClass="bg-white"
        cardImage="\assets\fire.svg"
        title="Calories"
        subtitle="Kcal"
      >
        <HealthControlCalories />
      </HealthControlCard>
    </div>
  );
};

export default page;
