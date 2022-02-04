import { Component, OnInit } from '@angular/core';

import { AppsService } from '../../../services/apps.service';

import { FileOptionsService } from './file-options.service';

@Component({
    selector: 'app-file-options',
    templateUrl: './file-options.component.html',
    styleUrls: ['./file-options.component.scss'],
})
export class FileOptionsComponent implements OnInit {
    constructor(public readonly fileOptionsService: FileOptionsService, public readonly appsService: AppsService) {}

    ngOnInit(): void {
        this.appsService.getAppsList();
    }
}
