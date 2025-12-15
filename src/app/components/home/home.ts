import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { inject, ChangeDetectorRef } from '@angular/core';
import { CharacterService } from '../../shared/services/character';
import { Characters } from '../../shared/models/characters.model';
import { Continents } from '../../shared/models/continents.model'; 
import { ContinentService } from '../../shared/services/continent';
import { CharactersList } from '../characters-list/characters-list';
import { ContinentsList } from '../continents-list/continents-list';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  imports: [CharactersList, ContinentsList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchInput') private input!: ElementRef<HTMLInputElement>;
  private charactersService = inject(CharacterService);
  protected charactersToGiveToChild!: Characters[];

  private continentsService = inject(ContinentService);
  protected continentsToGiveToChild!: Continents[]

  private cdr = inject(ChangeDetectorRef);

  protected filteredCharacters: Characters[] = [];
  protected searchTerm: string = '';

  private subscriptions: Subscription [] = [];

  // protected isFire = false;
  // protected isIce = true;

  ngOnInit(){
    this.getCharactersInTemplate();
    this.getContinentsInTemplate();
  }

  ngAfterViewInit() {
    this.input.nativeElement.focus();
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
      this.subscriptions.push(this.charactersService.getCharacters().subscribe((charactersFromApi: Characters[]) => {  
        this.charactersToGiveToChild = charactersFromApi;
        this.filteredCharacters = charactersFromApi;
        this.cdr.detectChanges();
      }))
    }

    private getContinentsInTemplate() {
      this.subscriptions.push(this.continentsService.getAllContinents().subscribe((continentsFromApi: Continents[]) => {  
        this.continentsToGiveToChild = continentsFromApi;
        this.cdr.detectChanges();
      }))
    }

    ngOnDestroy(){
      this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

}
