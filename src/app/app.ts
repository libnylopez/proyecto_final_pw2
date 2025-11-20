import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestFormComponent } from './features/request-form/request-form';
import { ResponseViewerComponent } from './features/response-viewer/response-viewer';
import { ApiService, ApiRequest, ApiResponse } from './core/services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RequestFormComponent,
    ResponseViewerComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  title = 'API Testing Tool';

  response: ApiResponse | null = null;
  loading = false;

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  onSendRequest(request: ApiRequest) {
    this.loading = true;
    this.response = null;
    this.cdr.markForCheck(); // refresca de entrada

    this.apiService.sendRequest(request).subscribe({
      next: (res) => {
        this.response = res;
        this.loading = false;
        this.cdr.detectChanges(); // fuerza actualización inmediata
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }
}
