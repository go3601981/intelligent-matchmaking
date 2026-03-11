import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-disney-model',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="The Disney Model: Fluid Scheduling" subtitle="Time-First Discovery">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div class="space-y-4">
          <div class="space-y-2">
            <h3 class="text-[9px] font-bold text-blue-600 uppercase tracking-widest">Strategic Concept</h3>
            <p class="text-2xl font-light text-gray-900 leading-tight">
              Don't just browse <span class="font-bold">people</span>. Browse <span class="font-bold">time</span>.
            </p>
          </div>

          <p class="text-sm text-gray-500 leading-relaxed max-w-lg">
            Inspired by ride booking, we allow users to select a free slot. The "Intelligence Layer" then proposes the best matches available.
          </p>

          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0">
                <mat-icon class="text-base h-4 w-4">schedule</mat-icon>
              </div>
              <div>
                <h4 class="font-bold text-blue-900 text-xs">Fluidity vs. Structure</h4>
                <p class="text-[10px] text-blue-700">Supports EO-defined blocks while allowing users to book "fluid" slots on the fly.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- Schedule Mockup -->
          <div class="bg-white rounded-[24px] shadow-2xl border border-gray-100 overflow-hidden max-w-[320px] mx-auto p-4 space-y-4">
            <div class="flex items-center justify-between border-b border-gray-50 pb-2">
              <h4 class="text-xs font-bold text-gray-900">My Schedule</h4>
              <span class="text-[9px] text-gray-400">Wed, Mar 11</span>
            </div>

            <div class="space-y-3">
              <!-- Occupied Slot -->
              <div class="flex gap-3">
                <span class="text-[9px] text-gray-400 w-8">2:00 PM</span>
                <div class="flex-1 p-2 bg-gray-50 rounded-lg border border-gray-100 opacity-50">
                  <p class="text-[10px] font-bold text-gray-900">Keynote Session</p>
                </div>
              </div>

              <!-- Free Slot with Disney Model -->
              <div class="flex gap-3">
                <span class="text-[9px] text-blue-600 font-bold w-8">3:30 PM</span>
                <div class="flex-1 p-3 bg-blue-600 rounded-xl text-white shadow-xl shadow-blue-200 relative group cursor-pointer">
                  <div class="flex items-center justify-between mb-1">
                    <p class="text-[10px] font-bold">Free Window</p>
                    <mat-icon class="text-[10px] h-2.5 w-2.5">auto_awesome</mat-icon>
                  </div>
                  <p class="text-[9px] text-blue-100 mb-2">Who should you meet?</p>
                  
                  <div class="space-y-1.5">
                    <div class="flex items-center gap-2 p-1 bg-white/10 rounded-md">
                      <div class="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[7px] font-bold">SJ</div>
                      <span class="text-[8px] font-bold">Sarah Jenkins</span>
                    </div>
                    <div class="flex items-center gap-2 p-1 bg-white/10 rounded-md">
                      <div class="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[7px] font-bold">MC</div>
                      <span class="text-[8px] font-bold">Michael Chen</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Occupied Slot -->
              <div class="flex gap-3">
                <span class="text-[9px] text-gray-400 w-8">4:00 PM</span>
                <div class="flex-1 p-2 bg-gray-50 rounded-lg border border-gray-100 opacity-50">
                  <p class="text-[10px] font-bold text-gray-900">Panel Discussion</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Annotation -->
          <div class="absolute -bottom-2 -right-2 p-3 bg-gray-900 text-white rounded-xl shadow-2xl max-w-[140px] hidden md:block">
            <p class="text-[10px] font-light leading-tight">
              "Spoon-feeding" value by identifying gaps and proposing the <span class="text-blue-400 font-bold">perfect match</span>.
            </p>
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
export class SlideDisneyModelComponent {}
