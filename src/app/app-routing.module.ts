import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [

  {
    path: '',
    component: MainPageComponent,
    children: [  // armazena rotas da aplicação
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsPageModule)
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
