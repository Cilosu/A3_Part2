import { Injectable } from '@angular/core';
import {Network} from '@awesome-cordova-plugins/network/ngx';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private network: Network) { }

isConnected(): boolean
{
  return this.network.type !== "none"; // Return true if the connection is not 'none'
}

}
