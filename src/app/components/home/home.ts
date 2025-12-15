import { Component, OnInit } from '@angular/core';
import { inject, ChangeDetectorRef } from '@angular/core';
import { CharacterService } from '../../shared/services/character';
import { Characters } from '../../shared/models/characters.model';
import { Continents } from '../../shared/models/continents.model'; 
import { ContinentService } from '../../shared/services/continent';
import { CharactersList } from '../characters-list/characters-list';
import { ContinentsList } from '../continents-list/continents-list';


@Component({
  selector: 'app-home',
  imports: [CharactersList, ContinentsList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home implements OnInit {
  private charactersService = inject(CharacterService);
  protected charactersToGiveToChild!: Characters[];

  private continentsService = inject(ContinentService);
  protected continentsToGiveToChild!: Continents[]

  private cdr = inject(ChangeDetectorRef);

  protected filteredCharacters: Characters[] = [];
  protected searchTerm: string = '';

  // protected isFire = false;
  // protected isIce = true;

  ngOnInit(){
    this.getCharactersInTemplate();
    this.getContinentsInTemplate();
  }

    // protected toogleSelected(){
    //   this.isFire = !this.isFire;
    // }

    protected onSearch(term: string): void {
      console.log('ONSEARCH CALLED | term=', term);
      this.searchTerm = term.trim();
      const search = term.toLowerCase().trim();
  
      this.filteredCharacters = this.charactersToGiveToChild.filter((character: Characters) => {
        const fullName = (character.fullName ?? '').toLowerCase();
        return fullName.includes(search);
      });
  
      console.log("RESULT COUNT=", this.filteredCharacters.length);
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
