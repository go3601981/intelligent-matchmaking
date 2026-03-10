import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-next-steps',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="Immediate Next Steps" subtitle="Moving from Proposal to Execution">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <div class="space-y-2">
            <h3 class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Action Plan</h3>
            <p class="text-2xl font-light text-gray-900 leading-tight">
              A clear path toward <span class="font-bold">Phase 1</span> implementation.
            </p>
          </div>

          <div class="space-y-3">
            @for (step of steps; track step.title) {
              <div class="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors group">
                <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <mat-icon class="text-lg h-5 w-5">{{ step.icon }}</mat-icon>
                </div>
                <div>
                  <h4 class="text-base font-bold text-gray-900">{{ step.title }}</h4>
                  <p class="text-[11px] text-gray-500 leading-tight">{{ step.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="p-8 bg-gray-900 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
          <div class="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div class="relative z-10 space-y-6">
            <h4 class="text-blue-400 font-bold text-[10px] uppercase tracking-widest">The Decision</h4>
            <p class="text-2xl font-light leading-snug">
              Approve <span class="text-blue-400 font-bold">Phase 1</span> technical discovery and UI prototyping.
            </p>

            <div class="space-y-4 pt-6 border-t border-white/10">
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <mat-icon class="text-xs h-3 w-3">check</mat-icon>
                </div>
                <span class="text-sm font-light">Define data schema for matching</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <mat-icon class="text-xs h-3 w-3">check</mat-icon>
                </div>
                <span class="text-sm font-light">Prototype "Suggested" UI in Participant List</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <mat-icon class="text-xs h-3 w-3">check</mat-icon>
                </div>
                <span class="text-sm font-light">Select Vector Database provider</span>
              </div>
            </div>

            <div class="pt-6">
              <button class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl font-bold text-sm transition-colors shadow-lg shadow-blue-900/50">
                Initiate Discovery Phase
              </button>
            </div>
          </div>
        </div>
      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `]
})
export class SlideNextStepsComponent {
  readonly steps = [
    {
      title: 'Technical Discovery',
      icon: 'terminal',
      description: 'Evaluate Vector DB options and LLM integration for semantic matching.'
    },
    {
      title: 'UI/UX Prototyping',
      icon: 'design_services',
      description: 'Design the "Recommended" sections for the upcoming Participant List.'
    },
    {
      title: 'Data Mapping',
      icon: 'schema',
      description: 'Define which profile fields and behavioral signals drive the engine.'
    }
  ];
}
