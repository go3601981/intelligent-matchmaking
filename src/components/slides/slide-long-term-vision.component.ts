import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-long-term-vision',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="The Long-Term Vision" subtitle="The Future of the Expo Pass Ecosystem">
      <div class="flex flex-col items-center justify-center h-full max-w-5xl mx-auto space-y-8">
        
        <div class="text-center space-y-3">
          <h3 class="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em]">The Ultimate Goal</h3>
          <p class="text-4xl font-light text-gray-900 leading-tight">
            Transforming <span class="font-bold">Events</span> into <span class="font-bold text-blue-600">Engines of Opportunity</span>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 w-full relative">
          <!-- Connecting Line -->
          <div class="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent -translate-y-1/2 z-0"></div>

          @for (step of visionSteps; track step.title; let i = $index) {
            <div class="relative z-10 flex flex-col items-center text-center space-y-4 group">
              <div 
                class="w-16 h-16 rounded-[24px] bg-white border border-gray-100 shadow-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2"
                [style.transition-delay]="(i * 100) + 'ms'"
              >
                <mat-icon class="text-3xl h-8 w-8">{{ step.icon }}</mat-icon>
              </div>
              
              <div class="space-y-1">
                <h4 class="font-bold text-gray-900 text-base">{{ step.title }}</h4>
                <p class="text-[11px] text-gray-500 leading-relaxed px-2">{{ step.description }}</p>
              </div>

              @if (i < visionSteps.length - 1) {
                <div class="md:hidden flex justify-center py-2">
                  <mat-icon class="text-gray-200 text-sm h-4 w-4">south</mat-icon>
                </div>
              }
            </div>
          }
        </div>

        <div class="w-full max-w-2xl p-8 bg-gray-900 rounded-[32px] text-center relative overflow-hidden shadow-2xl">
          <!-- Background Glow -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/10 blur-[100px]"></div>
          
          <div class="relative z-10 space-y-4">
            <p class="text-2xl font-light text-white leading-relaxed">
              "Matchmaking simply <span class="text-blue-400 font-bold">accelerates</span> the natural process of human connection."
            </p>
            <div class="flex items-center justify-center gap-3">
              <div class="h-px w-8 bg-blue-500/30"></div>
              <span class="text-blue-400 font-mono text-[10px] tracking-widest uppercase">The Expo Pass Vision</span>
              <div class="h-px w-8 bg-blue-500/30"></div>
            </div>
          </div>
        </div>

      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 32px; width: 32px; height: 32px; }
  `]
})
export class SlideLongTermVisionComponent {
  readonly visionSteps = [
    {
      title: 'Discovery',
      icon: 'search',
      description: 'People discover each other effortlessly through data.'
    },
    {
      title: 'Conversation',
      icon: 'forum',
      description: 'Dialogue begins naturally within the platform.'
    },
    {
      title: 'Connection',
      icon: 'handshake',
      description: 'Meetings happen easily and with clear purpose.'
    },
    {
      title: 'Growth',
      icon: 'trending_up',
      description: 'Lasting business relationships emerge and thrive.'
    }
  ];
}
