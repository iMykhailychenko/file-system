import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DirService } from '../../services/dir.service';
import { createPath } from '../../shared/helpers/create-path';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    path = '';
    withHiddenFiles = false;

    search = '';
    @Input() title = '';
    @Input() dirs: string[] = [];
    @Input() files: string[] = [];

    constructor(private readonly router: ActivatedRoute, public readonly dirService: DirService) {}

    ngOnInit(): void {
        this.router.url.subscribe(url => {
            this.path = createPath(url);
        });
    }

    filteredData(data: string[]): string[] {
        return data.filter(item => {
            const searchFilter = item.toLowerCase().includes(this.search.toLowerCase());

            if (this.withHiddenFiles) return searchFilter;
            return item[0] !== '.' && searchFilter;
        });
    }

    toggleHiddenFiles(): void {
        this.withHiddenFiles = !this.withHiddenFiles;
    }
}
