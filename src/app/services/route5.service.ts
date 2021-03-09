import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { TableData } from '../model/tableData';

@Injectable({
  providedIn: 'root'
})
export class Route5Service {

  constructor(private http: HttpClient) { }

  getTableData() : Observable<TableData[]>{
    return this.http.get<TableData[]>('assets/table-data.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
