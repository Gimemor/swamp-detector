import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { GeoInputComponent } from './geo-input/geo-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { GeoMapComponent } from './geo-map/geo-map.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      GeoInputComponent,
      GeoMapComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      LeafletModule,
      NgxUiLoaderModule,
      MaterialModule,
      NgbModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
