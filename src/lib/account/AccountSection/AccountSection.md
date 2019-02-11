```js
<AccountSection title="Contact Information">
  <Column>
    <TextField
      label="Email Address"
      value="john.doe@example.com"
      disabled
      helperText={
        <span>
          Contact{' '}
          <Link href="mailto:support@getmira.com">support@getmira.com</Link> to
          change your email
        </span>
      }
    />
    <TextField label="Display Name" value="John Doe" />
    <Link>Reset Password</Link>
    <Button disabled={true} type="submit" color="progress" label="Save" />
  </Column>
</AccountSection>
```

### With Cards

```js
<AccountSection title="Contact Information">
  <Card color="grey">
    <Card.Content>
      <Column>
        <TextField
          label="Email Address"
          value="john.doe@example.com"
          disabled
          helperText={
            <span>
              Contact{' '}
              <Link href="mailto:support@getmira.com">support@getmira.com</Link>{' '}
              to change your email
            </span>
          }
        />
        <TextField label="Display Name" value="John Doe" />
      </Column>
    </Card.Content>
    <Card.Actions>
      <Link>Reset Password</Link>
      <Spacer />
      <Button disabled={true} type="submit" color="progress" label="Save" />
    </Card.Actions>
  </Card>
</AccountSection>
```
