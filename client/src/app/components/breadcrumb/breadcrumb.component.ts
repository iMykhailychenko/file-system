import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Breadcrumb } from './breadcrumb.interface';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
    breadcrumbs: Breadcrumb[] = [];

    constructor(private readonly router: ActivatedRoute) {}

    ngOnInit(): void {
        this.router.url.subscribe(url => {
            this.breadcrumbs = url.reduce<Breadcrumb[]>((acc, item, index) => {
                if (!acc.length) {
                    acc.push({ path: '/' + item.path, name: item.path });
                    return acc;
                }

                acc[index] = {
                    path: acc[index - 1].path + '/' + item.path,
                    name: item.path,
                };

                return acc;
            }, []);
        });
    }
}
