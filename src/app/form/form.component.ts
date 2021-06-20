import { Component, OnInit, Input} from '@angular/core';
import { Person } from '../person';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  //inicia a variável "person"
  person : Person = {
    name: '',
    age: 0,
    linkPhoto: ''
  }; 
   
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    
  }

  check : boolean; //recebe o valor retornado pelo serviço ao salvar nome;
  // salva a pessoas na lista de pessoas usando o "service"
  savePerson() {
    this.check = this.service.savePerson(this.person);
    //se check = true inicializa a variável novamente
    if (this.check) {
      this.person = {
        name: '',
        age: 0,
        linkPhoto: ''
      }; 
    }
    
  }

  
}
