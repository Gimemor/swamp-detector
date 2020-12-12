import { GoogleStaticMapService } from './../services/google-static-map.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-geo-static-map',
  templateUrl: './geo-static-map.component.html',
  styleUrls: ['./geo-static-map.component.scss']
})
export class GeoStaticMapComponent implements AfterViewInit {
  imageToShow: any;
  isImageLoading: boolean;
  constructor(private staticMap: GoogleStaticMapService) { }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
  ngAfterViewInit(): void {
    this.isImageLoading = true;
    this.staticMap.getImage(51.862279810542688, 41.244890886479219, 15).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }
}
