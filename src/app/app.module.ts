import { RouterModule } from '@angular/router';
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
import { NavMenuModule } from './nav-menu/nav-menu.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { GeoUploadComponent } from './geo-upload/geo-upload.component';
import { GeoSwampListComponent } from './geo-swamp-list/geo-swamp-list.component';

@NgModule({
   declarations: [
      AppComponent,
      GeoInputComponent,
      GeoMapComponent,
      GeoUploadComponent,
      GeoSwampListComponent
   ],
   imports: [
	 BrowserModule,
	 NavMenuModule,
	 HttpClientModule,
	 AppRoutingModule,
	 LeafletModule,
	 NgxUiLoaderModule,
	 NgxFileDropModule,
	 MaterialModule,
	 NgbModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
