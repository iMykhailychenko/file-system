import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DirService } from '../../services/dir.service';
import { createPath } from '../../shared/helpers/create-path';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    isHome = true;

    constructor(private readonly router: ActivatedRoute, public readonly dirService: DirService) {}

    ngOnInit(): void {
        this.router.url.subscribe(url => {
            const path = createPath(url);

            this.isHome = path === '';
            this.dirService.getDirContent(path);
        });
    }
}
