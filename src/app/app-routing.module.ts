import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' }, { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) }, { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  //imports: [CommonModule],
})
export class AppRoutingModule {}
