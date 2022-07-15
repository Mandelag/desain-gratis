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
import Link from 'next/link';

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

const CVPage = () => {
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
      <TopAppBar title="Profile & CV" onMenu={toggleMenu}/>
      <aside className={`${styles["navbar"]} mdc-drawer mdc-drawer--modal mdc-top-app-bar--fixed-adjust`} ref={refNavbar} >
        <div className="mdc-drawer__content">
          <nav className="mdc-deprecated-list" onClick={toggleMenu}>
          <Link className="mdc-deprecated-list-item" href="/">
            <a className="mdc-deprecated-list-item" href="#" aria-current="page" tabIndex={0}>
              <span className="mdc-deprecated-list-item__ripple"></span>  
              <i className="material-symbols-outlined mdc-deprecated-list-item__graphic" aria-hidden="true">home</i>
              <span className="mdc-deprecated-list-item__text">Home</span>
            </a>
            </Link>
            <Link className="mdc-deprecated-list-item" href="/profile">
            <a className="mdc-deprecated-list-item">
              <span className="mdc-deprecated-list-item__ripple"></span>
                <i className="material-symbols-outlined mdc-deprecated-list-item__graphic" aria-hidden="true">person</i>
              <span className="mdc-deprecated-list-item__text">Profile &amp; CV</span>
            </a>
            </Link>
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
          <div className={`mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-desktop ${styles.container}`}>
            <h2 className={`mdc-typography--caption`}>Keenan Mandela Gebze</h2>
          </div>
          <div className="mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-8-desktop mdc-theme--surface	 mdc-theme--on-surface">
                <h1 className={`mdc-typography--subtitle2`} >
                  Professional Experiences
                </h1>

                  <p className="mdc-typography--headline5">
                    Tokopedia (2019 - current)
                  </p>
                  <p className="mdc-typography--body1">
                    Personalization &amp; Recommendation
                  </p>

                  <p className="mdc-typography--headline5">
                    PT. Antares Global Teknologi (2018 - 2019)
                  </p>
                  <p className="mdc-typography--body1">
                    Full-stack Software Engineer
                  </p>

                  <p className="mdc-typography--headline5">
                    PT. Esri Indonesia (2017 - 2018)
                  </p>
                  <p className="mdc-typography--body1">
                    Solutions Engineer
                  </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default CVPage;