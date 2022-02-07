import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { endpoint } from '../shared/endpoint';
import { createPath } from '../shared/helpers/create-path';

@Injectable({
    providedIn: 'root',
})
export class AppsService {
    apps: string[] = [];

    constructor(private readonly http: HttpClient, private readonly router: ActivatedRoute) {}

    getAppsList(): void {
        this.http.get<string[]>(endpoint('/apps')).subscribe(apps => {
            this.apps = apps;
        });
    }

    openInApp(file: string, app: string): void {
        this.router.url.subscribe(url => {
            const path = createPath(url);

            this.http.post(endpoint('/open-file'), { path: path + file, app }).subscribe();
        });
    }
}
