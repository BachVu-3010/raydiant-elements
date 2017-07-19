## Installation
Mira Elements can be installed via npm:
```bash
npm install --save mira-elements
```

### Dependencies

#### Fonts
Mira Elements requires the Roboto font. You can download Roboto with the correct font weights [here](https://fonts.google.com/?selection.family=Roboto:300,400,500).

#### React & ReactDOM
Mira Elements does not come bundled with React or ReactDOM but require both to function. You can install them via npm:
```bash
npm install --save react react-dom
```

## Component Usage
Example:
```jsx
import React from 'react';
import { Button } from 'mira-elements';

class MyComponent extends React.Component {
  /* methods & things */
  render() {
    return (
      <div>
        {/* some stuff */}
        <Button {...buttonProps} />
      </div>
    )
  }
}
```
