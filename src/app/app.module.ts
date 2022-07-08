import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreLayoutModule } from './core-layout/core-layout.module';
import { DesignService } from './pages/home/designservice';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreLayoutModule,
    PagesModule,
    LeafletModule
  ],
  providers: [DesignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
