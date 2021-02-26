import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  responde = false;
  lat = 0;
  lon = 0;

  constructor(private geolocation: Geolocation) { this.getGPS(); }


  getGPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
      console.log(resp);
      this.responde = true;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  
}
