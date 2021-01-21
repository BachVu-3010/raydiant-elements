import * as React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles, createStyles } from '../../../../styles';
import { Theme } from '../../../../theme';
import InputHelperText from '../../../../core/InputHelperText';
import InputLabel from '../../../../core/InputLabel';
import Select from '../../../../core/Select';
import ActionBar from '../../../../core/ActionBar/v2';
import ManageMultipleIcon from '../../../../icons/ManageMultiple';
import * as P from '../../../PresentationTypes';

interface ThemeInputProps {
  label: string;
  value: string;
  themes: P.Theme[];
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
  onEdit: (value: string) => void;
  onManage: () => void;
  onAdd: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      marginBottom: theme.spacing(1),
    },
  }),
);

const ThemeInput: React.SFC<ThemeInputProps> = ({
  label,
  value,
  themes,
  helperText,
  error,
  disabled,
  onChange,
  onEdit,
  onManage,
  onAdd,
}) => {
  const classes = useStyles();

  const theme = themes.find(pl => pl.id === value);
  // Assume the theme was assigned by an admin if there is a theme id but we can't
  // find it in the current user's themes. This is a workaround, ideally the API would return
  // the basic information about the assigned theme if the current user doesn't have access to it.
  const isAdminAssigned = value && !theme;

  const options = themes
    .filter(t => !t.resource.deletedAt)
    .map(t => ({
      value: t.id,
      name: t.name,
    }));

  const selectedThemeId = value || (options[0] ? options[0].value : '');

  return (
    <div>
      <InputLabel error={error} disabled={disabled}>
        {label}
      </InputLabel>

      <ActionBar className={classes.actions}>
        <ActionBar.Action
          icon={<EditIcon />}
          onClick={() => onEdit(selectedThemeId)}
        />
        <ActionBar.Action icon={<ManageMultipleIcon />} onClick={onManage} />
        <ActionBar.Action icon={<AddCircleIcon />} onClick={onAdd} />
      </ActionBar>

      <Select
        fullWidth
        value={selectedThemeId}
        onChange={onChange}
        disabled={disabled}
        native={true}
      >
        {isAdminAssigned && (
          <option value={value}> Administrator assigned theme</option>
        )}
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </Select>

      {helperText && (
        <InputHelperText indent error={error} disabled={disabled}>
          {helperText}
        </InputHelperText>
      )}
    </div>
  );
};

export default ThemeInput;
