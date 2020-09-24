import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from 'app/restaurants/restaurants-routing.module';

import { RestaurantsComponent } from 'app/restaurants/restaurants.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantItemComponent } from './restaurant-item/restaurant-item.component';

@NgModule({
  imports: [CommonModule, RestaurantsRoutingModule],
  declarations: [RestaurantsComponent, RestaurantListComponent, RestaurantItemComponent],
})
export class RestaurantsModule {}
