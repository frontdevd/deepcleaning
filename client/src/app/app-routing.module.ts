import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PostPageComponent} from "./pages/post-page/post-page.component";
import {ServicesPageComponent} from "./pages/services-page/services-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {AdminModule} from "./admin/admin.module";

const  routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children :[
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'post/:id', component: PostPageComponent},
      {path: 'services', component: ServicesPageComponent, children: [
          {path: 'post/:id', component: PostPageComponent},
        ]},
      {path: 'contact', component: ContactPageComponent},
    ]
  },
  {path: 'admin', loadChildren: ()=> AdminModule}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
