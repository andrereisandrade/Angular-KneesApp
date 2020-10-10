import { Injectable } from '@angular/core';

@Injectable()
export class PlaceService {

  private categories: Array<string> = [
    'Gastronomia',
    'Musica e Concertos',
    'Festas',
    'Familia',
    'Sportes',
    'Palestras',
    'Eventos Culturais',
    'Workshops'];

  private states: Array<string> = [
    'MINAS GERAIS',
    'SÃO PAULO',
    'RIO DE JANEIRO',
    'BAHIA',
    'PARANNÁ',
    'TOCANTIS',
    'AMAZONAS',
    'ESPIRITO SANTO'];

  private cities: Array<string> = [
    'São Paulo',
    'Campinas',
    'São José dos Campos',
    'São Bernado',
    'Rio de Janeiro',
    'Parati',
    'Itajubá',
    'Pouso Alegre',
    'Cambuí',
    'Borda da Mata',
    'Heliodora',
    'Poços de Caldas',
    'Lavras',
    'Vargina',
    'Santa Rita do Sapucaí',
    'São Gonçalo do Sapucaí'];

  constructor() { }

  getCategories() {
    return this.categories;
  }
  getStates() {
    return this.states;
  }
  getCities() {
    return this.cities;
  }

}
