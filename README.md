# Landing Page

Landing page based on desktop-only design. Here's the technology stack I used for this project.

## Technology stack

I utilized webpack to bundle HTML templates, LESS styling sheets and JavaScript code.

## Test environment

- Google Chrome 92.0.4515.159
- Firefox 91.0.2

## Challenges

The biggest challenge was to apply mobile-first approach having a desktop-only design. In the process, I came up with a few tweaks that weren't given in the design. The tablet version includes a transparent overlay feature for `h1` block to increase its readibility. Mouse icon in the desktop version turned into a navigation element that returns user to the main navigation menu. It has a fixed position at the bottom of the page.

### What I learned from this project

Thanks to Kevin Powell, I used the `scroll-behavior` property with `smooth` value which works absolutely fantastic when it comes to navigating between sections on the same page.

## Attributions

1. [HTMLAcademy's](https://htmlacademy.ru/) Pawel Betkowski made the original design layout in `.psd`. I got it through now discontinued free subscription campaign and included a raster version of the design in this repo as `wheels.png`;
2. [Kevin Powell](https://www.kevinpowell.co/). Thanks a lot for a great [short video on smooth scrolling css feature](https://youtu.be/jBhuPKnsBCE)!

## Conributing

If you get interested in this project, I'd be glad to see your contributions. Pull requests are welcome!

## Project builds

**/dist**

> minimized production build

**/src**

> source files

## Usage instructions

1. Clone the repository
2. Run `npm i` to install dependencies
3. Run one of the following commands:

### Production Build

```
npm run build
```

### Development Build

```
npm run build-dev
```

### Development Server

```
npm start
```

## License

[MIT](LICENSE.md)