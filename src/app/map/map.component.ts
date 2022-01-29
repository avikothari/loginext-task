import { AfterViewInit, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [1, 1]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  @Input('map_data') map_data: any

  private map: any

  private initMap(): void {
    this.map = L.map('map', {
      center: [28.7041, 77.1025],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 5,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    this.makeMarkers(this.map)
  }

  makeMarkers(map: any) {
    
    for (const el of this.map_data) {
      const marker = L.marker([el.latitude, el.longitude]).on('click', this.markerClick)
      marker.addTo(map)
    }
  }

  markerClick(e:any){
    console.log(e.latlng)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.map_data.isFirstChange()) {
      if (this.map_data.length === 1) {
        this.map.setView([this.map_data[0].latitude, this.map_data[0].longitude],15,{animate:'true'})
      }else{
        this.map.setView([28.7041, 77.1025],10,{animate:'true'})
      }

    }
  }
}


