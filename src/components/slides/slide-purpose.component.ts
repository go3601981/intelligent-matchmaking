import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-purpose',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="Why Matchmaking Matters in Events" subtitle="The Networking Dilemma">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div class="space-y-6">
          <div class="space-y-3">
            <h3 class="text-[10px] font-bold text-red-500 uppercase tracking-wider flex items-center gap-2">
              <mat-icon class="text-sm h-4 w-4">warning</mat-icon>
              The Core Problem
            </h3>
            <p class="text-xl text-[#4B5563] leading-relaxed font-light">
              Attendees rarely know who they should meet. Networking in large events is often <span class="text-gray-900 font-medium italic">random and inefficient</span>.
            </p>
          </div>

          <div class="space-y-3">
            <div class="grid grid-cols-1 gap-3">
              @for (item of problems; track item.text) {
                <div class="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div class="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                    <mat-icon class="text-lg h-5 w-5">{{ item.icon }}</mat-icon>
                  </div>
                  <div>
                    <p class="text-gray-700 font-medium leading-tight mb-0.5 text-sm">{{ item.text }}</p>
                    <p class="text-[11px] text-gray-500 leading-relaxed">{{ item.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="p-6 md:p-8 bg-[#1F2937] rounded-[32px] shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div class="relative z-10">
              <h4 class="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">The Solution</h4>
              <p class="text-xl md:text-2xl text-white font-light leading-snug mb-6">
                Matchmaking helps attendees discover <span class="text-blue-400 font-bold">high-value connections</span> faster.
              </p>
              
              <div class="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <p class="text-base text-gray-300 leading-relaxed italic">
                  "Matchmaking reduces networking friction by highlighting relevant people."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
  `]
})
export class SlidePurposeComponent {
  readonly problems = [
    { 
      text: 'Discovery Paralysis', 
      icon: 'search_off',
      description: 'With thousands of participants, finding the right person is like finding a needle in a haystack.' 
    },
    { 
      text: 'Missed Opportunities', 
      icon: 'person_remove',
      description: 'High-value connections often pass each other in the hallway without ever knowing it.' 
    },
    { 
      text: 'Random Networking', 
      icon: 'shuffle',
      description: 'Relying on luck leads to poor ROI for attendees and exhibitors alike.' 
    }
  ];
}
