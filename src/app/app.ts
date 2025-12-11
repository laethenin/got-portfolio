import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersList } from './components/characters-list/characters-list';
import { CharacterService } from './shared/services/character';
import { Characters } from './shared/models/characters.model';
import { Continents } from './shared/models/continents.model'; 
import { ContinentsList } from './components/continents-list/continents-list';
import { ContinentService } from './shared/services/continent'; 


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharactersList, ContinentsList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private charactersService = inject(CharacterService);
  protected charactersToGiveToChild!: Characters[];
  protected variableToGiveToChild = 'Winter is Coming';

  private continentsService = inject(ContinentService);
  protected continentsToGiveToChild!: Continents[]

  private cdr = inject(ChangeDetectorRef);

  ngOnInit(){
    this.charactersService.getCharacters().subscribe((charactersFromApi: Characters[]) => {  
      this.charactersToGiveToChild = charactersFromApi;
      this.cdr.detectChanges();
      console.log(this.charactersToGiveToChild);
      console.log(charactersFromApi);
      console.log(this.variableToGiveToChild);
  });

  this.continentsService.getAllContinents().subscribe((continentsFromApi: Continents[]) => {  
      this.continentsToGiveToChild = continentsFromApi;
      this.cdr.detectChanges();
      console.log(this.continentsToGiveToChild);
      console.log(continentsFromApi);
  })
}
}

