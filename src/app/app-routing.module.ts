import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {View1Component} from "./view1/view1.component";
import {View2Component} from "./view2/view2.component";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatToolbar, MatToolbarModule, MatToolbarRow} from "@angular/material/toolbar";


const routes: Routes = [

  { path: '', component: View1Component },
  { path: 'view1-component', component: View1Component },
  { path: 'view2-component', component: View2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MatSliderModule, FormsModule, MatCardModule, MatToolbarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
