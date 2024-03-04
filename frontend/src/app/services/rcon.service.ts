import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RconService {
  private ws: WebSocket;

  constructor() {
   
    this.ws = new WebSocket('ws://10.0.0.150:25575/20165468');


    this.ws.onmessage = () => {
      this.ws.send('list');
    };

    this.ws.onmessage = (event) => {
      console.log(event.data);
    };
  }





}
