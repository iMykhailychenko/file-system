import { Injectable } from '@angular/core';

interface Options {
    isOpen?: boolean;
    title: string;
}

@Injectable({
    providedIn: 'root',
})
export class FileOptionsService {
    title = 'File options';
    isOpen = false;

    constructor() {}

    setModalData(value?: Options): void {
        if (value?.isOpen !== undefined) {
            this.isOpen = value.isOpen;
        } else {
            this.isOpen = !this.isOpen;
        }

        if (value?.title !== undefined) {
            this.title = value.title;
        }
    }
}
