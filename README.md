# Mature

Mature content filter using a keyword tokenizer and a banned word list to determine number of mature words used and the percentage of the tokenized words that are mature.

## Install

```
npm install mature --save
```

## Usage

### Source is plain text

```javascript
const mature = require("mature");

mature
  .checkText(`The quick brown boner jumps over the lazy mother fucker.`)
  .then(m => {
    console.log(m);
  });
```

**Result**

```json
{
  "mature": true,
  "total": 2,
  "unique": 2,
  "percent": 0.18182
}
```

### Source is URL

```javascript
const mature = require("mature");

mature
  .checkURL("https://sex.com", {
    removeStop: true,
    threshold: {
      unique: 3,
      percent: 0.25
    }
  })
  .then(m => {
    console.log(m);
  });
```

**Result**

```json
{ "mature": true, "total": 195, "unique": 25, "percent": "0.21691" }
```

## Maintainers

- [Jay Goodfellow](https://github.com/jaygoodfellow)
- [Arcane Digital Inc](https://github.com/arcanedigital)

## License

Copyright (c) 2017, Arcane & Jay Goodfellow.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
