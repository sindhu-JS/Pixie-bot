import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreLayoutComponent } from './core-layout/core-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ServiceComponent } from './pages/service/service.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [{
  path: 'main',
  component: CoreLayoutComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'service',
      component: ServiceComponent,
    },
    {
      path: 'work',
      component: WorkComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'contacts',
      component: ContactsComponent,
    },
  ], 
},
{
  path: '404',
  component: PageNotFoundComponent,
},
{ path: '', pathMatch: 'full', redirectTo: '/main/home' },
{ path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
