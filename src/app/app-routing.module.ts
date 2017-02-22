import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './showcase/components/card/card.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'showcase/comonents/card', component: CardComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // other imports here
    ],
})
export class AppRoutingModule { }
