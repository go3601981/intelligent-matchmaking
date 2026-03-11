import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SlideLayoutComponent } from '../ui/slide-layout.component';

@Component({
  selector: 'app-slide-chat-integration',
  standalone: true,
  imports: [CommonModule, MatIconModule, SlideLayoutComponent],
  template: `
    <app-slide-layout title="Inside Conversations" subtitle="Converting Dialogue into Action">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div class="space-y-4">
          <div class="space-y-2">
            <h3 class="text-[9px] font-bold text-blue-600 uppercase tracking-widest">Contextual Intelligence</h3>
            <p class="text-2xl font-light text-gray-900 leading-tight">
              Matchmaking intelligence can operate <span class="font-bold">inside the chat</span>.
            </p>
          </div>

          <p class="text-sm text-gray-500 leading-relaxed max-w-lg">
            The system analyzes the flow of conversation to provide timely, relevant suggestions that move the relationship forward.
          </p>

          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <mat-icon class="text-base h-4 w-4">schedule</mat-icon>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-xs">Suggested Meeting Times</h4>
                <p class="text-[10px] text-gray-500">Automatically identifying gaps in both participants' schedules.</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                <mat-icon class="text-base h-4 w-4">videocam</mat-icon>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-xs">Suggested Meeting Formats</h4>
                <p class="text-[10px] text-gray-500">Recommending in-person locations or instant video links.</p>
              </div>
            </div>
          </div>

          <div class="p-3 bg-blue-50 rounded-xl border border-blue-100">
            <p class="text-blue-900 font-medium flex items-center gap-2 text-xs">
              <mat-icon class="text-blue-600 text-base h-4 w-4">trending_up</mat-icon>
              This converts <span class="font-bold italic">conversation</span> into <span class="font-bold italic">action</span>.
            </p>
          </div>

          <!-- Welcome Modal Concept -->
          <div class="p-3 bg-white rounded-xl border border-gray-100 shadow-xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-12 h-12 bg-blue-50 rounded-full -mr-6 -mt-6"></div>
            <div class="relative z-10 space-y-1">
              <div class="flex items-center gap-2">
                <mat-icon class="text-blue-600 text-xs h-3 w-3">waving_hand</mat-icon>
                <span class="text-[8px] font-bold text-gray-900 uppercase tracking-widest">Welcome Icebreaker</span>
              </div>
              <p class="text-[9px] text-gray-600 leading-tight">
                "Welcome! Based on your shared interest in <span class="text-blue-600 font-bold">AI Strategy</span>, here are 2 icebreaker questions."
              </p>
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- Chat UI Mockup -->
          <div class="bg-white rounded-[24px] shadow-2xl border border-gray-100 overflow-hidden max-w-[280px] mx-auto">
            <div class="p-3 border-b border-gray-50 flex items-center gap-2 bg-gray-50/50">
              <div class="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">SJ</div>
              <div>
                <p class="text-[10px] font-bold text-gray-900">Sarah Jenkins</p>
                <p class="text-[7px] text-emerald-500 font-bold uppercase tracking-wider">Online</p>
              </div>
            </div>

            <div class="p-3 space-y-3 h-[240px] flex flex-col">
              <!-- Messages -->
              <div class="space-y-2 flex-1">
                <div class="flex justify-end">
                  <div class="bg-blue-600 text-white p-2 rounded-lg rounded-tr-none max-w-[80%] text-[9px]">
                    Hi Sarah! I saw your talk on Product Strategy.
                  </div>
                </div>
                <div class="flex justify-start">
                  <div class="bg-gray-100 text-gray-700 p-2 rounded-lg rounded-tl-none max-w-[80%] text-[9px]">
                    Thanks! I'd love to chat more.
                  </div>
                </div>
              </div>

              <!-- Smart Suggestion Overlay -->
              <div class="animate-bounce-subtle">
                <div class="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl p-3 shadow-xl text-white space-y-2">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-1.5">
                      <mat-icon class="text-[10px] h-2.5 w-2.5">auto_awesome</mat-icon>
                      <span class="text-[7px] font-bold uppercase tracking-widest">Smart Suggestion</span>
                    </div>
                  </div>
                  
                  <p class="text-[9px] font-medium leading-tight">Both of you are free today at 3:00 PM. Schedule a meeting?</p>
                  
                  <div class="grid grid-cols-2 gap-1.5">
                    <button class="bg-white/20 hover:bg-white/30 py-1 rounded-md text-[7px] font-bold flex items-center justify-center gap-1">
                      <mat-icon class="text-[9px] h-2 w-2">place</mat-icon> In-Person
                    </button>
                    <button class="bg-white/20 hover:bg-white/30 py-1 rounded-md text-[7px] font-bold flex items-center justify-center gap-1">
                      <mat-icon class="text-[9px] h-2 w-2">videocam</mat-icon> Video Call
                    </button>
                  </div>
                </div>
              </div>

              <!-- Input Area -->
              <div class="h-8 bg-gray-50 rounded-lg border border-gray-100 flex items-center px-2 gap-2 text-gray-300">
                <span class="text-[9px]">Type a message...</span>
                <div class="flex-1"></div>
                <mat-icon class="text-base h-4 w-4">send</mat-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-slide-layout>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
    
    @keyframes bounce-subtle {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    .animate-bounce-subtle {
      animation: bounce-subtle 3s ease-in-out infinite;
    }
  `]
})
export class SlideChatIntegrationComponent {}
