import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MatchingComponent } from './matching/matching.component';

const route : Routes=[
    {
        path : '',
        component:HomeComponent
    },
    {
        path : 'importFile',
        component : MatchingComponent
    },

]
export default route;