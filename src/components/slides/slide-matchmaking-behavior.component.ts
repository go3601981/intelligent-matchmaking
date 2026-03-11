import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-matchmaking-behavior',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="What Intelligent Matchmaking Would Do" subtitle="Turning Data into Meaningful Connections">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div class="space-y-4">
          <div class="space-y-2">
            <h3 class="text-[9px] font-bold text-blue-600 uppercase tracking-widest">System Behavior</h3>
            <p class="text-xl font-light text-gray-900 leading-tight">
              The system intelligently <span class="font-bold">highlights</span> participants based on shared context and goals.
            </p>
          </div>

          <div class="space-y-2">
            @for (behavior of behaviors; track behavior.text) {
              <div class="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors group">
                <div class="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <mat-icon class="text-base h-4 w-4">{{ behavior.icon }}</mat-icon>
                </div>
                <p class="text-gray-700 font-medium text-[13px]">{{ behavior.text }}</p>
              </div>
            }
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Example Suggestions</h3>
          
          <div class="grid grid-cols-1 gap-3">
            @for (suggestion of suggestions; track suggestion.title) {
              <div class="relative p-4 bg-gradient-to-br rounded-[20px] shadow-md overflow-hidden group hover:scale-[1.01] transition-transform cursor-default"
                   [ngClass]="suggestion.gradient">
                <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-white/20 transition-colors"></div>
                
                <div class="relative z-10 space-y-2">
                  <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white">
                    <mat-icon class="text-base h-4 w-4">{{ suggestion.icon }}</mat-icon>
                  </div>
                  <div class="space-y-0">
                    <h4 class="text-base font-bold text-white">{{ suggestion.title }}</h4>
                    <p class="text-white/80 text-[10px] leading-tight">{{ suggestion.description }}</p>
                  </div>
                </div>
              </div>
            }
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
export class SlideMatchmakingBehaviorComponent {
  readonly behaviors = [
    { text: 'Share industry interests', icon: 'interests' },
    { text: 'Attend the same sessions', icon: 'event_seat' },
    { text: 'Complementary roles (Buyer / Vendor)', icon: 'handshake' },
    { text: 'Interact with similar exhibitors', icon: 'storefront' },
    { text: 'The "Disney Model": Time-First Facilitation', icon: 'schedule' }
  ];

  readonly suggestions = [
    { 
      title: 'The "Disney Model" Scheduling', 
      icon: 'auto_awesome', 
      description: 'Pick a time slot, and the app proposes the best people available to meet.',
      gradient: 'from-blue-600 to-indigo-700'
    },
    { 
      title: 'People attending the same sessions', 
      icon: 'groups', 
      description: 'Connect with peers interested in the same topics.',
      gradient: 'from-emerald-500 to-teal-600'
    },
    { 
      title: 'Potential business connections', 
      icon: 'business_center', 
      description: 'Strategic matches based on role complementarity.',
      gradient: 'from-purple-600 to-pink-700'
    }
  ];
}
