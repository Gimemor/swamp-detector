import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavMenuComponent } from "./nav-menu.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  declarations: [NavMenuComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavMenuComponent],
})
export class NavMenuModule {}
