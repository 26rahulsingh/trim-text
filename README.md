[![npm](https://img.shields.io/npm/dt/trim-text.svg?style=flat-square)](https://www.npmjs.com/package/trim-text)
[![GitHub release](https://img.shields.io/github/release/26rahulsingh/trim-text.svg?style=flat-square)](https://github.com/26rahulsingh/trim-text/releases)
[![npm](https://img.shields.io/npm/l/trim-text.svg?style=flat-square)]()

# trim-text

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

Demo: https://stackblitz.com/github/26rahulsingh/trim-text

## Installation

To install this library, run:

```bash
$ npm install trim-text --save
```
and then in your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Import the library
import { TrimTextModule } from 'trim-text';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Import the library
    TrimTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Once library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use library component in app.component.html -->

<input type="text"  placeholder="input" [(ngModel)]="testInput" trimText />
```

## Features

Add the `trimText` attribute to a text `input` or `textarea` element.
Trim text after `blur`.
`<input type="text" trimText />`
`<textarea ... trimText></textarea>`

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Rahul Singh](mailto:singh.rahul26@hotmail.com)