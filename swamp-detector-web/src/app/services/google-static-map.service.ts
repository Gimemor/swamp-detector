import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleStaticMapService {
  private apiKey = 'AIzaSyBbl85weC5C2797Rog_wRHbsoxWtb83MaI';
  private apiUrl = 'http://maps.googleapis.com/maps/api/staticmap?center={longitude},{latitude}&size=5000x5000&key={key}&zoom={zoom}&scale=1&maptype=satellite';
  constructor(private httpClient: HttpClient) { }

  private createRequest(longitude, latitude, zoom, apiKey) {
    return this.apiUrl
      .replace('{key}', apiKey)
      .replace('{longitude}', longitude)
      .replace('{latitude}', latitude)
      .replace('{zoom}', zoom);
  }

  public getImage(longitude: number, latitude: number, zoom: number = 5): Observable<Blob> {
    const url = this.createRequest(longitude, latitude, zoom, this.apiKey);
    return this.httpClient.get(url, { responseType: 'blob' });
  }
}
