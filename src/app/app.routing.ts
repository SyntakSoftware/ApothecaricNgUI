import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
    { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: '' }
];





// { path: 'welcome', component: WelcomeComponent },
//             {
//                 path: 'products',
//                 canActivate: [ AuthGuard ],
//                 data: { preload: true },
//                 loadChildren: 'app/products/product.module#ProductModule'
//             },
//             { path: '', redirectTo: 'welcome', pathMatch: 'full' },

export const routing = RouterModule.forRoot(appRoutes);