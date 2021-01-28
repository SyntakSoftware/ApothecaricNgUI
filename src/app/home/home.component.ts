import { Component } from "@angular/core";
import { take } from "rxjs/operators";
import { ValuesService } from "../_services/values.service";

@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent {
 
    constructor(private valuesService: ValuesService) {}
   
    values: any =  {};
   
    async onButtonClick() {
      this.values = await this.valuesService.getValues(); //.pipe(take(1))
        // .subscribe(
        //   data => { this.values = data }
        // );
    }
  }