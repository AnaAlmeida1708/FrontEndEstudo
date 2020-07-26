import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
   /* {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }*/
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],//informa que você só terá uma instância única na aplicação
    exports: [ RouterModule ]
})
export class AppRoutingModule {}