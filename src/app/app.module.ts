import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsService } from './services/contacts.service';
import { HomeComponent } from './home/home.component';
import { ImagesManagerComponent } from './images-manager/images-manager.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactDetailsComponent,
    HomeComponent,
    ImagesManagerComponent,
    ImageViewerComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'contact/:id', component: ContactDetailsComponent },
      { path: 'home/', component: HomeComponent },
      { path: '', redirectTo: 'home/', pathMatch: 'full' }
    ])
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
