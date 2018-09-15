import { Component } from "@angular/core";
import { ValuesService } from "../_services/values.service";

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent {
 
    constructor(private valuesService: ValuesService) {}
   
    values: any =  {};
   
    onButtonClick() {
      this.valuesService.getValues()
        .subscribe(
          data=> { this.values = data }
        );
    }
  }