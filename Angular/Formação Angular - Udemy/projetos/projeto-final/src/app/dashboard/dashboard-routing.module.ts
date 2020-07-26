import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingComponent } from './dashboard-routing.component';

export const DashboardRoutes: Routes = [
    {
        path: 'dashboard',//indicamos o path
        component: DashboardRoutingComponent,//aqui indicamos o componente para quando for chamar considerar o que está no router-outlet
        children: [//indicar que tudo dentro desse componente é filho do padrão
            {
                path: '',
                component: DashboardComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(DashboardRoutes)//todos os módulos serão filhos do módulo route
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule{
}