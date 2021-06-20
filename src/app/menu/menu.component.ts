import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  personList : Person[]; //armazena a lista de pessoas cadastradas
  selectedPerson : Person; //armazena as informações da pessoas selecionada no menu
  formVisibility : boolean = false; //controla a visibilidade do componente form (true = visível; false = não visível)
  outputVisibility : boolean = false; //controla a visibilidade do componente output (true = visível; false = não visível)
  
  //inicia o processo de registro de pessoa, ocultando o componente "output" e mostrando o componente "form"
  startRegister() : void {
    this.outputVisibility = false;
    this.formVisibility = true;
    this.selectedPerson = {
      name: '',
      age: 0,
      linkPhoto: ''
    }
  }

  //função (método) que seleciona pessoas no menu, oculta o formulário de cadastro e mostras as infromações
  //da pessoa selecionada
  select(person : Person) : void {
    this.selectedPerson = person;
    this.outputVisibility = true;
    this.formVisibility = false;
  } 
  constructor(private service : ServiceService) { }
  
  //carrega a lista de pessoas usando o "service"
  getPeople() : void {
    this.personList = this.service.getPeople();
  }

  ngOnInit(): void {
    this.getPeople(); //iniciando o método com o carregamento do componente.
  }

}
