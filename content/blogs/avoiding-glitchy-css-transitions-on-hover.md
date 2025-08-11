## The problem

As a frontend developer, you might have run in the situation where you need to add an effect on hover which changes the original position of the element. Let's consider a hover effect on a button. You might need to change the position of the button on hover most likely translating in by a few pixels on any direction.

The snippet below shows an example with a similar condition:

```html
<button class="button">
    Glitchy
 </button>
```

```css
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 250px;
  background: #5398be;
  border-radius:40px;
  font-family: Arial;
  font-size: 1.2rem;
  color: #fff;

  transition: transform 250ms;
  &:hover {
    transform: translateY(-20px);
    will-change: transform;
  }
}
```

On changing the position of the button on hover, your mouse pointer might be positioned such that it is no longer over the button. This causes the button to go out of the hover which then causes it to go right back to its original position. The pointer being there already will trigger another hover. You can checkout the behavior as seen below

![Hover with glitchy transition](https://res.cloudinary.com/pratiek/image/upload/v1615115406/Blog/GlitchySCSS/glitchy_transition.gif)

## The solution

To avoid such situations, you need to add a parent wrapper on the button then listen to hover on this parent:

The snippet below shows an example with a similar condition:

```html
<div class="smooth">
  <button class="button">
    Smooth
  </button>
</div>
```

```css
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 250px;
  background: #5398be;
  border-radius:40px;
  font-family: Arial;
  font-size: 1.2rem;
  color: #fff;
}

.smooth {
  .button{
    transition: transform 250ms;
  }
  &:hover {
    .button{
      transform: translateY(-20px);
    }
  }
}
```

Notice how the animations and transitions are still the same. The only thing that changed is the trigger, we removed the trigger from the button itself and added it to the parent wrapper. This fixes our problem on the second button as seen below:

![Hover with fixed transition](https://res.cloudinary.com/pratiek/image/upload/v1615125590/Blog/GlitchySCSS/smooth_transition.gif)

You can also check out the full code for this on my codepen:

https://codepen.io/prateekkarki/pen/WNogOrr
