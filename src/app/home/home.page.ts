import { Component } from '@angular/core';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  responde = false;
  lat = 0;
  lon = 0;

  constructor(private geolocation: Geolocation, public platform: Platform) {
    this.platform.ready().then((readySource) => {
      console.log('Platform ready: ', readySource);
      const options:GeolocationOptions = {
        maximumAge: 0,
        enableHighAccuracy: true
      };
      console.log(
        '%cLlamando a getGPS, ' + this.mostrarhora(),
        'background:#5924c1;color:white;font-size:15px'
      );
      this.getGPS(options);
      });
  }


  getGPS(options){
    this.geolocation.getCurrentPosition(options).then((resp) => {
      console.log(
        '%cResponde GPS, ' + this.mostrarhora(),
        'background:#5924c1;color:white;font-size:15px'
      );
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
      console.log(resp);
      this.responde = true;
     }).catch((error) => {
      console.log(
        '%cError GPS, ' + this.mostrarhora(),
        'background:#5924c1;color:red;font-size:15px'
      );
       console.log('Error getting location', error);
     });
  }

  private mostrarhora(): string {
    const f = new Date();
    const cad = f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds();
    window.status = cad;
    return cad;
  }
  
}
