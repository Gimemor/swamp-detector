import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BehaviorSubject, Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'Болота';
  lat = 51.678418;
  lng = 7.809007;
  currentGeoJson = new BehaviorSubject<string>('');
  constructor(private ngxService: NgxUiLoaderService) {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 2000);
  }

  handleFileUpload($event: File) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const jsonResult = JSON.parse(fileReader.result as string);
      this.currentGeoJson.next(jsonResult);
    };
    fileReader.readAsText($event);
  }
}
