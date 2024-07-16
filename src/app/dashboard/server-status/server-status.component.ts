import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unkown'>('offline');
  private destroyRef = inject(DestroyRef);

  private changeStatus() {
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unkown');
      }
    }, 5000);
    return interval;
  }

  ngOnInit(): void {
    const statusInterval = this.changeStatus();

    this.destroyRef.onDestroy(() => {
      clearInterval(statusInterval);
    });
  }
}
