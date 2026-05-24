import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";

import styles from "./CountryList.module.css";

function CountryList({ cities, isLoading }) {
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  if (isLoading) return <Spinner />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.city).includes(city.country))
      return [...arr, { country: city.countryName, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
