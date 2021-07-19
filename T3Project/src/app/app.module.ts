import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { ReviewComponent } from './review/review.component';
import { VideoComponent } from './video/video.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SpaceComponent } from './space/space.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainSectionComponent,
    ReviewComponent,
    VideoComponent,
    TeachersComponent,
    SpaceComponent,
    TechnologiesComponent,
    NewsComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
