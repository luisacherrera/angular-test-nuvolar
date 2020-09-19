import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ListedElementComponent } from './listed-element/listed-element.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    UserCardComponent,
    ListedElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
