# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).

## Overview

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learnt about center an element right in the middle of a window using transform. Top and left creates margin that span 50% of the containing block (default as the entire body). Without the transform, the card would be centered at the top left corner but not right in the middle of the card. Therefore, we have to add negative left margin 50% of the card width and add negative top margin 50% of the card height to put the center of the card at the center of the screen.

```css
.card {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
```

## Author

- Website - [An Phan](https://www.minhanphanle.com)
- Frontend Mentor - [@minhanphanle](https://www.frontendmentor.io/profile/minhanphanle)
- Twitter - [@justcuriousan](https://twitter.com/justcuriousan)
