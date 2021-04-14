import React, { useCallback, useEffect, useState } from "react";

import { getRestaurants } from "../api/restaurants";
import { Container } from "../components/Container";
import { RestaurantList } from "../components/RestaurantList";
import {
  RestaurantFilters,
  RestaurantFiltersState,
} from "../components/RestaurantFilters";
import { Restaurant } from "../interfaces/restaurant";
import { RestaurantSearch } from "../components/RestaurantSearch"

export function Restaurants() {
  const [tags, setTags] = useState<string[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function fetchRestaurants() {
      const data = await getRestaurants();
      setRestaurants(data);
      const allTags = data.flatMap((x) => x.tags);
      const sortedUniqueTags = allTags.filter((v, i, a) => a.indexOf(v) === i).sort()
      setTags(sortedUniqueTags);
    }

    fetchRestaurants();
  }, []);

  const handleFiltersChange = useCallback((value: RestaurantFiltersState) => {
    setRestaurants((nextRestaurants) => {
      if (value.tags.length) {
        value.tags.forEach((tag) => {
          nextRestaurants = nextRestaurants.filter((r) => r.tags.includes(tag));
        });
      }

      if (value.isFamilyFriendly) {
        nextRestaurants = nextRestaurants.filter((r) => r.familyFriendly);
      }

      if (value.isVeganFriendly) {
        nextRestaurants = nextRestaurants.filter((r) => r.veganFriendly);
      }

      return nextRestaurants;
    });
  }, []);

  return (
    <Container>
      <div className="sticky">
        <RestaurantSearch restaurants={restaurants} setRestaurants={setRestaurants} />
        <RestaurantFilters tags={tags} onChange={handleFiltersChange} />
      </div>
      <div>
        <RestaurantList restaurants={restaurants} />
      </div>
    </Container>
  );
}
