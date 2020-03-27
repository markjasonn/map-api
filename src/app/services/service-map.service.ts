import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';

export class MapData {
  id: number;
}

export class StateInfo {
  id: number;
  stateCode: number;
  state: string;
  country: string;
  countryCode: string;
  zipCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private voteSmartApiKey: string = "44559392ad14ae1823c9d8f7c341143d";
  private  dataURL:  string  =  "https://www.techiediaries.com/api/data.json";
  constructor(private  httpClient:  HttpClient) { }

  getState(endpointUrl:string):  Observable<StateInfo>{
    return <Observable<StateInfo>> this.httpClient.get("https://oo62fj70ll.execute-api.us-west-2.amazonaws.com/dev/locations/3");
  }

  getStateInfo(stateCode:string): Observable<string> {
    return <Observable<string>> this.httpClient
      .get("http://api.votesmart.org/State.getState?key=" + this.voteSmartApiKey + "&stateId=" + stateCode,
        {observe: 'body', responseType: 'text'});
  }
}
