import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import mapboxgl from 'mapbox-gl';

import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import { CounterAloneComponent } from "../alone/components/counter-alone/counter-alone.component";
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';

(mapboxgl as any).accessToken = 'pk.eyJ1Ijoiam9zZS1sYWdvcyIsImEiOiJjbTJ1bzNiNHUwM2Y3MmlvZnU4NnMwZzgxIn0.f2GOj7gaTx4PTXBr9TKJqA';


@NgModule({
  declarations: [
    FullScreenPageComponent,
    MapsLayoutComponent,
    MarkersPageComponent,
    MiniMapComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [
    CommonModule,
    CounterAloneComponent,
    MapsRoutingModule,
    SideMenuComponent,
  ]
})
export class MapsModule { }
