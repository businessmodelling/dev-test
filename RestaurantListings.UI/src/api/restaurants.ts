import { Restaurant } from "../interfaces/restaurant";

export async function getRestaurants(): Promise<Restaurant[]> {
  await delay();
  const res = await fetch("/api/restaurants");
  return await res.json();
}

async function delay(timeout = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
