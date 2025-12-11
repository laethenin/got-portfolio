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

  protected filteredCharacters: Characters[] = [];

  ngOnInit(){
    this.getCharactersInTemplate();
    this.getContinentsInTemplate();
  

    // protected onSearch(term: string): void {
    //   this.filteredCharacters = this.charactersToGiveToChild.filter((character: Characters) => {
    //     const fullName = character.fullName ?? '';
    //     console.log(fullName.toLowerCase().includes(term.toLowerCase()));
    //     return fullName.toLowerCase().includes(term.toLowerCase());      
    //   })
    // }

     if (this.charactersToGiveToChild) {
        this.filteredCharacters = [...this.charactersToGiveToChild];
     }
    }

protected onSearch(term: string): void {
  if (!term) {
    this.filteredCharacters = [...this.charactersToGiveToChild];
  } else {
    this.filteredCharacters = this.charactersToGiveToChild.filter((character: Characters) => {
      const fullName = character.fullName ?? '';
      return fullName.toLowerCase().includes(term.toLowerCase());      
    });
  }
}

    private getCharactersInTemplate() {
      this.charactersService.getCharacters().subscribe((charactersFromApi: Characters[]) => {  
        this.charactersToGiveToChild = charactersFromApi;
        this.filteredCharacters = charactersFromApi;
        this.cdr.detectChanges();
      })
    }

    private getContinentsInTemplate() {
      this.continentsService.getAllContinents().subscribe((continentsFromApi: Continents[]) => {  
        this.continentsToGiveToChild = continentsFromApi;
        this.cdr.detectChanges();
      })
    }
  }
  
