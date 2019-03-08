import { NgModule } from "@angular/core";
import { MenuDropDown } from "../directives/dropdown.directive";

@NgModule({
    declarations: [
        MenuDropDown
    ],
    exports: [
        MenuDropDown
    ]
})
export class SharedModule {}