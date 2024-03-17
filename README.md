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

Import YMD UI SCSS in the `src/index.js` file:

```js
import 'ymd-ui/dist/css/ymd-ui.scss';
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

#### Props

```md
- className: string
- style: object
- children: React.ReactNode
- variant: string ('text' | 'filled' | 'outlined')
- color: string ('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'body')
- size: string ('medium' | 'small' | 'large')
- fullWidth: boolean
- type: string ('button' | 'submit' | 'reset')
- onClick: function
- href: string
```

---

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

### From Elements

All form elements accept the following props. In addition, some elements have their own specific props. These props are listed under their respective headings.

```md
- name: string
- label: string
- helperText: string
- onChange: function
- onBlur: function
- value: string
- placeholder: string
- pattern: string
```

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
import { CustomColor } from 'ymd-ui';

const [value, setValue] = useState('');

<CustomColor
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
import { CustomPassword } from 'ymd-ui';

const [value, setValue] = useState('');

<CustomPassword
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
import { CustomPhone } from 'ymd-ui';

const [value, setValue] = useState('');

<CustomPhone
  name={'phone_input'}
  label={'Phone'}
  onChange={(e) => setValue(e.target.value)}
  onBlur={(e) => console.log(e.target.value)}
  value={value}
  placeholder={'+90 555 555 __ __'}
  pattern={'+90 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}'}
/>;
```

#### Checkbox

Checkbox has it own props. These are;

```md
- name: string
- label: string
- helperText: string
- onChange: function
- value: string
- options: [
    {
        label: string
        value: string
        checked: boolean
    }
  ];
```

```js
import React, { useState } from 'react';
import { CustomCheckbox } from 'ymd-ui';

const [value, setValue] = useState();

<CustomCheckbox
  name={'checkbox'}
  label={'Checkbox'}
  value={value}
  onChange={(e) => console.log(e.value)}
  options={[
    {
      label: 'Checkbox 1',
      value: 'check_1',
      checked: false,
    },
    {
      label: 'Checkbox 2',
      value: 'check_2',
      checked: true,
    },
  ]}
/>;
```

#### Radio

Radio has it own props. These are;

```md
- name: string
- label: string
- helperText: string
- onChange: function
- value: string
- options: [
    {
        label: string
        value: string
        checked: boolean
    }
  ];
```

```js
import React, { useState } from 'react';
import { CustomRadio } from 'ymd-ui';

const [value, setValue] = useState();

<CustomRadio
  name={'radio'}
  label={'Radio'}
  value={value}
  onChange={(e) => console.log(e.value)}
  options={[
    {
      label: 'Radio 1',
      value: 'option_1',
      checked: false,
    },
    {
      label: 'Radio 2',
      value: 'option_2',
      checked: true,
    },
  ]}
/>;
```

#### Select

Select has it own props. These are;

```md
- placeHolder: string
- options: [
    {
        value: string;
        label: string;
    }
  ]
- isMulti: boolean
- isSearchable: boolean
- onChange: function;
- align: string
```

```js
import React, { useState } from 'react';
import { CustomSelect } from 'ymd-ui';

const [options, setOptions] = useState([
    {
      label: "Option 1",
      value: "opt1",
    },
    {
      label: "Option 2",
      value: "opt2",
    },
    {
      label: "Option 3",
      value: "opt3",
    },
])

const handleChangeSelect = (e) => {
    console.log(e)
}

<CustomSelect
    options={options}
    placeHolder='Please select...'
    onChange={(e) => handleChangeSelect(e)}
    align='buttom'
    isSearchable
    isMulti
/>;
```

Now you are ready to use the imported YMD UI components within your component hierarchy defined in the render method.

### Want to contribute?

You can read and follow our [CONTRIBUTING.md](CONTRIBUTING.md) and report it using
[GitHub Issues](https://github.com/yagizmdemir/ymd-ui/issues)! for reporting bugs, suggesting enhancements, bugfixes, new features and extras are welcome.
