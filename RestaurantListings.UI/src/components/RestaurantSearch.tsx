import React, { useState } from "react";

export function RestaurantSearch(props: { restaurants: any; setRestaurants: any; }) {
  const { restaurants, setRestaurants } = props;

  const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

    return {
      value,
      setValue,
      reset: () => setValue(""),
      bind: {
        value,
        onChange: (event: { target: { value: React.SetStateAction<string>; }; }) => {
          setValue(event.target.value);
        },
      },
    };
  };

  const { value, bind, reset } = useInput("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const selectedRestaurants = restaurants.filter((r: { name: string; }) => r.name.toLowerCase().includes(value.toLowerCase()))
    setRestaurants(selectedRestaurants);
    reset();
  };

  return (
      <form onSubmit={handleSubmit} className="search padding-top-sm">
            <input className="search__input" required placeholder="Search restaurants..." type="text" {...bind} />
            <input className="search__button" type="submit" value="Submit" />
      </form>
  );
}
