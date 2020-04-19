import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  exports: [
    HttpClientModule,
    HeaderComponent,
  ],
  declarations: [HeaderComponent, FooterComponent]
})

export class SharedModule {
}
