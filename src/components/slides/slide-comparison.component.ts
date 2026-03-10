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
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        <!-- Before -->
        <div class="bg-gray-50 rounded-[32px] p-6 border border-gray-100 flex flex-col">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
              <mat-icon>history</mat-icon>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900">The "Before"</h3>
              <p class="text-[10px] text-gray-500 uppercase tracking-widest">Random Discovery</p>
            </div>
          </div>

          <div class="space-y-4 flex-grow">
            @for (item of beforeItems; track item.text) {
              <div class="flex items-start gap-3 opacity-60">
                <mat-icon class="text-red-400 shrink-0 text-lg h-5 w-5">close</mat-icon>
                <p class="text-sm text-gray-600">{{ item.text }}</p>
              </div>
            }
          </div>

          <div class="mt-6 p-4 bg-white rounded-2xl border border-gray-100">
            <p class="text-2xl font-bold text-gray-300">2-3</p>
            <p class="text-[9px] text-gray-400 uppercase tracking-wider">Meaningful Meetings</p>
          </div>
        </div>

        <!-- After -->
        <div class="bg-blue-600 rounded-[32px] p-6 shadow-2xl shadow-blue-200 flex flex-col text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div class="flex items-center gap-3 mb-6 relative z-10">
            <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
              <mat-icon>auto_awesome</mat-icon>
            </div>
            <div>
              <h3 class="text-lg font-bold">The "After"</h3>
              <p class="text-[10px] text-blue-200 uppercase tracking-widest">Guided Discovery</p>
            </div>
          </div>

          <div class="space-y-4 flex-grow relative z-10">
            @for (item of afterItems; track item.text) {
              <div class="flex items-start gap-3">
                <mat-icon class="text-emerald-400 shrink-0 text-lg h-5 w-5">check_circle</mat-icon>
                <p class="text-sm text-blue-50">{{ item.text }}</p>
              </div>
            }
          </div>

          <div class="mt-6 p-4 bg-white/10 rounded-2xl border border-white/10 relative z-10">
            <p class="text-2xl font-bold">8-10</p>
            <p class="text-[9px] text-blue-200 uppercase tracking-wider">Meaningful Meetings</p>
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
