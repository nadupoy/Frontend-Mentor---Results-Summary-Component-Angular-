import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ScoreComponent } from '../score/score.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ButtonComponent, ScoreComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
//  data = [
//   {
//     "category": "Reaction",
//     "score": 80,
//     "icon": "../assets/images/icon-reaction.svg"
//   },
//   {
//     "category": "Memory",
//     "score": 92,
//     "icon": "../assets/images/icon-memory.svg"
//   },
//   {
//     "category": "Verbal",
//     "score": 61,
//     "icon": "../assets/images/icon-verbal.svg"
//   },
//   {
//     "category": "Visual",
//     "score": 72,
//     "icon": "../assets/images/icon-visual.svg"
//   }
//  ];
}
