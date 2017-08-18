import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import ThemeProvider from '../../src/styles/ThemeProvider';
import { light as lightTheme } from '../../src/styles/themes';

const xsmall = '@media (max-width: 600px)';

const styles = ({ font, base, light, link, baseBackground, small, sidebarWidth }) => ({
  root: {
    color: base,
    backgroundColor: baseBackground,
  },
  header: {
    color: '#fff',
    backgroundColor: link,
  },
  bar: {
    display: 'flex',
    [xsmall]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  nav: {
    marginLeft: 'auto',
    marginRight: '-0.5em',
    [xsmall]: {
      margin: [[10, 0, 0]],
    },
  },
  headerLink: {
    '&, &:link, &:visited': {
      marginLeft: '0.5em',
      marginRight: '0.5em',
      fontFamily: font,
      color: '#efefef',
    },
    '&:hover, &:active': {
      color: '#fff',
      cursor: 'pointer',
    },
  },
  content: {
    maxWidth: 1000,
    padding: [[15, 30]],
    margin: [[0, 'auto']],
    display: 'block',
  },
  sidebarSpace: {
    marginLeft: sidebarWidth,
  },
  components: {
    overflow: 'auto', // To prevent the pane from growing out of the screen
  },
  footer: {
    display: 'block',
    color: light,
    fontFamily: font,
    fontSize: 12,
  },
  sidebar: {
    position: 'fixed',
    padding: 15,
    top: 0,
    bottom: 0,
    left: 0,
    display: 'block',
    background: '#dddddd',
    color: 'white',
    width: sidebarWidth,
    overflow: 'auto',
  },
});

export function StyleGuideRenderer({
  classes,
  title,
  homepageUrl,
  children,
  toc,
  hasSidebar,
}) {
  const sidebar = hasSidebar ?
    <div className={classes.sidebar}><div>{title}</div>{toc}</div> :
    null;
  return (
    <ThemeProvider theme="light">
      <div>
        {sidebar}
        <header className={classes.header}>
          <div className={classes.content}>
            <div className={classes.bar}>
              <nav className={classes.nav}>
                <a className={classes.headerLink} href="https://github.com/mirainc/mira-elements">GitHub</a>
              </nav>
            </div>
          </div>
        </header>
        <main className={`${classes.content} ${classes.sidebarSpace}`}>
          {children}
          <footer className={classes.footer}>
            <div>&copy; Mira</div>
          </footer>
        </main>
      </div>
    </ThemeProvider>
  );
}

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Styled(styles)(StyleGuideRenderer);
