import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit {

  @Input() lngLat?: [number, number];
  @ViewChild('map')
  public divMap?: ElementRef;

  public map?: Map;

  ngAfterViewInit(): void {
    if ( !this.divMap ) throw "Map Div not found";
    if ( !this.lngLat ) throw "LngLat can't be null";
    // Map
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false,
    });
    // Add Marker
    new Marker()
      .setLngLat( this.lngLat )
      .addTo(this.map);

  }

}
