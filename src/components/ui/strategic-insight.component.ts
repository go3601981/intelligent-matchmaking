import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-strategic-insight',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div 
      class="p-4 rounded-2xl border flex items-start gap-3 transition-all duration-500"
      [ngClass]="{
        'bg-blue-50 border-blue-100': type() === 'info',
        'bg-emerald-50 border-emerald-100': type() === 'success',
        'bg-amber-50 border-amber-100': type() === 'warning',
        'bg-slate-900 border-slate-800 text-white': type() === 'dark'
      }"
    >
      <div 
        class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        [ngClass]="{
          'bg-blue-600 text-white': type() === 'info',
          'bg-emerald-600 text-white': type() === 'success',
          'bg-amber-600 text-white': type() === 'warning',
          'bg-blue-500 text-white': type() === 'dark'
        }"
      >
        <mat-icon class="text-lg h-5 w-5">{{ icon() }}</mat-icon>
      </div>
      <div>
        <h4 
          class="text-[10px] font-bold uppercase tracking-widest mb-0.5"
          [ngClass]="{
            'text-blue-900': type() === 'info',
            'text-emerald-900': type() === 'success',
            'text-amber-900': type() === 'warning',
            'text-blue-400': type() === 'dark'
          }"
        >
          {{ label() }}
        </h4>
        <p 
          class="text-[11px] leading-relaxed"
          [ngClass]="{
            'text-blue-700': type() === 'info',
            'text-emerald-700': type() === 'success',
            'text-amber-700': type() === 'warning',
            'text-slate-300': type() === 'dark'
          }"
        >
          <ng-content></ng-content>
        </p>
      </div>
    </div>
  `
})
export class StrategicInsightComponent {
  label = input<string>('Strategic Insight');
  icon = input<string>('lightbulb');
  type = input<'info' | 'success' | 'warning' | 'dark'>('info');
}
