import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiRequest, HttpMethod } from '../../core/services/api';

interface HeaderItem {
  key: string;
  value: string;
}

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './request-form.html',   
  styleUrl: './request-form.scss',      
})
export class RequestFormComponent {
  @Output() send = new EventEmitter<ApiRequest>();

  url = '';
  method: HttpMethod = 'GET';

  headers: HeaderItem[] = [{ key: '', value: '' }];

  rawBody = '{\n  \n}';
  bodyError: string | null = null;

  methods: HttpMethod[] = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

  onAddHeader() {
    this.headers.push({ key: '', value: '' });
  }

  onRemoveHeader(index: number) {
    this.headers.splice(index, 1);
  }

  onSubmit() {
    let parsedBody: any = null;
    this.bodyError = null;

    if (['POST', 'PUT', 'PATCH'].includes(this.method)) {
      if (this.rawBody.trim()) {
        try {
          parsedBody = JSON.parse(this.rawBody);
        } catch (e) {
          this.bodyError = 'El body no es un JSON válido.';
          return;
        }
      }
    }

    const headersObj: { [key: string]: string } = {};
    this.headers.forEach((h) => {
      if (h.key && h.value) {
        headersObj[h.key] = h.value;
      }
    });

    const request: ApiRequest = {
      url: this.url,
      method: this.method,
      headers: headersObj,
      body: parsedBody,
    };

    this.send.emit(request);
  }
}

