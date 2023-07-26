import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderListPipe } from './pipe/order-list.pipe';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, OrderListPipe],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, HeaderComponent, OrderListPipe],
})
export class SharedModule {}
