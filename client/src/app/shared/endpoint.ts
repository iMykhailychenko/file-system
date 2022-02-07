import { isDevMode } from '@angular/core';

export const endpoint = (path = ''): string => `${isDevMode() ? 'http://127.0.0.1:5000' : ''}/api/v1${path}`;
