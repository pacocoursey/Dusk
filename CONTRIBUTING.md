# Contributing Guidelines

Thanks for your interest in contributing to Dusk! 🖤

## Icon Requests

Want to see an icon for your favorite app? Want to offer an alternative icon? I'd love to include it.

Please [create an issue](https://github.com/pacocoursey/dusk/issues/new?title=Icon%20Request:) with the title `Icon Request: <app name>`, a link to the application, an image of the logo, and someone will design it!

If you have already designed the icon yourself, please [open a pull request](https://github.com/pacocoursey/Dusk/pulls) with the title `Add Icon: <app name>` after adding the `.svg` file to the `svg/` folder, and listing the icon in the table at the bottom of the README.

### Design Guidelines

Dusk icons aim to replicate the design of application icons with a single, defining element that is easily recognizable in any colorway. For example, the Safari application icon can be identified based solely on the compass needle. Please see the [template files](https://github.com/pacocoursey/Dusk/tree/master/templates) to design your own icon.

Many application icons are sufficiently minimal and do not need modification. In the case of a complex design, please try to simplify it to a single design element.

### Format

Dusk icons are defined as SVG files.

- Use a circle of radius `256px` (height and width of `512px`).
- Center the design element within the circle.
- Constrain the design element to a max height/width of `255px` (this limit is flexible, the size of the design element should feel natural and comparable to other icons).
- Prefer a stroke-width of `20px` (but try match existing icons).
- Tilted design elements should have a rotation of `9deg`.

Icons that include text should use [Gilroy Extra Bold](https://www.tinkov.info/gilroy.html).

After completing the design, export it to an svg file and minimize it using:

```bash
$ yarn build
# or
$ npm run build
```

## Pull Requests

Pull requests for new features, bug fixes, and improvements are welcome and appreciated.
