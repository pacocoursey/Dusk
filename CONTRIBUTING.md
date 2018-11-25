# Contributing Guidelines

Thanks for your interest in contributing to Dusk! 🖤

## Icon Requests

Want to see an icon for your favorite app? Want to offer an alternative icon? I'd love to include it.

Please [create an issue](https://github.com/pacocoursey/dusk/issues/new?title=Icon%20Request:) with the title `Icon Request: <app name>`. If you have already designed the icon, please include a screenshot and a link to the SVG of the icon. If you have not, that's OK! Include some details and a link to the application and someone else will design it.

> Because Dusk icons span multiple projects (website, CLI, and react package), it is preferred that you open an issue rather than a pull request. This way, it can be added to each package reliably.

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

After completing the svg file, install [svgo](https://github.com/svg/svgo) and run `svgo <icon>.svg` to minimize it and standardize the format.

```
$ [sudo] npm install -g svgo
```

## Pull Requests

Pull requests for new features, bug fixes, and improvements are welcome and appreciated.
