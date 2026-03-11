import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';
import { StrategicInsightComponent } from '../ui/strategic-insight.component';

@Component({
  selector: 'app-slide-networking-engine',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent, StrategicInsightComponent],
  template: `
    <app-slide-layout title="The Expo Pass Networking Engine" subtitle="A Unified System for Professional Connection">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start h-full">
        
        <!-- Left Column: Diagram & Key Message -->
        <div class="space-y-4">
          <!-- Layered Architecture Diagram -->
          <div class="relative flex flex-col space-y-1.5">
            @for (layer of layers; track layer.id; let i = $index) {
              <div 
                class="relative group"
                [style.z-index]="10 - i"
              >
                <!-- Layer Card -->
                <div 
                  class="p-2 rounded-lg border transition-all duration-500 transform group-hover:-translate-y-0.5 group-hover:shadow-md"
                  [ngClass]="{
                    'bg-blue-600 border-blue-400 text-white shadow-blue-100': layer.id === 4,
                    'bg-white border-blue-50 text-gray-900 shadow-sm': layer.id !== 4
                  }"
                >
                  <div class="flex items-center gap-2">
                    <div 
                      class="w-7 h-7 rounded flex items-center justify-center shrink-0"
                      [ngClass]="layer.id === 4 ? 'bg-blue-500' : 'bg-blue-50 text-blue-600'"
                    >
                      <mat-icon class="text-base h-4 w-4">{{ layer.icon }}</mat-icon>
                    </div>
                    <div>
                      <div class="text-[6px] font-bold uppercase tracking-widest opacity-60">Layer 0{{ layer.id }}</div>
                      <h4 class="text-sm font-bold leading-tight">{{ layer.title }}</h4>
                    </div>
                  </div>
                </div>

                <!-- Connecting Arrow -->
                @if (i < layers.length - 1) {
                  <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 z-0">
                    <mat-icon class="text-blue-200 animate-bounce-slow text-[8px] h-2.5 w-2.5">south</mat-icon>
                  </div>
                }
              </div>
            }
          </div>

          <!-- Key Message (Moved here) -->
          <app-strategic-insight label="Key Message" icon="psychology" type="dark" class="scale-95 origin-left">
            Expo Pass is evolving into a <span class="text-blue-400 font-bold">Networking Engine</span> that automates discovery, facilitates conversation, and coordinates the meetings that build business relationships.
          </app-strategic-insight>
        </div>

        <!-- Right Column: Content Details -->
        <div class="space-y-4">
          <div class="space-y-1.5">
            <h3 class="text-base font-bold text-gray-900">Beyond a Single Feature</h3>
            <p class="text-gray-600 leading-relaxed text-[11px]">
              Networking inside Expo Pass is a complete ecosystem. It moves attendees seamlessly from the initial moment of discovery to meaningful, high-value business interactions.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-1.5">
            @for (layer of layers; track layer.id) {
              <div class="flex gap-2.5 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300 border border-transparent hover:border-gray-100">
                <mat-icon class="text-blue-600 shrink-0 mt-0.5 text-base h-4 w-4">{{ layer.icon }}</mat-icon>
                <div>
                  <h5 class="font-bold text-gray-900 text-[11px]">{{ layer.title }}</h5>
                  <p class="text-[9px] text-gray-500 leading-tight">{{ layer.description }}</p>
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
    .animate-bounce-slow {
      animation: bounce-slow 3s infinite;
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translate(-50%, 0); }
      50% { transform: translate(-50%, 5px); }
    }
  `]
})
export class SlideNetworkingEngineComponent {
  readonly layers = [
    {
      id: 4,
      title: 'Matchmaking Intelligence',
      icon: 'psychology',
      description: 'The "Brain" that suggests relevant people based on behavior, interests, and event participation.'
    },
    {
      id: 3,
      title: 'Meeting Coordination',
      icon: 'event_available',
      description: 'The "Action" layer where users sync calendars and schedule in-person or virtual meetings.'
    },
    {
      id: 2,
      title: 'Interaction',
      icon: 'forum',
      description: 'The "Connection" layer where relationships begin through chat, profile views, and direct dialogue.'
    },
    {
      id: 1,
      title: 'Participant Discovery',
      icon: 'person_search',
      description: 'The "Foundation" where users browse the new Participant List and explore who is attending the event.'
    }
  ];
}
