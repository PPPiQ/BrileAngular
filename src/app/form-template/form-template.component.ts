import { Component, OnInit } from '@angular/core';

interface Options {
  id: number;
  label: string;
}


@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})


export class FormTemplateComponent implements OnInit {
  public options: Options[];

  constructor() {
          this.options = [{id: 0, label: "Brillentyp. Damen. Herren"},
            {id: 1, label: "Rahmentyp: Randiose Brill"},
            {id: 2, label: "Eckiger Rahmen"},
            {id: 3, label: "Ovaler Rahmen"},
            {id: 4, label: "Runder Rahmen"},
            {id: 5, label: "Still: casual, extravagant"},
            {id: 6, label: "Einstarkenbrille"},
            {id: 7, label: "Material: Metaill"},
            {id: 8, label: "some other option 1"},
            {id: 9, label: "some other option 2"},
            {id: 10, label: "some other option 3"},
          ];
          this.selectOption(this.options[0]);
   }

   selectOption(option: Options) {
     this.selectedOption = option;
   }

   ngOnInit() {}

}
