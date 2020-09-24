import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Restaurant } from 'app/restaurants/restaurants.models';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  /**
   * Fetches the available restaurants.
   */
  getRestaurants(): Observable<Restaurant[]> {
    throw new Error();
  }
}
