### SelectionInput
```js
const SelectionInput = require('./inputs/SelectionInput/SelectionInput.tsx').default;
initialState = {
  disabled: false,
  values: [],
  noRightLabelValues: [],
  inputState: {},
};

<App>
  <Column>
      <Row>
        <OneThirdLayout.ColumnSmall>
          <SelectionInput
            multiple
            label="Multiple selection - no right Label - no thumbnail"
            value={state.noRightLabelValues}
            options={[
                { value: 'shortLabels', label: 'label'},
                { value: 'optNoLabel' },
                { name: 'Label', value: 'opt' },
                { name: 'long long long long long long long long labellllll', value: 'optLongLabel' },
                { name: 'Short label', value: 'optShortLabel' },
            ]}
            onChange={values => {
              console.log(values);
              setState({ noRightLabelValues: values });
            }}
            strings={[]}
            disabled={state.disabled}
          />
        </OneThirdLayout.ColumnSmall>
        <OneThirdLayout.ColumnSmall>
          <SelectionInput
            multiple
            label="Multiple selection with right Label"
            value={state.values}
            options={[
                { value: 'shortLabels', label: 'label', rightLabel: 'RL' },
                { value: 'optNoLabels' },
                { name: 'No right label', value: 'optNoRightLabel' },
                { value: 'optNoLabel', rightLabel: 'No label' },
                { name: 'long long long long long long long long labellllll', value: 'optLongLabel', rightLabel: 'RL' },
                { name: 'Short label', value: 'optShortLabel', rightLabel: 'long right label withOverflowHidden' },
                { name: 'Long long long long long longlong long labellllll', value: 'optLongLabels', rightLabel: 'long right label withOverflowHidden' },
            ]}
            onChange={values => {
              console.log(values);
              setState({ values });
            }}
            strings={[]}
            disabled={state.disabled}
          />
        </OneThirdLayout.ColumnSmall>
        <OneThirdLayout.ColumnSmall>
          <SelectionInput
            multiple
            searchable
            sortable={[
              { label: 'Default', by: 'default' },
              { label: 'Name', by: 'label' },
              { label: 'Tag', by: 'rightLabel' },
            ]}
            label="Searchable multiple"
            value={state.values}
            options={[
                { value: 'shortLabels', label: 'label', rightLabel: 'RL' },
                { value: 'optNoLabels' },
                { name: 'No right label', value: 'optNoRightLabel' },
                { value: 'optNoLabel', rightLabel: 'No label' },
                { name: 'long long long long long long long long labellllll', value: 'optLongLabel', rightLabel: 'RL' },
                { name: 'Short label', value: 'optShortLabel', rightLabel: 'long right label withOverflowHidden' },
                { name: 'Long long long long long longlong long labellllll', value: 'optLongLabels', rightLabel: 'long right label withOverflowHidden' },
            ]}
            onChange={values => {
              console.log(values);
              setState({ values });
            }}
            strings={[]}
            disabled={state.disabled}
          />
        </OneThirdLayout.ColumnSmall>
      </Row>      
      <Row>
        <OneThirdLayout.ColumnSmall>
          <SelectionInput
            multiple
            selectable
            label="Multiple selectable selection"
            value={state.values}
            options={[
                { value: 'optNoLabels' },
                { name: 'No right label', value: 'optNoRightLabel' },
                { value: 'optNoLabel', rightLabel: 'No label' },
                { name: 'long long long long long long long long labellllll', value: 'optLongLabel', rightLabel: 'RL' },
                { name: 'Short label', value: 'optShortLabel', rightLabel: 'long right label withOverflowHidden' },
                { name: 'Long long long long long longlong long labellllll', value: 'optLongLabels', rightLabel: 'long right label withOverflowHidden' },
            ]}
            onChange={values => {
              console.log(values);
              setState({ values });
            }}
            inputState={state.inputState}
            onInputStateChange={(state) => {
              console.warn('onInputStateChange state', state);
              setState({ inputState: state });
            }}
            strings={[]}
            disabled={state.disabled}
          />
        </OneThirdLayout.ColumnSmall>
        <OneThirdLayout.ColumnSmall>
          <SelectionInput
            multiple
            searchable
            selectable
            sortable={[
              { label: 'Default', by: 'default' },
              { label: 'Name', by: 'label' },
              { label: 'Tag', by: 'rightLabel' },
            ]}
            label="Multiple selectable searchable"
            value={state.values}
            options={[
                { value: 'optNoLabels' },
                { name: 'No right label', value: 'optNoRightLabel' },
                { value: 'optNoLabel', rightLabel: 'No label' },
                { name: 'long long long long long long long long labellllll', value: 'optLongLabel', rightLabel: 'RL' },
                { name: 'Short label', value: 'optShortLabel', rightLabel: 'long right label withOverflowHidden' },
                { name: 'Long long long long long longlong long labellllll', value: 'optLongLabels', rightLabel: 'long right label withOverflowHidden' },
            ]}
            onChange={values => {
              console.log(values);
              setState({ values });
            }}
            inputState={state.inputState}
            onInputStateChange={(state) => {
              console.warn('onInputStateChange state', state);
              setState({ inputState: state });
            }}
            strings={[]}
            disabled={state.disabled}
          />
        </OneThirdLayout.ColumnSmall>
      </Row>
  </Column>
  <Switch
    label="Disable"
    checked={state.disabled}
    onChange={disabled => setState({ disabled })}
  />
</App>;
```
