import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HeroComponent } from './hero/hero.component';
import { ShopComponent } from './shop/shop.component';
import { LocateUsComponent } from './locate-us/locate-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    HeroComponent,
    ShopComponent,
    LocateUsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'locate-us', component: LocateUsComponent },
      { path: 'shop', component: ShopComponent }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCE5Tc1kO3RHG7ANTqbPuf84FKRcQACVBk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
