import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DependencyService } from '../dependency.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // Optimize change detection
})
export class MainComponent {
  constructor(private dependencyService: DependencyService) {}

  ngOnInit() {
    // Initialization logic
    this.dependencyService.initialize();
  }

  handleButtonClick() {
    // Logic to handle button click event
    this.dependencyService.handleButtonClick();
  }
}
