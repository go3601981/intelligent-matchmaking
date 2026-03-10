import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div class="fixed top-6 right-6 z-50">
      <img 
        src="https://expopass.com/reports/logoexpo_2023.png" 
        alt="ExpoPass Logo" 
        class="h-8 md:h-10 w-auto object-contain drop-shadow-sm transition-transform hover:scale-105"
      />
    </div>
  `
})
export class LogoComponent {}