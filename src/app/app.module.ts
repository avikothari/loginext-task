import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { locations } from './data/locations';
import { PincodeSearchComponent } from './pincode-search/pincode-search.component';
import { SearchPipe } from './pipes/search.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    PincodeSearchComponent,
    SearchPipe,
    NavbarComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: 'LOCATIONS',
      useValue: locations,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
