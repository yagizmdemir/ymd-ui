## Getting Started
Follow the [create-react-app instructions](https://create-react-app.dev/docs/getting-started) to get started and then follow the [commands below for YMD UI](#adding-ymd-ui).

### Create React App

 ```
npx create-react-app my-app
cd my-app/
npm start

```
or,  if npx (Node >= 6 and npm >= 5.2 ) not available 

```
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
``` 

Then open [http://localhost:3000/](http://localhost:3000/) to see your app. The initial structure of your app is setup. Next, let's [add reactstrap and bootstrap](#adding-ymd-ui).

### Adding YMD UI

Install YMD UI from NPM:

```
npm i ymd-ui
```

Import YMD UI CSS in the ```src/index.js``` file:

```js
import 'ymd-ui/dist/css/ymd-ui.css'
```

Import required reactstrap components within ```src/App.js``` file or your custom component files:

```js
import { CustomTextField } from 'ymd-ui';
```

Now you are ready to use the imported YMD UI components within your component hierarchy defined in the render method.
<!-- 
## About the Project

This library contains React Bootstrap components that favor composition and control. The library does not depend on jQuery or Bootstrap javascript. However, [Poppers.js](https://popper.js.org/) via [react-popper](https://github.com/popperjs/react-popper) is relied upon for advanced positioning of content like Tooltips, Popovers, and auto-flipping Dropdowns.

There are a few core concepts to understand in order to make the most out of this library.

1. Your content is expected to be composed via props.children rather than using named props to pass in Components.

    ```js
    // Content passed in via props
    const Example = (props) => {
      return (
        <p>This is a tooltip <TooltipTrigger tooltip={TooltipContent}>example</TooltipTrigger>!</p>
      );
    }

    // Content passed in as children (Preferred)
    const PreferredExample = (props) => {
      return (
        <p>
          This is a <a href="#" id="TooltipExample">tooltip</a> example.
          <Tooltip target="TooltipExample">
            <TooltipContent/>
          </Tooltip>
        </p>
      );
    }
    ```

2. Attributes in this library are used to pass in state, conveniently apply modifier classes, enable advanced functionality (like tether), or automatically include non-content based elements.

    Examples:

    - `isOpen` - current state for items like dropdown, popover, tooltip
    - `toggle` - callback for toggling `isOpen` in the controlling component
    - `color` - applies color classes, ex: `<Button color="danger"/>`
    - `size` - for controlling size classes. ex: `<Button size="sm"/>`
    - `tag` - customize component output by passing in an element name or Component
    - boolean based props (attributes) when possible for alternative style classes or `visually-hidden` content -->


### Want to contribute?
You can read and follow our [CONTRIBUTING.md](CONTRIBUTING.md) and report it using
[GitHub Issues](https://github.com/yagizmdemir/ymd-ui/issues)! for reporting bugs, suggesting enhancements, bugfixes, new features and extras are welcome.


## Contributors ✨
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://yagizmdemir.com/"><img src="https://avatars.githubusercontent.com/u/87898868?v=4?s=100" width="100px;" alt="Yağız Mehmet Demir"/><br /><sub><b>Yağız Mehmet Demir</b></sub></a><br /><a href="#infra-yagizmdemir" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/yagizmdemir/ymd-ui/commits?author=yagizmdemir" title="Code">💻</a> <a href="https://github.com/yagizmdemir/ymd-ui/issues?q=author%3Ayagizmdemir" title="Bug reports">🐛</a> <a href="https://github.com/yagizmdemir/ymd-ui/commits?author=yagizmdemir" title="Documentation">📖</a> <a href="#example-yagizmdemir" title="Examples">💡</a> <a href="#maintenance-yagizmdemir" title="Maintenance">🚧</a> <a href="https://github.com/yagizmdemir/ymd-ui/commits?author=yagizmdemir" title="Tests">⚠️</a></td>
    </tr>
  </tbody>
</table>

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!