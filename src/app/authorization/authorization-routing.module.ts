import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizationPage } from './authorization.page';

const routes: Routes = [
	{
		path: '',
		component: AuthorizationPage,
		children: [
			{
				path: 'sign-in',
				loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInPageModule)
			},
			{
				path: 'sign-up',
				loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
			 }
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthorizationPageRoutingModule { }
