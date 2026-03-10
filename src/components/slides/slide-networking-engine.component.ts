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
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-full">
        
        <!-- Left Column: Diagram & Key Message -->
        <div class="space-y-6">
          <!-- Layered Architecture Diagram -->
          <div class="relative flex flex-col space-y-2">
            @for (layer of layers; track layer.id; let i = $index) {
              <div 
                class="relative group"
                [style.z-index]="10 - i"
              >
                <!-- Layer Card -->
                <div 
                  class="p-3 rounded-xl border-2 transition-all duration-500 transform group-hover:-translate-y-1 group-hover:shadow-lg"
                  [ngClass]="{
                    'bg-blue-600 border-blue-400 text-white shadow-blue-200': layer.id === 4,
                    'bg-white border-blue-100 text-gray-900 shadow-sm': layer.id !== 4
                  }"
                >
                  <div class="flex items-center gap-3">
                    <div 
                      class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      [ngClass]="layer.id === 4 ? 'bg-blue-500' : 'bg-blue-50 text-blue-600'"
                    >
                      <mat-icon class="text-lg h-5 w-5">{{ layer.icon }}</mat-icon>
                    </div>
                    <div>
                      <div class="text-[7px] font-bold uppercase tracking-widest opacity-60">Layer 0{{ layer.id }}</div>
                      <h4 class="text-base font-bold">{{ layer.title }}</h4>
                    </div>
                  </div>
                </div>

                <!-- Connecting Arrow -->
                @if (i < layers.length - 1) {
                  <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 z-0">
                    <mat-icon class="text-blue-200 animate-bounce-slow text-[10px] h-3 w-3">south</mat-icon>
                  </div>
                }
              </div>
            }
          </div>

          <!-- Key Message (Moved here) -->
          <app-strategic-insight label="Key Message" icon="psychology" type="dark">
            Expo Pass is evolving into a <span class="text-blue-400 font-bold">Networking Engine</span> that automates discovery, facilitates conversation, and coordinates the meetings that build business relationships.
          </app-strategic-insight>
        </div>

        <!-- Right Column: Content Details -->
        <div class="space-y-6">
          <div class="space-y-3">
            <h3 class="text-lg font-bold text-gray-900">Beyond a Single Feature</h3>
            <p class="text-gray-600 leading-relaxed text-xs">
              Networking inside Expo Pass is a complete ecosystem. It moves attendees seamlessly from the initial moment of discovery to meaningful, high-value business interactions.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-2">
            @for (layer of layers; track layer.id) {
              <div class="flex gap-3 p-2.5 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100">
                <mat-icon class="text-blue-600 shrink-0 mt-0.5 text-lg h-5 w-5">{{ layer.icon }}</mat-icon>
                <div>
                  <h5 class="font-bold text-gray-900 text-xs">{{ layer.title }}</h5>
                  <p class="text-[10px] text-gray-500 leading-relaxed">{{ layer.description }}</p>
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
