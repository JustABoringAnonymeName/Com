import { Routes } from '@angular/router';
import { ToValidateComponent } from './to-validate';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { ValidateComponent } from "./validate/validate.component";
import { RemovedComponent } from "./removed/removed.component";

export const ROUTES: Routes = [
  { path: '',      component: ToValidateComponent  },
  { path: 'toValidate',  component: ToValidateComponent  },
  { path: 'validate', component: ValidateComponent },
  { path: 'removed', component: RemovedComponent },
  { path: '**',    component: NoContentComponent },
];
