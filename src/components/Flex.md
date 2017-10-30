## Example layouts

### Login page

```jsx
<div style={{border: '1px solid #999', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}}>
  {/*
    noSpace to keep the two sides nestled up beside each other.
    alignItems="stretch" to make the two sides fill available space.
  */}
  <Row noSpace alignItems="stretch">
    {/* flex="0 300px" locks the left column at 300px wide */}
    <div style={{flex: "0 300px", padding: '24px 32px'}}>
      <Column>
        {/* send the logo all the way to the left, the button all the way to the right */}
        <Row noSpace alignItems="center" justifyContent="space-between">
          <span>Logo</span>
          <span style={{textAlign: 'right'}}><Button>Get Started</Button></span>
        </Row>
        <div>
          <Title>Here is a title</Title>
          <p>Here is some text that is very interesting to read, and you're very interested right now.</p>
        </div>
        <TextField type="email" label="Email"/>
        <TextField type="password" label="Password"/>
        <Button fullWidth color="progress">Log In</Button>
      </Column>
    </div>

    <div style={{flex: '1 1 auto', background:"black", backgroundImage:'radial-gradient(circle, #dd0000, #dddd00, #00dd00, #00dddd, #0000dd)'}}></div>

  </Row>
</div>
```