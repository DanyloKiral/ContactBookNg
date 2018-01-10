import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'contact/:id', component: ContactDetailsComponent },
            { path: 'home/', component: HomeComponent },
            { path: '', redirectTo: 'home/', pathMatch: 'full' }
          ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {  }