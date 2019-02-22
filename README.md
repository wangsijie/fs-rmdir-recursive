# fs-rmdir-recursive

Remove a directory and its entire files, using fs.rmdirSync and fs.unlinkSync.

Using fs.rmdirSync or fs.rmdir only, you can't delete a not empty folder.

## Install

```
npm i fs-rmdir-recursive
```

## Usage

```js
const rmdir = require('fs-rmdir-recursive');

rmdir('path/to/be/remove');

console.log('success!')
```
