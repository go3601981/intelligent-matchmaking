import { Component } from '@angular/core';
import { SlideLayoutComponent } from '../ui/slide-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-title',
  standalone: true,
  imports: [SlideLayoutComponent, MatIconModule, CommonModule],
  template: `
    <app-slide-layout [showLine]="false" title="" subtitle="">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Left Column: Content -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-blue-200">
            Strategic Product Proposal
          </div>
          
          <div class="space-y-3">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[0.95] tracking-tight">
              Intelligent <br/>
              <span class="text-blue-600">Matchmaking</span>
            </h1>
            <p class="text-lg md:text-xl text-slate-500 font-medium leading-tight">
              Turning Event Networking into Sales Opportunities
            </p>
          </div>

          <p class="text-base md:text-lg text-slate-600 font-light leading-relaxed max-w-xl">
            A recommendation system powered by <span class="font-semibold text-slate-900">Vector Search</span> and <span class="font-semibold text-slate-900">Behavioral Intelligence</span>, seamlessly integrated into attendee discovery and coordination.
          </p>

          <div class="flex gap-4 pt-2">
            <div class="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <mat-icon class="text-xs h-3 w-3">bolt</mat-icon>
              Powered by AI
            </div>
            <div class="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <mat-icon class="text-xs h-3 w-3">hub</mat-icon>
              Vector Search
            </div>
          </div>
        </div>

        <!-- Right Column: Visual Anchor & Cards -->
        <div class="lg:col-span-5 space-y-4">
          <!-- Objective Card -->
          <div class="group p-6 bg-white rounded-[24px] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-200 transition-all duration-500">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                <mat-icon class="text-sm">target</mat-icon>
              </div>
              <h4 class="text-xs font-bold text-slate-900 uppercase tracking-widest">The Objective</h4>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              Implement intelligent matchmaking that improves networking outcomes while remaining fully attendee-driven and frictionless.
            </p>
          </div>

          <!-- Status Card -->
          <div class="p-6 bg-slate-900 rounded-[24px] text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-3 mb-3 text-blue-400">
                <mat-icon class="text-sm">trending_up</mat-icon>
                <h4 class="text-xs font-bold uppercase tracking-widest">Current Vision</h4>
              </div>
              <p class="text-base font-light leading-snug italic text-slate-200">
                "Evolving from a logistics tool into a strategic networking engine."
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Refined Footer -->
      <div class="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="flex items-center gap-6">
          <div>
            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Presented By</p>
            <p class="text-xs font-bold text-slate-900">Expo Pass Product Team</p>
          </div>
          <div class="w-px h-6 bg-slate-200 hidden md:block"></div>
          <div>
            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Date</p>
            <p class="text-sm font-bold text-slate-900">March 11, 2026</p>
          </div>
        </div>
        
        <div class="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-widest">
          Confidential Proposal
          <mat-icon class="text-xs h-3 w-3">lock</mat-icon>
        </div>
      </div>
    </app-slide-layout>
  `
})
export class SlideTitleComponent {}
