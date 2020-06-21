import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FilmsComponent } from './films/films.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  {path: '', component: FilmsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'order', component: OrderComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
