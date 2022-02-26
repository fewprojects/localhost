# 📟 Localhost UI

![img](https://img.shields.io/badge/Licence-MIT-success) ![forks](https://img.shields.io/github/forks/fewprojects/localhost) ![starts](https://img.shields.io/github/stars/fewprojects/localhost)

A minimal, sementic, customizable lightweight CSS boilerplate to make instant layout for your projects while you are building backend on localhost

### [View Documentation](https://fewprojects.github.io/localhost/)

## Why use localhost UI?

Here are few charming benefits to use prefer **localhost UI** in your backend project.

- Sementic framework
- Responsive Grid layout based design
- Fluid Typography
- Highly and easily Customizable
- Based on minimalism

We are continuously evolving it and making it better for developers like you.

## Quick Installation

You can install localhost UI into your system via these following methods

### Using CDN (Easy)

Paste this following link within `<head></head>` tags

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/localhost-ui/localhost.min.css"
/>
```

### Using npm

Type following code in your terminal

```git
npm i localhost-ui
```

Use localhost UI into your ReactJS project like this :

```javascript
import "localhost-ui";
```

After adding localhost UI into your practice project, you can play with your backend without worrying about frontend styling.

## Pre-built themes

There are 4 dark and 4 light pre-built themes are available excluding one default light/dark localhost theme.

### Dark themes

- Gameboy
- Gold
- Hacker
- Writer

### Light Themes

- Coffee
- Office
- Vintage
- Writer

### How to use pre built themes

For instance, to use **dark theme / hacker**, Copy this following code into <head></head> tag of your HTML document.

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/localhost-ui/themes/dark/hacker.css"
/>
```

If your are using npm, import **dark theme / hacker** like this :

```javascript
import "localhost-ui/themes/dark/hacker.css";
```

Same goes for other dark and light pre-built themes

### Creating new theme

If you didn't like any of pre-built themes, you can create a new theme with different color palette and typography.

You can do that in less than 2 minutes, let's see how!

Follow these steps to create a new theme for your project

- Create a new css file **YourTheme.css** (You can name it anything)

- Copy this following code into your new css file

```css
/* Import your favourite font family */
@import url(" ");

:root {
  /* For Buttons, Inputs & Hyperlinks */
  --primary-color: #8b51f7 !important;
  --accent-color: #7938f1 !important;

  /* For Headings & Text */
  --heading-color: #f1f1f1 !important;
  --body-text-color: #dedede !important;

  /* For Background and Containers */
  --background-color: #000000 !important;
  --container-color: #121212 !important;

  /*Font Family */
  --font-family: "Public Sans", sans-serif !important;
}
```

- Replace the default variables with your color palette and font-family (Do not remove '!important' tag).

- Add this 'YourTheme.css' into <head></head> tag of your HTML document.

```html
<link rel="stylesheet" href="YourTheme.css" />
```

and voila!

You just created a new theme for your project 🎉

## How to contribute

...

## License

[MIT](https://github.com/fewprojects/localhost/blob/master/LICENSE)
