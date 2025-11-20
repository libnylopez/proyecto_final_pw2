import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiResponse } from '../../core/services/api';

@Component({
  selector: 'app-response-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './response-viewer.html',  
  styleUrl: './response-viewer.scss',      
})
export class ResponseViewerComponent {
  @Input() response: ApiResponse | null = null;
}

