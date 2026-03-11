import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-intelligence-layer',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="Matchmaking as an Intelligence Layer" subtitle="Enhancing Discovery, Not Replacing It">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <div class="p-6 bg-white rounded-[32px] border border-gray-100 shadow-sm space-y-4">
            <h3 class="text-xl font-light text-gray-900 leading-tight">
              Matchmaking should <span class="text-blue-600 font-bold italic">enhance</span> discovery, not replace it.
            </h3>
            <p class="text-gray-500 leading-relaxed text-sm">
              Instead of being a siloed feature, matchmaking acts as a filter and accelerator for the existing networking ecosystem.
            </p>
            
            <div class="pt-4 border-t border-gray-50 space-y-3">
              <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                <mat-icon class="text-blue-600 text-lg h-5 w-5">bolt</mat-icon>
                <p class="text-blue-900 font-medium text-sm">
                  Helping users identify valuable connections <span class="font-bold">faster</span>.
                </p>
              </div>
              
              <div class="grid grid-cols-2 gap-2">
                <div class="p-2 bg-gray-50 rounded-lg border border-gray-100">
                  <p class="text-[9px] font-bold text-blue-600 uppercase tracking-wider mb-1">Vector Search</p>
                  <p class="text-[10px] text-gray-500 leading-tight">Semantic matching of interests and goals.</p>
                </div>
                <div class="p-2 bg-gray-50 rounded-lg border border-gray-100">
                  <p class="text-[9px] font-bold text-blue-600 uppercase tracking-wider mb-1">Behavioral AI</p>
                  <p class="text-[10px] text-gray-500 leading-tight">Learning from chat and profile interactions.</p>
                </div>
              </div>

              <div class="p-3 bg-amber-50 rounded-xl border border-amber-100 mt-2">
                <div class="flex items-center gap-2 mb-1">
                  <mat-icon class="text-amber-600 text-xs h-3 w-3">security</mat-icon>
                  <span class="text-[9px] font-bold text-amber-900 uppercase">Ecosystem Management</span>
                </div>
                <p class="text-[10px] text-amber-800 leading-tight">
                  Balancing the "Wolves" (Sales) and "Sheep" (Attendees) by prioritizing peer-to-peer value and preventing pitch fatigue.
                </p>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-3 text-gray-400">
            <mat-icon class="text-lg h-5 w-5">info</mat-icon>
            <p class="text-[11px]">The intelligence layer sits on top of the foundational interaction tools.</p>
          </div>
        </div>

        <div class="relative py-6">
          <!-- Architecture Stack -->
          <div class="space-y-3 relative z-10">
            @for (layer of layers; track layer.title; let i = $index) {
              <div 
                class="group relative flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500"
                [ngClass]="{
                  'bg-white border-gray-100 shadow-sm': i < 3,
                  'bg-blue-600 border-blue-500 shadow-xl scale-105 z-20': i === 3
                }"
              >
                <div 
                  class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  [ngClass]="i === 3 ? 'bg-white text-blue-600' : 'bg-gray-50 text-gray-400'"
                >
                  <mat-icon class="text-lg h-5 w-5">{{ layer.icon }}</mat-icon>
                </div>
                
                <div class="space-y-0.5">
                  <h4 
                    class="text-base font-bold"
                    [ngClass]="i === 3 ? 'text-white' : 'text-gray-900'"
                  >
                    {{ layer.title }}
                  </h4>
                  <p 
                    class="text-[11px]"
                    [ngClass]="i === 3 ? 'text-blue-100' : 'text-gray-500'"
                  >
                    {{ layer.description }}
                  </p>
                </div>

                @if (i < 3) {
                  <div class="absolute -bottom-4 left-9 w-0.5 h-3 bg-gray-200"></div>
                }
              </div>
            }
          </div>

          <!-- Decorative background elements -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
  `]
})
export class SlideIntelligenceLayerComponent {
  readonly layers = [
    { 
      title: 'Participant Discovery', 
      icon: 'search', 
      description: 'The base layer of finding who is at the event.' 
    },
    { 
      title: 'Profiles and Chat', 
      icon: 'forum', 
      description: 'The interaction layer where connections begin.' 
    },
    { 
      title: 'Meeting Coordination', 
      icon: 'event_available', 
      description: 'The logistical layer for formalizing meetings.' 
    },
    { 
      title: 'Matchmaking Intelligence', 
      icon: 'psychology', 
      description: 'The smart layer that accelerates the entire process.' 
    }
  ];
}
