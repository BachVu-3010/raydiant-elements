### Styles

```js
<Column>
  <Text>Here is some text</Text>
  <Text muted>Here is some muted text</Text>
  <Text small>Here is some small text</Text>
  <Text strikethrough>Here is some strikethrough text</Text>
  <Text center>Here is some center text</Text>
  <Text muted small strikethrough center>
    Here is some muted small strikethrough center text
  </Text>
</Column>
```

### Wrapping

```js
<Column>
  <Text>
    Here is some text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.
  </Text>
  <Text nowrap>
    Here is some nowrap text. Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.
  </Text>
  <Text ellipsis>
    Here is some ellipsis text. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
    officia deserunt mollit anim id est laborum.
  </Text>
</Column>
```

### Editable

```js
initialState = {
  text: 'Here is some text',
  title: 'Title',
};

<Column>
  <Text editable value={state.text} onChange={text => setState({ text })} />

  <Title>
    <Text
      editable
      value={state.title}
      onChange={title => setState({ title })}
    />
  </Title>
</Column>;
```
