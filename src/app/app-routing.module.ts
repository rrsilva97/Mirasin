import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Exemplo básico de rotas (pode expandir)
const routes: Routes = [
  { path: '', component: AppComponent }, // rota raiz
  // futuras rotas aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
