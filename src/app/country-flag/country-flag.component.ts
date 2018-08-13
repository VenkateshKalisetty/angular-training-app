import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.css']
})
export class CountryFlagComponent{
  @Input() countryCode:string;
  @Output() countryFlagClick: EventEmitter<string> = new EventEmitter<string>();

  flagClick(){
    this.countryFlagClick.emit(this.countryCode);
  }
}