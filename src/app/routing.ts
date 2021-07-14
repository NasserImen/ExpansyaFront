import { Routes } from '@angular/router';
import { FinalMatchComponent } from './final-match/final-match.component';
import { HomeComponent } from './home/home.component';
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
    {
        path : 'finalMatch',
        component : FinalMatchComponent
    }

]
export default route;