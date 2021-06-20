import { Injectable } from '@angular/core';
import { Person } from './person';
import { people } from './person-list';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor() { }
  //retorna a lista de pessoas cadastradas
  getPeople() : Person[] {
    return people;
  }
  //cadastra pessoas
  savePerson(person : Person) : boolean {
   
    if (person.name == '') {
      alert("O nome da pessoa está em branco!");
      return false;
    } else if (person.age <= 0) {
      alert("A idade da pessoa não é um valor válido");
      return false;
    } else {
      let check : boolean = true;
      for (let i = 0; i < people.length; i++) {
        if(person.name.toLocaleUpperCase() == people[i].name.toLocaleUpperCase()) {
          check = false;
        }
      }
      if (check) {
        if(person.linkPhoto == '') {
          person.linkPhoto = '../assets/avatar.svg';
        }
        people.push(person);
        alert("Cadastro realizado com sucesso!");
        return true;
      } else {
        alert("O nome dígitado já foi cadastrado!");
        return false;
      }
    }
  
  }
  
}
