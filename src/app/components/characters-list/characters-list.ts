import { Component } from '@angular/core';
import {Characters} from '../../shared/models/characters.model';

@Component({
  selector: 'app-characters-list',
  imports: [],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
  protected newCharacter: Characters = {
    id: 1,
    firstName: 'Martin',
    lastName: 'Ferret',
    fullName: 'Martin Ferret',
    title: 'Roi',
    family: 'Dynastie des Mbappe',
    image: '',
    imageUrl: ''
  } 

  protected charactersFromApi: Characters[] = [
    {
      id: 1,
      firstName: 'Martin',
      lastName: 'Ferret',
      fullName: 'Martin Ferret',
      title: 'Roi',
      family: 'Dynastie des Mbappe',
      image: '',
      imageUrl: ''
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      fullName: 'John Doe',
      title: 'Inconnu',
      family: 'Dynastie des Anonymous',
      image: '',
      imageUrl: ''
    },
    {
      id: 3,
      firstName: 'Arsène',
      lastName: 'Lupin',
      fullName: 'Arsène Lupin',
      title: 'Prince',
      family: 'Clan des voleurs',
      image: '',
      imageUrl: ''
    }
];
}

