import { Component } from '@angular/core';
import { ScoreComponent } from '../score/score.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ScoreComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  
}
