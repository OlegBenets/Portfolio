import { Component, inject } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projectsdata = inject(DataService)
}
