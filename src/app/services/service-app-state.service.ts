import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAppStateService {

  private mobileMode: boolean;

  constructor() { 
    if (window.innerWidth < 768) {
      this.mobileMode = true;
    } else {
      this.mobileMode = false;
    }
  }

  public getIsMobileResolution(): boolean {
    return this.mobileMode;
  }
}
