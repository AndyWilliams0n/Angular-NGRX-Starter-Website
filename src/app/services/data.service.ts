import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {
    constructor(
        public http: HttpClient,
    ) { }

    public get(url: string): Observable<any> {
        // // LOG
        // console.log('URL', url);

        // return this.http.get(url)

        return this.http.get('assets/json/data.json')
            .pipe(catchError((error: any) => {
                this.handleError(error);
                this.handleStatus(error);

                return throwError(error);
            }));
    }

    // ERROR HANDLING

    private handleError(error: Response): void {
        // Custom logging
    }

    private handleStatus(error: Response): void {
        const status = error.status || 0;

        if (status === 401) {
            // not authenticated
        }

        if (status === 403) {
            // not authorized
        }

        if (status === 404) {
            // not found
        }

        if (status === 500) {
            // server error
        }
    }

}
