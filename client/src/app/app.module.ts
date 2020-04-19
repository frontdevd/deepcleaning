import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider, Type} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {environment} from '../environments/environment';

import {AuthInterceptor} from './shared/auth.interceptor';
import {OWL_DATE_TIME_LOCALE, OwlDateTimeIntl, OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {PostPageComponent} from './pages/post-page/post-page.component';
import {PostComponent} from './shared/components/post/post.component';
import {AuthService} from './admin/shared/services/auth.service';
import {HomeBackgroundComponent} from './partials/home-background/home-background.component';
import {HomeOurWorkComponent} from './partials/home-our-work/home-our-work.component';
import {HowWorksComponent} from './partials/how-works/how-works.component';
import {YellowInformationComponent} from './partials/yellow-information/yellow-information.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {ServicesPageComponent} from "./pages/services-page/services-page.component";
import {OrderBlockComponent} from './partials/order-block/order-block.component';
import {ServiceComponent} from './partials/service/service.component';
import {OwldatepickerComponent} from './partials/owldatepicker/owldatepicker.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
            declarations: [
              AppComponent,
              MainLayoutComponent,
              HomePageComponent,
              PostPageComponent,
              PostComponent,
              HomeBackgroundComponent,
              HomeOurWorkComponent,
              HowWorksComponent,
              YellowInformationComponent,
              ContactPageComponent,
              ServicesPageComponent,
              OrderBlockComponent,
              ServiceComponent,
              OwldatepickerComponent,
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              SharedModule,
              BrowserAnimationsModule,
              OwlDateTimeModule,
              OwlNativeDateTimeModule,
              FormsModule,
              ReactiveFormsModule
            ],
            providers: [
              AuthService,
              INTERCEPTOR_PROVIDER,
              {provide: OWL_DATE_TIME_LOCALE, useValue: 'ru-RU'},
              {provide: OwlDateTimeIntl, useClass: OwldatepickerComponent},
            ],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
