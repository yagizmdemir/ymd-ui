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

Then open [http://localhost:3000/](http://localhost:3000/) to see your app. The initial structure of your app is setup. Next, let's [add YMD UI](#adding-ymd-ui).

### Adding YMD UI

Install YMD UI from NPM:

```
npm i ymd-ui
```

Import YMD UI SCSS in the ```src/index.js``` file:

```js
import 'ymd-ui/dist/css/ymd-ui.scss'
```

Import required YMD UI components within ```src/App.js``` file or your custom component files:

### Button

```js
import { Button } from "ymd-ui";

<Button type="button" color="primary" variant="text" size="medium" fullWidth href='/about' onClick={() => {console.log('Hello World!')}}>
    My Button
</Button>
```

#### Props
```md
- className: string,
- style: object,
- children: React.ReactNode,
- variant: string ('text' | 'filled' | 'outlined'),
- color: string ('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'body'),
- size: string ('medium' | 'small' | 'large'),
- fullWidth: boolean ,
- type: string ('button' | 'submit' | 'reset'),
- onClick: function,
- href: string
```

--------------

### Container, Grid & GridItem 

```js
import { Container, Grid, GridItem } from "ymd-ui";

<Container>
    <Grid>
        <GridItem col={12} sm={12} md={6} lg={4}> Col 1 </GridItem>
        <GridItem col={12} sm={12} md={6} lg={4}> Col 2 </GridItem>
        <GridItem col={12} sm={12} md={6} lg={4}> Col 3 </GridItem>
        <GridItem col={12} sm={12} md={6} lg={4}> Col 4 </GridItem>
    </Grid>
</Container>
```

Now you are ready to use the imported YMD UI components within your component hierarchy defined in the render method.

### Want to contribute?
You can read and follow our [CONTRIBUTING.md](CONTRIBUTING.md) and report it using
[GitHub Issues](https://github.com/yagizmdemir/ymd-ui/issues)! for reporting bugs, suggesting enhancements, bugfixes, new features and extras are welcome.
