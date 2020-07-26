import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversorComponent } from './components';
import { ConversorRoutingComponent } from './conversor-routing.component';

export const ConversordRoutes: Routes = [
    {
        path: 'conversor',
        component: ConversorRoutingComponent,
        children: [
            {
                path: '',
                component: ConversorComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ConversordRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ConversorRoutingModule{
}