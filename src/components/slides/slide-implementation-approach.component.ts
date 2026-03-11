import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-implementation-approach',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="Implementation Approach" subtitle="A Phased Strategy for Gradual Evolution">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
        
        @for (phase of phases; track phase.number) {
          <div class="flex flex-col bg-white rounded-xl p-3.5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 group relative overflow-hidden">
            <!-- Phase Number -->
            <div class="text-3xl font-black text-blue-50/50 absolute -top-1 -right-1 group-hover:text-blue-100/50 transition-colors">
              0{{ phase.number }}
            </div>

            <div class="relative z-10 space-y-2.5 flex-grow">
              <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <mat-icon class="text-base h-4 w-4">{{ phase.icon }}</mat-icon>
              </div>

              <div class="space-y-0.5">
                <h3 class="text-[8px] font-bold text-blue-600 uppercase tracking-widest">Phase {{ phase.number }}</h3>
                <h4 class="text-sm font-bold text-gray-900 leading-tight">{{ phase.title }}</h4>
                <p class="text-[9px] text-gray-500 leading-tight">{{ phase.description }}</p>
              </div>

              <ul class="space-y-1 pt-0.5">
                @for (item of phase.items; track item) {
                  <li class="flex items-center gap-1.5 text-[9px] text-gray-600">
                    <mat-icon class="text-blue-500 text-[10px] h-2.5 w-2.5">check_circle</mat-icon>
                    {{ item }}
                  </li>
                }
              </ul>
            </div>

            <div class="mt-3 pt-2 border-t border-gray-50 relative z-10">
              <span class="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{{ phase.timeline }}</span>
            </div>
            
            <!-- Hover Accent -->
            <div class="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </div>
        }

      </div>

      <div class="mt-3 space-y-2">
        <div class="p-3 bg-blue-50 rounded-xl border border-blue-100 flex items-center gap-3">
          <div class="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0">
            <mat-icon class="text-base h-4 w-4">psychology</mat-icon>
          </div>
          <div>
            <h4 class="text-[10px] font-bold text-blue-900">Implementation Philosophy</h4>
            <p class="text-[9px] text-blue-700 leading-tight">
              By following a phased approach, we allow the intelligence layer to <span class="font-bold">evolve gradually</span>.
            </p>
          </div>
        </div>

        <div class="p-2 bg-amber-50 rounded-lg border border-amber-100 flex items-center gap-3">
          <mat-icon class="text-amber-600 text-base h-4 w-4">info</mat-icon>
          <p class="text-[9px] text-amber-800 italic">
            Note: The <span class="font-bold">Participant List</span> is an upcoming feature of the Meeting Scheduling suite.
          </p>
        </div>
      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
  `]
})
export class SlideImplementationApproachComponent {
  readonly phases = [
    {
      number: 1,
      title: 'Participant List Integration',
      icon: 'person_search',
      description: 'Introduce "Recommended for You" sections within the new Participant List being developed for Meeting Scheduling.',
      items: [
        'Profile data analysis',
        'Interest-based matching',
        'UI-native recommendations'
      ],
      timeline: 'Initial Launch'
    },
    {
      number: 2,
      title: 'Conversational Intelligence',
      icon: 'chat_bubble',
      description: 'Implement real-time matchmaking suggestions directly inside the chat interface.',
      items: [
        'Contextual chat analysis',
        'In-thread suggestions',
        'Dynamic profile insights'
      ],
      timeline: 'Mid-Term Expansion'
    },
    {
      number: 3,
      title: 'Intelligent Meeting Suggestions',
      icon: 'event_available',
      description: 'Automate the transition from connection to scheduled meeting using shared availability.',
      items: [
        'Calendar sync integration',
        'Smart time slot discovery',
        'One-tap meeting booking'
      ],
      timeline: 'Strategic Maturity'
    }
  ];
}
