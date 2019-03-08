import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[menuDropdown]'
})
export class MenuDropDown{
    @HostBinding('class.open') isOpen = true;

    @HostListener('click') clickEvent(){
        this.isOpen = !this.isOpen;
    }

}