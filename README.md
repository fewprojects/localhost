# 📟 localhost UI

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
<link rel="stylesheet" href="https://unpkg.com/localhost-ui/localhost.css" />
```

### Using npm

Type following code in your terminal

```git
npm i localhost-ui
```

Use localhost UI into your ReactJS project like this :

```javascript
import "localhost";
```

After adding localhost UI into your practice project, you can play with your backend without worrying about frontend styling.

## Pre-built themes

There are 4 dark and 4 light pre-built themes are available excluding one default light/dark localhost theme.

### Dark themes

- Gameboy
- Gold
- Hacker
- Dark Writer

### Light Themes

- Coffee
- Office
- Vintage
- Light Writer

You can customize themes according to you and add new themes as well.

Here is how you create new themes for your own projects in just 2 minutes

### Creating new theme.

There are only 7 variables you have to edit to create a new theme for your project.

Here are those 7 variables :

For Buttons, Inputs &amp; Hyperlinks

- --primary-color
- --accent-color

For Headings and Body text

- --heading-color
- --body-text-color

For Background and Containers

- --background-color
- --container-color

For Font family

- --font-family

Copy this following code into a new css file 'YourTheme.css'.

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

Replace the default values with your color palette and font-family (Do not remove '!important' tag).

Add this 'YourTheme.css' into <head></head> tag of your HTML document.

```html
<link rel="stylesheet" href="YourTheme.css" />
```

Voila! You just made your own new theme.

## How to contribute

...

## License

GPL-3.0
