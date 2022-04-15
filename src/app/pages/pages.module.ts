import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CoreLayoutModule } from '../core-layout/core-layout.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {GalleriaModule} from 'primeng/galleria';
import {PanelModule} from 'primeng/panel';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    WorkComponent,
    ContactsComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    GalleriaModule,
    InputTextModule,
    PanelModule,
    MenubarModule
  ],
})
export class PagesModule { }
