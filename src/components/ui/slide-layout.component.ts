import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-layout',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-6 lg:py-4 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl opacity-50"></div>
      
      <div class="relative z-10">
        <div class="mb-4">
          @if (subtitle()) {
            <h2 class="text-[9px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-1">{{ subtitle() }}</h2>
          }
          <h1 
            class="font-bold text-[#1F2937] leading-tight tracking-tight"
            [ngClass]="titleClass() || 'text-2xl md:text-3xl'"
          >
            {{ title() }}
          </h1>
          @if (showLine()) {
            <div class="w-12 h-1 bg-blue-600 mt-2 rounded-full"></div>
          }
        </div>

        <div class="content-area">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `]
})
export class SlideLayoutComponent {
  title = input<string>('Slide Title');
  subtitle = input<string>('');
  showLine = input<boolean>(true);
  titleClass = input<string>('');
}
