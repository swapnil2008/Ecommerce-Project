import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './My-Components/home-page/home-page.component';
import { LoginComponent } from './My-Components/login/login.component';
import { CartComponent } from './My-Components/cart/cart.component';
import { ServicesComponent } from './My-Components/services/services.component';
import { ContactUsComponent } from './My-Components/contact-us/contact-us.component';

const routes: Routes = [
  {path:'home-page',
  component:HomePageComponent
  },
  {path:'login',
  component:LoginComponent
  },
  {path:'cart',
  component:CartComponent
  },
  {path:'services',
  component:ServicesComponent
  },
  {path:'contact-us',
  component:ContactUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
