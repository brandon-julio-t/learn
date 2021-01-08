import { ApolloService } from './../../services/apollo.service';
import * as genshin from '../../db/genshin.json';
import { Character } from './../../models/character';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  currentCharacter: Character;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apolloService: ApolloService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.apolloService.getCharacterById(+id).subscribe((query) => {
      console.log(query);
      this.currentCharacter = query.data.character;
    });
  }
}
