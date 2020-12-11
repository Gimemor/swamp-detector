import { AppComponent } from './../app.component';
import { NgModule } from "@angular/core";
import { RouterModule} from "@angular/router";

const routes = [
  {
    path: "",
    component: AppComponent,
    match: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
