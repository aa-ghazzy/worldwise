import { useContext } from "react";
import { CitiesContext } from "./citiesContext";

const useCities = function () {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside of CitiesProvider");
  return context;
};

export { useCities };
