import { environment } from '../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IMovie } from '../models/movie.interface';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
    constructor(private httpClient: HttpClient) {}

    public getMovie(movieId: number): Observable<IMovie> {
        return this.httpClient.get<IMovie>(`${environment.BASE_URL}/movie/${movieId}`);
    }
}