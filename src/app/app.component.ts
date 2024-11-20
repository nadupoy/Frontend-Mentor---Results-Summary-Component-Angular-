import { Component } from '@angular/core';
import { ResultComponent } from './result/result.component';
import { SummaryComponent } from './summary/summary.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResultComponent, SummaryComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
