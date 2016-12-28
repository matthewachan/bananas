import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '**', component: HomeComponent },
];

export const appRouterProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);