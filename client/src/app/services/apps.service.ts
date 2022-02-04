import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { endpoint } from '../shared/endpoint';

@Injectable({
    providedIn: 'root',
})
export class AppsService {
    apps: string[] = [];

    constructor(private readonly http: HttpClient) {}

    getAppsList(): void {
        this.http.get<string[]>(endpoint('/apps')).subscribe(apps => {
            this.apps = apps;
        });
    }
}
