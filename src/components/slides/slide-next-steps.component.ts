import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-next-steps',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="Immediate Next Steps" subtitle="Proposal to Execution">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div class="space-y-4">
          <div class="space-y-1">
            <h3 class="text-[9px] font-bold text-blue-600 uppercase tracking-widest">Action Plan</h3>
            <p class="text-xl font-light text-gray-900 leading-tight">
              A clear path toward <span class="font-bold">Phase 1</span> implementation.
            </p>
          </div>

          <div class="space-y-2">
            @for (step of steps; track step.title) {
              <div class="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors group">
                <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <mat-icon class="text-base h-4 w-4">{{ step.icon }}</mat-icon>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-gray-900">{{ step.title }}</h4>
                  <p class="text-[10px] text-gray-500 leading-tight">{{ step.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="p-6 bg-gray-900 rounded-[32px] text-white relative overflow-hidden shadow-2xl max-w-sm mx-auto">
          <div class="absolute top-0 right-0 w-24 h-24 bg-blue-600/20 rounded-full blur-3xl -mr-12 -mt-12"></div>
          
          <div class="relative z-10 space-y-4">
            <h4 class="text-blue-400 font-bold text-[9px] uppercase tracking-widest">The Decision</h4>
            <p class="text-xl font-light leading-tight">
              Approve <span class="text-blue-400 font-bold">Phase 1</span> technical discovery and UI prototyping.
            </p>

            <div class="space-y-3 pt-4 border-t border-white/10">
              <div class="flex items-center gap-2">
                <div class="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <mat-icon class="text-[12px] w-auto h-auto leading-none">check</mat-icon>
                </div>
                <span class="text-xs font-light">Define data schema for matching</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <mat-icon class="text-[12px] w-auto h-auto leading-none">check</mat-icon>
                </div>
                <span class="text-xs font-light">Prototype "Suggested" UI</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <mat-icon class="text-[12px] w-auto h-auto leading-none">check</mat-icon>
                </div>
                <span class="text-xs font-light">Select Vector Database provider</span>
              </div>
            </div>

            <div class="pt-4">
              <button class="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-xs transition-colors shadow-lg shadow-blue-900/50">
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
    mat-icon {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
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
