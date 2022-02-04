import { UrlSegment } from '@angular/router';

export const createPath = (url: UrlSegment[]): string =>
    url.reduce((acc, item) => {
        acc += `/${item.path}`;
        return acc;
    }, '') || '';
