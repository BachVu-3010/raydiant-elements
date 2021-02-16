import * as React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, createStyles } from '../../../../styles';
import { Theme } from '../../../../theme';
import InputHelperText from '../../../../core/InputHelperText';
import InputLabel from '../../../../core/InputLabel';
import Select from '../../../../core/Select';
import ActionBar from '../../../../core/ActionBar/v2';
import ManageMultipleIcon from '../../../../icons/ManageMultiple';

interface ThemeInputProps {
  label: string;
  value: string;
  themeOptions: React.ReactNode;
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  addDisabled?: boolean;
  addDisabledMessage?: React.ReactNode;
  onChange: (value: string) => void;
  onEdit?: (value: string) => void;
  onManage?: () => void;
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
  themeOptions,
  helperText,
  error,
  disabled,
  addDisabled,
  addDisabledMessage,
  onChange,
  onEdit,
  onManage,
  onAdd,
}) => {
  const classes = useStyles();

  return (
    <div>
      <InputLabel error={error} disabled={disabled}>
        {label}
      </InputLabel>

      <ActionBar className={classes.actions}>
        <ActionBar.Action
          icon={<EditIcon />}
          disabled={!onEdit}
          onClick={() => onEdit && onEdit(value)}
        />
        <ActionBar.Action icon={<ManageMultipleIcon />} onClick={onManage} />

        {addDisabled ? (
          <Tooltip title={addDisabledMessage} arrow>
            <span>
              <ActionBar.Action
                icon={<AddCircleIcon />}
                onClick={onAdd}
                disabled={addDisabled}
              />
            </span>
          </Tooltip>
        ) : (
          <ActionBar.Action icon={<AddCircleIcon />} onClick={onAdd} />
        )}
      </ActionBar>

      <Select
        fullWidth
        value={value}
        onChange={onChange}
        disabled={disabled}
        native={false}
      >
        {themeOptions}
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
