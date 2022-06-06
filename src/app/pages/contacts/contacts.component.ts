import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  options: any;
  overlays: any[] = [];
  constructor() { }

  map: any;
  tiles: any;

  ngOnInit(): void {
    /*this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
    };*/

  this.map = L.map('map').setView([51.505, -0.09], 13);

  this.tiles  = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(this.map);
	 


  }

}
