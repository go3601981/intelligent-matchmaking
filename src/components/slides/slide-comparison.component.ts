import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-comparison',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="The Transformation" subtitle="Before and After Intelligent Matchmaking">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
        <!-- Before -->
        <div class="bg-gray-50 rounded-[24px] p-5 border border-gray-100 flex flex-col">
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
              <mat-icon class="text-base h-4 w-4">history</mat-icon>
            </div>
            <div>
              <h3 class="text-base font-bold text-gray-900">The "Before"</h3>
              <p class="text-[8px] text-gray-500 uppercase tracking-widest">Random Discovery</p>
            </div>
          </div>

          <div class="space-y-3 flex-grow">
            @for (item of beforeItems; track item.text) {
              <div class="flex items-start gap-2.5 opacity-60">
                <mat-icon class="text-red-400 shrink-0 text-base h-4 w-4">close</mat-icon>
                <p class="text-[11px] text-gray-600 leading-tight">{{ item.text }}</p>
              </div>
            }
          </div>

          <div class="mt-4 p-3 bg-white rounded-xl border border-gray-100">
            <p class="text-xl font-bold text-gray-300">2-3</p>
            <p class="text-[8px] text-gray-400 uppercase tracking-wider">Meaningful Meetings</p>
          </div>
        </div>

        <!-- After -->
        <div class="bg-blue-600 rounded-[24px] p-5 shadow-xl shadow-blue-100 flex flex-col text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-3xl -mr-12 -mt-12"></div>
          
          <div class="flex items-center gap-2.5 mb-4 relative z-10">
            <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white">
              <mat-icon class="text-base h-4 w-4">auto_awesome</mat-icon>
            </div>
            <div>
              <h3 class="text-base font-bold">The "After"</h3>
              <p class="text-[8px] text-blue-200 uppercase tracking-widest">Guided Discovery</p>
            </div>
          </div>

          <div class="space-y-3 flex-grow relative z-10">
            @for (item of afterItems; track item.text) {
              <div class="flex items-start gap-2.5">
                <mat-icon class="text-emerald-400 shrink-0 text-base h-4 w-4">check_circle</mat-icon>
                <p class="text-[11px] text-blue-50 leading-tight">{{ item.text }}</p>
              </div>
            }
          </div>

          <div class="mt-4 p-3 bg-white/10 rounded-xl border border-white/10 relative z-10">
            <p class="text-xl font-bold">8-10</p>
            <p class="text-[8px] text-blue-200 uppercase tracking-wider">Meaningful Meetings</p>
          </div>
        </div>
      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `]
})
export class SlideComparisonComponent {
  readonly beforeItems = [
    { text: 'Manual searching through long lists' },
    { text: 'Relying on luck in the hallways' },
    { text: 'High friction to start conversations' },
    { text: 'Low relevance in meeting requests' }
  ];

  readonly afterItems = [
    { text: 'Guided discovery via smart suggestions' },
    { text: 'Semantic matching of goals and interests' },
    { text: 'Zero friction via in-chat coordination' },
    { text: 'High-intent, qualified business leads' }
  ];
}
