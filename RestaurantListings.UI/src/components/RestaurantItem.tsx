import { Restaurant } from "../interfaces/restaurant";

export interface RestaurantItemProps {
  restaurant: Restaurant;
}

export function RestaurantItem(props: RestaurantItemProps) {
  const { restaurant } = props;
  return (
    <div className="restaurant-container">
      <div>
        <img
          className="restaurant-image"
          src={restaurant.photoUri}
          alt={restaurant.name}
        />
      </div>

      <div>
        <h3>{restaurant.name}</h3>
        <h4>{restaurant.address}</h4>
        <p>{restaurant.description}</p>
        <p><i>Tel.</i> {restaurant.phoneNumber}</p>
      </div>
    </div>
  );
}
