import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-disney-model',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="The Disney Model: Fluid Scheduling" subtitle="Facilitating Meetings Through Time-First Discovery">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <div class="space-y-3">
            <h3 class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Strategic Concept</h3>
            <p class="text-3xl font-light text-gray-900 leading-tight">
              Don't just browse <span class="font-bold">people</span>. Browse <span class="font-bold">time</span>.
            </p>
          </div>

          <p class="text-base text-gray-500 leading-relaxed">
            Inspired by the Disney App's ride booking, we allow users to select a free slot in their schedule. The "Intelligence Layer" then proposes the best matches available at that exact moment.
          </p>

          <div class="space-y-4">
            <div class="flex items-start gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <div class="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                <mat-icon>schedule</mat-icon>
              </div>
              <div>
                <h4 class="font-bold text-blue-900 text-sm">Fluidity vs. Structure</h4>
                <p class="text-[11px] text-blue-700">Supports EO-defined blocks while allowing users to book "fluid" slots on the fly.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- Schedule Mockup -->
          <div class="bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden max-w-sm mx-auto p-6 space-y-6">
            <div class="flex items-center justify-between border-b border-gray-50 pb-4">
              <h4 class="text-sm font-bold text-gray-900">My Schedule</h4>
              <span class="text-[10px] text-gray-400">Wednesday, March 11</span>
            </div>

            <div class="space-y-4">
              <!-- Occupied Slot -->
              <div class="flex gap-4">
                <span class="text-[10px] text-gray-400 w-10">2:00 PM</span>
                <div class="flex-1 p-3 bg-gray-50 rounded-xl border border-gray-100 opacity-50">
                  <p class="text-[11px] font-bold text-gray-900">Keynote Session</p>
                </div>
              </div>

              <!-- Free Slot with Disney Model -->
              <div class="flex gap-4">
                <span class="text-[10px] text-blue-600 font-bold w-10">3:30 PM</span>
                <div class="flex-1 p-4 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-200 relative group cursor-pointer">
                  <div class="flex items-center justify-between mb-2">
                    <p class="text-[11px] font-bold">Free Window</p>
                    <mat-icon class="text-xs h-3 w-3">auto_awesome</mat-icon>
                  </div>
                  <p class="text-[10px] text-blue-100 mb-3">Who should you meet?</p>
                  
                  <div class="space-y-2">
                    <div class="flex items-center gap-2 p-1.5 bg-white/10 rounded-lg">
                      <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[8px] font-bold">SJ</div>
                      <span class="text-[9px] font-bold">Sarah Jenkins</span>
                    </div>
                    <div class="flex items-center gap-2 p-1.5 bg-white/10 rounded-lg">
                      <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[8px] font-bold">MC</div>
                      <span class="text-[9px] font-bold">Michael Chen</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Occupied Slot -->
              <div class="flex gap-4">
                <span class="text-[10px] text-gray-400 w-10">4:00 PM</span>
                <div class="flex-1 p-3 bg-gray-50 rounded-xl border border-gray-100 opacity-50">
                  <p class="text-[11px] font-bold text-gray-900">Panel Discussion</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Annotation -->
          <div class="absolute -bottom-4 -right-4 p-4 bg-gray-900 text-white rounded-2xl shadow-2xl max-w-[160px]">
            <p class="text-[11px] font-light leading-relaxed">
              "Spoon-feeding" value by identifying gaps and proposing the <span class="text-blue-400 font-bold">perfect match</span> at the <span class="text-blue-400 font-bold">perfect time</span>.
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
