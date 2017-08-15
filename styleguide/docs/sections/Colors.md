```jsx
const Palette = require('../../components/Palette').default;
const ThemeProvider = require('../../../src/styles/ThemeProvider');

<div>
{['primary', 'accent', 'error', 'grey'].map(intent => <div key={intent}><h3>{intent}</h3><Palette intent={intent}></Palette></div>)}
</div>
```