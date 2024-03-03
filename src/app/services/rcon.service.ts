import { Injectable } from '@angular/core';
import { RCONClient } from '@minecraft-js/rcon';

@Injectable({
  providedIn: 'root'
})
export class RconService {

  client = new RCONClient('10.0.0.150', '20165468');

  constructor() {
    this.client.connect();
    
  }

  async sendMessage(message:string) {


    if(!this.client.authenticated) return 'not authenticated';

    const response = await this.client.executeCommandAsync(message);

    
    return response
  }





}
