import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from './SvgIcon';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** The icon name */
  icon: PropTypes.string.isRequired,
  /** Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
};

const defaultProps = {
  className: '',
  titleAccess: '',
};

const icons = {
  add: {
    path:
      'M17.07 17.07A9.93 9.93 0 0 1 10 20a9.93 9.93 0 0 1-7.07-2.93A9.93 9.93 0 0 1 0 10c0-2.67 1.04-5.182 2.93-7.07A9.93 9.93 0 0 1 10 0c2.67 0 5.182 1.04 7.07 2.93A9.93 9.93 0 0 1 20 10a9.93 9.93 0 0 1-2.93 7.07zM15.892 4.109A8.272 8.272 0 0 0 10 1.667a8.272 8.272 0 0 0-5.892 2.441A8.274 8.274 0 0 0 1.667 10c0 2.226.866 4.318 2.441 5.893A8.275 8.275 0 0 0 10 18.332a8.275 8.275 0 0 0 5.892-2.44A8.276 8.276 0 0 0 18.333 10a8.274 8.274 0 0 0-2.441-5.892zM15 10.833h-4.167V15H9.167v-4.167H5V9.167h4.167V5h1.666v4.167H15v1.666z',
    viewBox: '0 0 20 20',
  },
  alert: {
    path:
      'M10,14.75 C9.30964406,14.75 8.75,14.1903559 8.75,13.5 C8.75,12.8096441 9.30964406,12.25 10,12.25 C10.6903559,12.25 11.25,12.8096441 11.25,13.5 C11.25,14.1903559 10.6903559,14.75 10,14.75 Z M10,5 L10,5 C10.5522847,5 11,5.44771525 11,6 L11,10 C11,10.5522847 10.5522847,11 10,11 C9.44771525,11 9,10.5522847 9,10 L9,6 L9,6 C9,5.44771525 9.44771525,5 10,5 L10,5 Z',
    viewBox: '0 0 20 20',
  },
  checkmark: {
    path:
      'M6.31113699 8.94105816 5.08886263 10.1226018 9.01971495 14.1889603 15.6497199 7.39359281 14.4329245 6.20640757 9.02535896 11.748846z',
    viewBox: '0 0 20 20',
  },
  defaultContent: {
    path:
      'M16.3 5.2H3.7a.9.9 0 1 1 0-1.8h12.6a.9.9 0 1 1 0 1.8zM14.55 0a.85.85 0 0 1 0 1.7h-9.1a.85.85 0 1 1 0-1.7h9.1zM2 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 1.7a.3.3 0 0 0-.3.3v9a.3.3 0 0 0 .3.3h16a.3.3 0 0 0 .3-.3V9a.3.3 0 0 0-.3-.3H2zm6.3 2.1l4.62 2.639-4.62 2.64V10.8z',
    viewBox: '0 0 20 20',
  },
  edit: {
    path:
      'M1.95,16.3922272 L1.95,18.05 L3.60777279,18.05 L13.8877756,7.76999722 L12.2300028,6.11222444 L1.95,16.3922272 Z M0.25,15.6880642 L12.2300028,3.70806138 L16.2919386,7.76999722 L4.31193584,19.75 L0.25,19.75 L0.25,15.6880642 Z M19.433169,4.62876684 L17.4509443,6.61099153 L13.3890085,2.54905569 L15.3712332,0.566830996 C15.7936745,0.144389668 16.4760797,0.144389668 16.898521,0.566830996 L19.433169,3.10147896 C19.8556103,3.52392029 19.8556103,4.20632551 19.433169,4.62876684 Z',
    viewBox: '0 0 20 20',
  },
  endDate: {
    path:
      'M2,4.7 C1.83431458,4.7 1.7,4.83431458 1.7,5 L1.7,18 C1.7,18.1656854 1.83431458,18.3 2,18.3 L18,18.3 C18.1656854,18.3 18.3,18.1656854 18.3,18 L18.3,5 C18.3,4.83431458 18.1656854,4.7 18,4.7 L2,4.7 Z M2,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,18 C20,19.1045695 19.1045695,20 18,20 L2,20 C0.8954305,20 1.3527075e-16,19.1045695 0,18 L0,5 C-1.3527075e-16,3.8954305 0.8954305,3 2,3 Z M1.65,8.7 L1.65,7 L18.35,7 L18.35,8.7 L1.65,8.7 Z M3.85000002,1 C4.31944207,1 4.70000005,1.38055797 4.70000005,1.85000002 L4.70000005,3.14999998 C4.70000005,3.61944203 4.31944207,4 3.85000002,4 C3.38055797,4 3,3.61944203 3,3.14999998 L3,1.85000002 L3,1.85000002 C3,1.38055797 3.38055797,1 3.85000002,1 Z M16.1500002,1 C16.6194423,1 17.0000002,1.38055797 17.0000002,1.85000002 L17.0000002,3.14999998 C17.0000002,3.61944203 16.6194423,4 16.1500002,4 C15.6805582,4 15.3000002,3.61944203 15.3000002,3.14999998 L15.3000002,1.85000002 L15.3000002,1.85000002 C15.3000002,1.38055797 15.6805582,1 16.1500002,1 Z M14,16.85 C12.4259885,16.85 11.15,15.5740115 11.15,14 C11.15,12.4259885 12.4259885,11.15 14,11.15 C15.5740115,11.15 16.85,12.4259885 16.85,14 C16.85,15.5740115 15.5740115,16.85 14,16.85 Z M14,15.15 C14.6351275,15.15 15.15,14.6351275 15.15,14 C15.15,13.3648725 14.6351275,12.85 14,12.85 C13.3648725,12.85 12.85,13.3648725 12.85,14 C12.85,14.6351275 13.3648725,15.15 14,15.15 Z',
    viewBox: '0 0 20 20',
  },
  group: {
    path:
      'M16,8.7 L16,11.7 C16,12.4179702 15.4179702,13 14.7,13 L5.7,13 L5.7,15.3 L18.3,15.3 L18.3,8.7 L16,8.7 Z M16,7 L18.7,7 C19.4179702,7 20,7.5820298 20,8.29999995 L20,15.7 C20,16.4179702 19.4179702,17 18.7,17 L5.29999995,17 C4.5820298,17 4,16.4179702 4,15.7 L4,13 L1.29999995,13 C0.582029804,13 8.79259844e-17,12.4179702 0,11.7 L0,4.29999995 C-8.79259844e-17,3.5820298 0.582029804,3 1.29999995,3 L14.7,3 C15.4179702,3 16,3.5820298 16,4.29999995 L16,7 Z M1.675,4.68690476 L1.675,11.3130952 L14.325,11.3130952 L14.325,4.68690476 L1.675,4.68690476 Z',
    viewBox: '0 0 20 20',
  },
  horizontalScreen: {
    path:
      'M2 6v12h20V6H2zm0-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
    viewBox: '0 0 24 24',
  },
  publish: {
    path:
      'M18.991 1.452c.012.025.017.05.024.076.02.06.03.12.033.183.001.03.003.056.001.085a.768.768 0 0 1-.041.195c-.008.021-.01.042-.02.063l-.004.018-7.915 16.563a.752.752 0 0 1-.678.429h-.009a.753.753 0 0 1-.678-.445l-2.687-5.97L1.39 9.533a.753.753 0 0 1 .066-1.35l16.552-7.128.016-.004c.018-.007.037-.009.056-.015A.757.757 0 0 1 18.282 1c.029 0 .055.002.083.005a.717.717 0 0 1 .182.037c.026.01.051.017.077.028a.755.755 0 0 1 .221.154h.002a.74.74 0 0 1 .144.228zm-8.58 15.07L15.821 5.2l-7.317 7.085 1.907 4.238zm-2.933-5.339l7.353-7.12L3.46 8.959l4.018 2.224z',
    viewBox: '0 0 20 20',
  },
  remove: {
    path:
      'M20 10a9.93 9.93 0 0 1-2.929 7.071A9.93 9.93 0 0 1 10.001 20a9.93 9.93 0 0 1-7.072-2.928A9.928 9.928 0 0 1 .002 10a9.93 9.93 0 0 1 2.927-7.071A9.933 9.933 0 0 1 10 0a9.93 9.93 0 0 1 7.07 2.928A9.93 9.93 0 0 1 20 10zM10 1.669a8.272 8.272 0 0 0-5.893 2.44A8.272 8.272 0 0 0 1.667 10c0 2.227.867 4.319 2.44 5.893a8.276 8.276 0 0 0 5.894 2.44 8.275 8.275 0 0 0 5.892-2.44A8.275 8.275 0 0 0 18.333 10c0-2.227-.867-4.32-2.44-5.894A8.274 8.274 0 0 0 10 1.667zm4.125 5.386L11.179 10l2.946 2.946-.59.59-.589.589L10 11.179l-2.946 2.946-.59-.59-.589-.589L8.821 10 5.875 7.054l.59-.59.589-.589L10 8.821l2.946-2.946 1.179 1.179z',
    viewBox: '0 0 20 20',
  },
  repeat: {
    path:
      'M16.5 9.96c0 2.858-1.922 5.414-4.674 6.213a.683.683 0 0 1-.189.027.648.648 0 0 1-.621-.443.62.62 0 0 1 .433-.778c2.209-.642 3.751-2.706 3.751-5.02 0-2.17-1.32-3.932-3.318-4.646l.65 1.247a.612.612 0 0 1-.291.837.671.671 0 0 1-.29.066.652.652 0 0 1-.582-.345l-1.3-2.496a.612.612 0 0 1 .29-.838l2.6-1.248a.662.662 0 0 1 .872.28.612.612 0 0 1-.29.837l-1.089.522c2.42.927 4.048 3.153 4.048 5.784zm-6.86 6.174l-2.6 1.248a.662.662 0 0 1-.29.066.652.652 0 0 1-.581-.345.612.612 0 0 1 .29-.837l1.088-.522C5.127 14.818 3.5 12.592 3.5 9.959c0-2.858 1.922-5.413 4.674-6.213a.654.654 0 0 1 .81.416.62.62 0 0 1-.433.778C6.342 5.583 4.8 7.646 4.8 9.96c0 2.17 1.32 3.934 3.319 4.647l-.65-1.248a.612.612 0 0 1 .29-.838.664.664 0 0 1 .873.28l1.3 2.496c.16.308.03.683-.291.837z',
    viewBox: '0 0 20 20',
  },
  time: {
    path:
      'M10,20 C4.4771525,20 -5.91645679e-31,15.5228475 -5.91645679e-31,10 C-5.91645679e-31,4.4771525 4.4771525,8.8817842e-16 10,8.8817842e-16 C15.5228475,8.8817842e-16 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z M10,18.3 C14.5839634,18.3 18.3,14.5839634 18.3,10 C18.3,5.41603658 14.5839634,1.7 10,1.7 C5.41603658,1.7 1.7,5.41603658 1.7,10 C1.7,14.5839634 5.41603658,18.3 10,18.3 Z M10.5164067,5.08942008 L10.5164067,10.1397056 L14.2428679,12.3885904 C14.6447908,12.6311471 14.7739826,13.1536012 14.5314258,13.5555241 C14.2888691,13.957447 13.7664151,14.0866388 13.3644921,13.8440821 L9.22721879,11.347276 C8.97225342,11.1934068 8.81640666,10.9173272 8.81640666,10.6195302 L8.81640666,5.08942008 C8.81640666,4.61997804 9.19696462,4.23942008 9.66640666,4.23942008 C10.1358487,4.23942008 10.5164067,4.61997804 10.5164067,5.08942008 Z',
    viewBox: '0 0 20 20',
  },
  scheduledContent: {
    path:
      'M2 4.2a.3.3 0 0 0-.3.3v13a.3.3 0 0 0 .3.3h16a.3.3 0 0 0 .3-.3v-13a.3.3 0 0 0-.3-.3H2zm0-1.7h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H2c-1.238 0-1.905-.667-2-2v-13a2 2 0 0 1 2-2zm-.35 5.7V6.5h16.7v1.7H1.65zM3.85.5c.47 0 .85.38.85.85v1.3a.85.85 0 0 1-1.7 0v-1.3c0-.47.38-.85.85-.85zm12.3 0c.47 0 .85.38.85.85v1.3a.85.85 0 1 1-1.7 0v-1.3c0-.47.38-.85.85-.85zM8.3 10.3l4.62 2.639-4.62 2.64V10.3z',
    viewBox: '0 0 20 20',
  },
  screenSettings: {
    path:
      'M10.15 16.25a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5zM4.547 4.407A7.908 7.908 0 0 1 8.108 2.35l.45-1.617A1 1 0 0 1 9.52 0h1.257a1 1 0 0 1 .964.732l.45 1.617a7.908 7.908 0 0 1 3.56 2.058l1.628-.42a1 1 0 0 1 1.116.468l.628 1.09a1 1 0 0 1-.152 1.2l-1.176 1.197c.176.657.27 1.346.27 2.058 0 .712-.094 1.401-.27 2.058l1.176 1.197a1 1 0 0 1 .152 1.2l-.628 1.09a1 1 0 0 1-1.116.468l-1.627-.42a7.908 7.908 0 0 1-3.562 2.058l-.449 1.617a1 1 0 0 1-.964.732H9.521a1 1 0 0 1-.964-.732l-.449-1.617a7.908 7.908 0 0 1-3.561-2.058l-1.627.42a1 1 0 0 1-1.116-.468l-.629-1.09a1 1 0 0 1 .152-1.2l1.176-1.197A7.927 7.927 0 0 1 2.233 10c0-.712.094-1.401.27-2.058L1.327 6.745a1 1 0 0 1-.152-1.2l.629-1.09a1 1 0 0 1 1.116-.468l1.627.42zm5.603 8.197a2.604 2.604 0 1 0 0-5.208 2.604 2.604 0 0 0 0 5.208z',
    viewBox: '0 0 20 20',
  },
  search: {
    path:
      'M10.7986327,11.0814755 C12.6731493,9.20695889 12.6731493,6.16776699 10.7986327,4.29325039 C8.92411611,2.41873379 5.88492421,2.41873379 4.01040761,4.29325039 C2.13589101,6.16776699 2.13589101,9.20695889 4.01040761,11.0814755 C5.88492421,12.9559921 8.92411611,12.9559921 10.7986327,11.0814755 Z M11.4005629,12.8147764 C8.85024231,14.8075144 5.15521031,14.6304412 2.80832608,12.283557 C0.269918182,9.74514912 0.269918182,5.62957675 2.80832608,3.09116886 C5.34673397,0.552760962 9.46230634,0.552760962 12.0007142,3.09116886 C14.3231885,5.41364316 14.5207534,9.05636692 12.5934088,11.6034593 L18.6518477,17.6618982 C18.9837934,17.9938439 18.9837934,18.5320341 18.6518477,18.8639797 C18.3199021,19.1959254 17.7817118,19.1959254 17.4497662,18.8639797 L11.4005629,12.8147764 Z',
    viewBox: '0 0 20 20',
  },
  startDate: {
    path:
      'M2,4.7 C1.83431458,4.7 1.7,4.83431458 1.7,5 L1.7,18 C1.7,18.1656854 1.83431458,18.3 2,18.3 L18,18.3 C18.1656854,18.3 18.3,18.1656854 18.3,18 L18.3,5 C18.3,4.83431458 18.1656854,4.7 18,4.7 L2,4.7 Z M2,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,18 C20,19.1045695 19.1045695,20 18,20 L2,20 C0.8954305,20 1.3527075e-16,19.1045695 0,18 L0,5 C-1.3527075e-16,3.8954305 0.8954305,3 2,3 Z M1.65,8.7 L1.65,7 L18.35,7 L18.35,8.7 L1.65,8.7 Z M3.85000002,1 C4.31944207,1 4.70000005,1.38055797 4.70000005,1.85000002 L4.70000005,3.14999998 C4.70000005,3.61944203 4.31944207,4 3.85000002,4 C3.38055797,4 3,3.61944203 3,3.14999998 L3,1.85000002 L3,1.85000002 C3,1.38055797 3.38055797,1 3.85000002,1 Z M16.1500002,1 C16.6194423,1 17.0000002,1.38055797 17.0000002,1.85000002 L17.0000002,3.14999998 C17.0000002,3.61944203 16.6194423,4 16.1500002,4 C15.6805582,4 15.3000002,3.61944203 15.3000002,3.14999998 L15.3000002,1.85000002 L15.3000002,1.85000002 C15.3000002,1.38055797 15.6805582,1 16.1500002,1 Z M6,16.85 C4.42598846,16.85 3.15,15.5740115 3.15,14 C3.15,12.4259885 4.42598846,11.15 6,11.15 C7.57401154,11.15 8.85,12.4259885 8.85,14 C8.85,15.5740115 7.57401154,16.85 6,16.85 Z M6,15.15 C6.63512746,15.15 7.15,14.6351275 7.15,14 C7.15,13.3648725 6.63512746,12.85 6,12.85 C5.36487254,12.85 4.85,13.3648725 4.85,14 C4.85,14.6351275 5.36487254,15.15 6,15.15 Z',
    viewBox: '0 0 20 20',
  },
  verticalScreen: {
    path:
      'M6 22h12V2H6v20zm-2 0V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z',
    viewBox: '0 0 24 24',
  },
};

/**
 * The Icon component contains the default icon library. It accepts the name of the icon
 * to render and the resulting icon can be used as is, or included as a child for other
 * components.
 */
const Icon = ({ className, icon, titleAccess }) => {
  const ic = icons[icon];

  return (
    <SvgIcon
      className={className}
      titleAccess={titleAccess}
      viewBox={ic.viewBox}
    >
      <path d={ic.path} />
    </SvgIcon>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
