// import Head from 'next/head';

import '@material/typography/dist/mdc.typography.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/drawer/dist/mdc.drawer.css';
import '@material/list/dist/mdc.list.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/theme/dist/mdc.theme.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';

import { TopAppBar } from './upload';
import styles from '../styles/index.module.scss';
import {useCallback, useState} from 'react';
import Head from 'next/head';
import {MDCDrawer, MDCModalDrawerFoundation, MDCDrawerAdapter} from "@material/drawer";

const presets = [
  {
    primary: 'black',
    onPrimary: 'white',
  },
  {
    primary: '#4527A0',
    onPrimary: 'white',
  },
  {
    primary: '#B2DFDB',
    onPrimary: '#212121',
  },
  {
    primary: '#ff8a80',
    onPrimary: 'black',    
  },
  {
    primary: '#3bcb96', // toped
    onPrimary: 'white',
  },
  {
    primary: '#1bc5f2', // trave
    onPrimary: 'white',
  },
  {
    primary: '#fd5f32', // sopi
    onPrimary: 'white',
  },

]

const IndexPage = () => {
  const [presetIndex, setPresetIndex] = useState(0);

  const [body, setBody ] = useState(null);
  const [navbar, setNavbar] = useState(null);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const ref = useCallback((node) => {
    if (node !== null) {
        // const t = new MDCTopAppBar(node);
        // console.log(`JIJII ${t} ${node}`);
        setBody(node);
    }
  }, []);


  const refNavbar = useCallback((node) => {
    if (node !== null) {
        // const t = new MDCTopAppBar(node);
        // console.log(`JIJII ${t} ${node}`);
        // MDCDrawer.attachTo(node);
        // const foundation = new MDCModalDrawerFoundation();
        // const adapeter = new MDCDrawerAdapter();
        const drawer = new MDCDrawer(node);
        // node.addEventListener('click', (event) => {
        //   console.log("HEHE", event); 
        //   drawer.open = false;
        // });
        drawer.open = false;
        setNavbar(drawer);
    }
  }, []);

  // const drawer = new MDCDrawer(navbar);
  // drawer.open = false;


  const changeTheme = () => {
      setPresetIndex(idx => ++idx%presets.length);
  }

  const toggleMenu = () => {
    if (navbar !== null) {
      navbar.open = !navbar.open;
    }  
  }

  // if (body!== null) {
  const preset = presets[presetIndex%presets.length];
  // body.style.setProperty('color', 'var(--mdc-theme-on-primary, black)');  
  body?.style.setProperty('--mdc-theme-primary', preset.primary);
  body?.style.setProperty('--mdc-theme-on-primary', preset.onPrimary);
  body?.style.setProperty('--mdc-theme-secondary', preset.onPrimary);
  body?.style.setProperty('--ripples-color', preset.onPrimary);
  // }

  return (
    <body ref={ref}>
      <Head>
        <meta name="theme-color" content={presets[presetIndex].primary} />
      </Head>
      <TopAppBar title="Home" onMenu={toggleMenu}/>
      <aside className={`${styles["navbar"]} mdc-drawer mdc-drawer--modal mdc-top-app-bar--fixed-adjust`} ref={refNavbar} >
        <div className="mdc-drawer__content">
          <nav className="mdc-deprecated-list" onClick={toggleMenu}>
            <a className="mdc-deprecated-list-item" href="#" aria-current="page" tabIndex={0}>
              <span className="mdc-deprecated-list-item__ripple"></span>  
              <i className="material-symbols-outlined mdc-deprecated-list-item__graphic" aria-hidden="true">home</i>
              <span className="mdc-deprecated-list-item__text">Home</span>
            </a>
            <a className="mdc-deprecated-list-item" href="#">
              <span className="mdc-deprecated-list-item__ripple"></span>
              <i className="material-symbols-outlined mdc-deprecated-list-item__graphic" aria-hidden="true">person</i>
              <span className="mdc-deprecated-list-item__text">Profile &amp; CV</span>
            </a>
            <a className="mdc-deprecated-list-item" href="#">
              <span className="mdc-deprecated-list-item__ripple"></span>
              <i className="material-symbols-outlined mdc-deprecated-list-item__graphic" aria-hidden="true">notes</i>
              <span className="mdc-deprecated-list-item__text">Blog</span>
            </a>
          </nav>
        </div>
      </aside>
      <div className={`mdc-drawer-scrim ${styles['navbar']}`}></div>
      <div className="mdc-top-app-bar--fixed-adjust">
      <div className="mdc-layout-grid mdc-top-app-bar--fixed-adjust">        
        <div className="mdc-layout-grid__inner">
          <div className={`mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-8-desktop ${styles.container}`}>
                <h1 className={`mdc-typography--headline2`} >
                  Welcome to my blog
                </h1>
                <div className="mdc-touch-target-wrapper" onClick={changeTheme}>
                  <button className="mdc-button mdc-button--touch mdc-button mdc-button--raised">
                    <span className="mdc-button__ripple mdc-ripple-surface--accent"></span>
                    <span className="mdc-button__touch"></span>
                    <span className="mdc-button__label">SUS BUTTON</span>
                  </button>
                </div>
          </div>
          <div className="mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-desktop mdc-theme--surface	 mdc-theme--on-surface">
                  <p className="mdc-typography--body1">
                    "Desain gratis" is an Indonesian word for free design. It is a pun on "desain grafis" (graphic design). 
                  </p>

                  <p className="mdc-typography--body1">
                  Indonesian use the phrase to refer a common phenomenon in which graphic design job doesn't pay enough / or not even paid.
                  </p>

                  <p className="mdc-typography--body1">
                  In this site, however, I use it to explore material design and <a href="https://github.com/material-components" target="_blank">this cool Material Components library</a>.
                  </p>

                  <p className="mdc-typography--body1">
                    As of this writing, the Material Design library is under active development by Google engineers. They have a lot to do!
                    Many material design component are not yet implemented by this library (bottom sheets, etc.). 
                    In addition to that, they also aim to implement Material 3 standard. It is crazy lot of work. 
                  </p>
                  <p className="mdc-typography--body1">
                   As a user for this library, I can only cheers.. or use them to develop website as an early adopter,
                    or raise annoying bugs if any (I have <a href="https://github.com/material-components/material-components-web/issues/7644" target="_blank">one already</a>).
                  </p>
                  <p className="mdc-typography--body1">
                    In the same spirit for the exciting commentary with above <a href="https://github.com/material-components" target="_blank"> Material Components library</a> above, 
                    I'll also share any other exciting open source library that caught my interest! So stay tuned.
                  </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default IndexPage;