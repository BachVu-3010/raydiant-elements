import svgClassListShim from './shims/svgClassList';
import App from './components/App';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Switch from './components/Switch';
import Button from './components/Button';
import TextField from './components/TextField';
import NumberField from './components/NumberField';
import SelectField from './components/SelectField';
import ListField from './components/ListField';
import FileField from './components/FileField';
import DatePicker from './components/DatePicker';
import TimePicker from './components/TimePicker';
import * as Typography from './components/Typography';
import Flex from './components/Flex';
import Column from './components/Column';
import Row from './components/Row';
import Dialog from './components/Dialog';
import DialogContent from './components/DialogContent';
import DialogTitle from './components/DialogTitle';
import DialogActions from './components/DialogActions';
import CircularProgress from './components/CircularProgress';
import ThemeProvider from './styles/ThemeProvider';
import SvgIcon from './components/SvgIcon';
import Icon from './components/Icon';
import AlertIcon from './components/AlertIcon';
import SuccessIcon from './components/SuccessIcon';
import PopoverAnchor from './components/PopoverAnchor';
import Popover from './components/Popover';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import PresentationBuilderForm from './components/Presentation/PresentationBuilderForm';
import PresentationBuilderPreview from './components/Presentation/PresentationBuilderPreview';
import PresentationPreview from './components/Presentation/PresentationPreview';
import Breadcrumbs from './components/Breadcrumbs';
import Breadcrumb from './components/Breadcrumb';

import './components/hacks/ie.css';

svgClassListShim();

module.exports = {
  App,
  Checkbox,
  Radio,
  Switch,
  Button,
  Typography,
  TextField,
  NumberField,
  SelectField,
  FileField,
  DatePicker,
  TimePicker,
  ListField,
  Flex,
  Column,
  Row,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  ThemeProvider,
  CircularProgress,
  SvgIcon,
  Icon,
  AlertIcon,
  SuccessIcon,
  PopoverAnchor,
  Popover,
  Tabs,
  Tab,
  PresentationBuilderForm,
  PresentationBuilderPreview,
  PresentationPreview,
  Breadcrumbs,
  Breadcrumb,
};
