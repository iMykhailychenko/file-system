import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { createPath } from '../../shared/helpers/create-path';

@Component({
    selector: 'app-back-button',
    templateUrl: './back-button.component.html',
    styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
    path = '';

    constructor(private readonly router: ActivatedRoute) {}

    ngOnInit(): void {
        this.router.url.subscribe(url => {
            this.path = createPath(url.slice(0, url.length - 1));
        });
    }
}
