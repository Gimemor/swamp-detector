import { GeojsonService } from './../services/geojson.service';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.scss']
})
export class GeoMapComponent implements AfterViewInit {
  @Input() public geoJson: BehaviorSubject<string>;

  private map;
  private states;
  private layers: L.Layer[] = [];
  constructor(
    private geojsonService: GeojsonService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.geoJson.subscribe(states => {
      this.states = states;
      this.initStatesLayer();
    });
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [51.86227981054269, 41.24489088647922],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    });
    tiles.addTo(this.map);
  }


  private initStatesLayer() {
    this.layers.forEach(x => this.map.removeLayer(x));
    this.layers = [];
    const stateLayer = L.geoJSON(this.states, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B'
      })
    });
    this.layers.push(stateLayer);
    this.map.addLayer(stateLayer);
  }
}
