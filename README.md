# jQuery.animejs
This is a small (< 1kb) helper plugin for the great [Anime.js](https://animejs.com/).

### Features

- Chain Anime.js calls in a more readable way.
- Supports latest Anime.js versions with all options.
- Very small Footprint (~600 bytes).

#### Usage

In the browser:

```html
<script src="/path/to/jquery.anime.min.js"></script>
<script>
    // start chaining
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
</script>
```
Or as a NPM dependency:

```bash
# Add the dependency to your project
npm install --save jquery.animejs

# or
yarn add jquery.animejs
```

And then import it in your project:

```javascript
import 'jquery.animejs'

// start chaining
$('.element').animejs({
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

#### Requirements
You need [jQuery](https://jquery.com/) and [Anime.js](https://animejs.com/) installed.


