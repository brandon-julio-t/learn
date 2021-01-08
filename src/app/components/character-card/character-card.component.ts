import { Character } from './../../models/character';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Character | null = null;
  @Input() idx: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
