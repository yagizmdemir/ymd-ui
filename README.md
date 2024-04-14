#### \*\*This library on beta version

## Getting Started

Follow the [create-react-app instructions](https://create-react-app.dev/docs/getting-started) to get started and then follow the [commands below for YMD UI](#adding-ymd-ui).

### Create React App

```
npx create-react-app my-app
cd my-app/
npm start
```

or, if npx (Node >= 6 and npm >= 5.2 ) not available

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
npm install --save ymd-ui
```

Create ```_variables.scss``` and customize to yourself.
```scss
$colors: (
    primary: (
        main: #fd4f00,
        light: #ff8308,
        gradient: linear-gradient(270deg, #fd4f00 0%, #ff8308 100%),
        contrast: #ffffff
    ),
    secondary: (
        main: #9ca1ae,
        light: #e6e7ea,
        gradient: linear-gradient(270deg, #9ca1ae, #d2d2d2),
        contrast: #ffffff
    ),
    info: (
        main: #08aeea,
        light: #17cec4,
        gradient: linear-gradient(270deg, #08aeea, #17cec4),
        contrast: #ffffff
    ),
    success: (
        main: #59a822,
        light: #d5e9c7,
        gradient: linear-gradient(270deg, #59a822, #9eda74),
        contrast: #ffffff
    ),
    danger: (
        main: #e20714,
        light: #f7c1c4,
        gradient: linear-gradient(270deg, #e20714, #fa656d),
        contrast: #ffffff
    ),
    purple: (
        main: #870eff,
        light: #efdeff,
        gradient: linear-gradient(270deg, #870eff, #c587ff),
        contrast: #ffffff
    ),
    body: (
        main: #282828,
        light: #3C3C3C,
        gradient: linear-gradient(270deg, #282828 0%, #3C3C3C 100%),
        contrast: #ffffff
    )
);

$typography: (
    h1: (
        min: 26px,
        preferred: 31px,
        max: 36px
    ),
    h2: (
        min: 24px,
        preferred: 28px,
        max: 32px
    ),
    h3: (
        min: 22px,
        preferred: 25px,
        max: 28px
    ),
    h4: (
        min: 20px,
        preferred: 23px,
        max: 26px
    ),
    h5: (
        min: 18px,
        preferred: 21px,
        max: 24px
    ),
    h6: (
        min: 16px,
        preferred: 17px,
        max: 18px
    ),
    p: (
        min: 14px,
        preferred: 14px,
        max: 14px,
        lead: (
            min: 16px,
            preferred: 16px,
            max: 16px
        ),
        sm: (
            min: 12px,
            preferred: 12px,
            max: 12px
        )
    ),
    span: (
        min: 14px,
        preferred: 14px,
        max: 14px,
        lead: (
            min: 16px,
            preferred: 16px,
            max: 16px
        ),
        sm: (
            min: 12px,
            preferred: 12px,
            max: 12px
        )
    ),
    small: (
        min: 12px,
        preferred: 12px,
        max: 12px
    ),
    sub: (
        min: 12px,
        preferred: 12px,
        max: 12px
    )
);

$breakpoints: (
    mobile: 320,
    tablet: 767,
    desktop: 1023
);

$row-gap: (
    desktop: 15,
    tablet: 10,
    mobile: 8
);

$font-family: Montserrat, sans-serif;
$shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
$radius: 3px;
$columns: 12;

```
Create ```global.scss```
```scss
@import "variables";
@import "~/node_modules/ymd-ui/dist/scss/ymd-ui.scss";
```

Import YMD UI SCSS in the `src/index.js` file:

```js
import '/path-to-scss-file/global.scss';
```

Import required YMD UI components within `src/App.js` file or your custom component files:

### Button

```js
import { Button } from 'ymd-ui';

<Button
  type="button"
  color="primary"
  variant="text"
  size="medium"
  fullWidth
  href="/about"
  onClick={() => {
    console.log('Hello World!');
  }}
>
  My Button
</Button>;
```

### Container, Grid & GridItem

```js
import { Container, Grid, GridItem } from 'ymd-ui';

<Container>
  <Grid>
    <GridItem col={12} sm={12} md={6} lg={4}>
      Col 1
    </GridItem>
    <GridItem col={12} sm={12} md={6} lg={4}>
      Col 2
    </GridItem>
    <GridItem col={12} sm={12} md={6} lg={4}>
      Col 3
    </GridItem>
    <GridItem col={12} sm={12} md={6} lg={4}>
      Col 4
    </GridItem>
  </Grid>
</Container>;
```

---

## From Elements

#### Basic Input

```js
import React, { useState } from 'react';
import { CustomInput } from 'ymd-ui';

const [value, setValue] = useState('');

<CustomInput
  name={'custom_input'}
  label={'Custom Input'}
  helperText={'Custom Input Helper Text'}
  onChange={(e) => setValue(e.target.value)}
  onBlur={(e) => console.log(e.target.value)}
  value={value}
  placeholder={'I am placeholder'}
  type={'text'}
  pattern={'[a-Z]9'}
/>;
```

#### Color Input

```js
import React, { useState } from 'react';
import { ColorInput } from 'ymd-ui';

const [value, setValue] = useState('');

<ColorInput
  name={'color_input'}
  label={'Color Input'}
  helperText={'Color Input Helper Text'}
  onChange={(e) => setValue(e.target.value)}
  onBlur={(e) => console.log(e.target.value)}
  value={value}
  pattern={'[a-Z]{9}'}
/>;
```

#### Password Input

```js
import React, { useState } from 'react';
import { PasswordInput } from 'ymd-ui';

const [value, setValue] = useState('');

<PasswordInput
  name={'password_input'}
  label={'Password'}
  helperText={<a href="/forget-password">Forget Password?</a>}
  onChange={(e) => setValue(e.target.value)}
  onBlur={(e) => console.log(e.target.value)}
  value={value}
  placeholder={'•••••••••'}
/>;
```

#### Phone Input

```js
import React, { useState } from 'react';
import { PhoneInput } from 'ymd-ui';

const [value, setValue] = useState('');

<PhoneInput
  name={'phone_input'}
  label={'Phone'}
  onChange={(e) => setValue(e.target.value)}
  onBlur={(e) => console.log(e.target.value)}
  value={value}
  placeholder={'+90 555 555 __ __'}
  pattern={'+90 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}'}
/>;
```

#### Autocomplete

```js
import React, { useState } from 'react';
import { Autocomplete, AutocompleteItem } from "ymd-ui";

<Autocomplete onChange={(e) => console.log(e)} label="Search Value">
    <AutocompleteItem value="value1">Option 1</AutocompleteItem>
    <AutocompleteItem value="value2">Option 2</AutocompleteItem>
    <AutocompleteItem value="value3">Option 3</AutocompleteItem>
</Autocomplete>
```


#### Select

```js
import React, { useState } from 'react';
import { Select, SelectOption } from "ymd-ui";

<Select onChange={(e) => console.log(e)} isMulti placeHolder="Please select">
  <SelectOption label="Option 1" value="value1">Option 1</SelectOption>
  <SelectOption label="Option 2" value="value2">Option 2</SelectOption>
  <SelectOption label="Option 3" value="value3">Option 3</SelectOption>
</Select>
```

#### Modal

```js
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalContent} from "ymd-ui";

const [showModal, setShowModal] = useState(false);

<Button onClick={() => setShowModal(true)}>Show Modal</Button>
<Modal onClose={() => setShowModal(false)} isOpen={showModal}>
    <ModalHeader>Modal header</ModalHeader>
    <ModalContent>
        Test modal
    </ModalContent>
</Modal>
```

#### Tooltip

```js
import React, { useState } from 'react';
import { Tooltip } from "ymd-ui";

<Tooltip placement="bottom" content="Lorem ipsum dolor sit amet">
    HOVER ME!
</Tooltip>
```

#### Skeleton

```js
import React, { useState } from 'react';
import { Skeleton } from "ymd-ui";

<Skeleton>Sekeleton Test</Skeleton>
```
#### ClickOutside

```js
import React, { useState } from 'react';
import { ClickOutside } from "ymd-ui";

<ClickOutside onClickOutside={(e) => console.log(e)}>
    Click outside
</ClickOutside>
```

Now you are ready to use the imported YMD UI components within your component hierarchy defined in the render method.

### Want to contribute?

You can read and follow our [CONTRIBUTING.md](CONTRIBUTING.md) and report it using
[GitHub Issues](https://github.com/yagizmdemir/ymd-ui/issues)! for reporting bugs, suggesting enhancements, bugfixes, new features and extras are welcome.
