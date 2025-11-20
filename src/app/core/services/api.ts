import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiRequest {
  url: string;
  method: HttpMethod;
  headers?: { [key: string]: string };
  body?: any;
}

export interface ApiResponse {
  status: number;
  statusText: string;
  timeMs: number;
  headers: { [key: string]: string };
  body: any;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  sendRequest(request: ApiRequest): Observable<ApiResponse> {
    const { url, method, headers, body } = request;

    let httpHeaders = new HttpHeaders();
    if (headers) {
      Object.entries(headers).forEach(([key, value]) => {
        httpHeaders = httpHeaders.set(key, value);
      });
    }

    const start = performance.now();

    return this.http
      .request<any>(method, url, {
        body,
        headers: httpHeaders,
        observe: 'response',
      })
      .pipe(
        map((response) => {
          const end = performance.now();
          const timeMs = end - start;

          const headersObj: { [key: string]: string } = {};
          response.headers.keys().forEach((key: string) => {
            headersObj[key] = response.headers.get(key) ?? '';
          });

          return {
            status: response.status,
            statusText: response.statusText,
            timeMs,
            headers: headersObj,
            body: response.body,
          };
        }),
        catchError((errorResponse) => {
          const end = performance.now();
          const timeMs = end - start;

          const headersObj: { [key: string]: string } = {};
          if (errorResponse?.headers) {
            errorResponse.headers.keys().forEach((key: string) => {
              headersObj[key] = errorResponse.headers.get(key) ?? '';
            });
          }

          return of({
            status: errorResponse.status ?? 0,
            statusText: errorResponse.statusText ?? 'Error',
            timeMs,
            headers: headersObj,
            body:
              errorResponse.error ??
              errorResponse.message ??
              'Error desconocido',
          });
        })
      );
  }
}


