import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DirContent } from '../interfaces/dir.interface';
import { endpoint } from '../shared/endpoint';

@Injectable({
    providedIn: 'root',
})
export class DirService {
    data: DirContent = { files: [], directories: [] };

    constructor(private readonly http: HttpClient) {}

    getDirContent(path: string): void {
        this.http.get<DirContent>(endpoint(path)).subscribe(res => {
            this.data = res;
        });
    }

    openFile(path: string): void {
        this.http.post(endpoint('/open-file'), { path }).subscribe(res => {
            console.log(res);
        });
    }
}
