import { Component } from '@angular/core';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css',
})
export class ScoreComponent {
  data = [
    {
      category: 'Reaction',
      score: 80,
      icon: 'images/icon-reaction.svg',
      backgroundColor: 'hsla(0, 100%, 67%, 0.5)',
    },
    {
      category: 'Memory',
      score: 92,
      icon: 'images/icon-memory.svg',
      backgroundColor: 'hsla(39, 100%, 56%, 0.5)',
    },
    {
      category: 'Verbal',
      score: 61,
      icon: 'images/icon-verbal.svg',
      backgroundColor: 'hsla(166, 100%, 37%, 0.5)',
    },
    {
      category: 'Visual',
      score: 72,
      icon: 'images/icon-visual.svg',
      backgroundColor: 'hsla(234, 85%, 45%, 0.5)',
    },
  ];
}
