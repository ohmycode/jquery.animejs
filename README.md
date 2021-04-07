# jQuery.animejs
This is a small (< 1kb) helper plugin for the great [Anime.js](https://animejs.com/).

### Features

- Chain Anime.js calls in a more readable way.
- Supports latest Anime.js versions with all options.
- Very small Footprint (~600 bytes).

#### Example　

```javascript
$(selector).animejs({
    left : '50%',
    translateX: '-50%',
    background : '#00ff00',
    duration: 1000,
}).animejs({
    top : '50%',
    color : '#fff',
    background : '#ff0000',
    duration: 1000,
}).animejs({
    rotate : 360,
    duration: 1000,
})
```


