// import Head from 'next/head';

import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDrawer} from "@material/drawer";
import Head from 'next/head';
import Link from 'next/link';
import React, {useCallback, useState,  ReactNode} from 'react';

import styles from '../styles/index.module.scss';
import '@material/typography/dist/mdc.typography.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/drawer/dist/mdc.drawer.css';
import '@material/list/dist/mdc.list.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/theme/dist/mdc.theme.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/theme/dist/mdc.theme.css'

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

export const MyContext = React.createContext({
    changeTitle: (newTitle: string) => {},
    title: "",
    toggleTheme: () => {},
});



const IndexPage = ({children}) => {
  const [presetIndex, setPresetIndex] = useState(0);
  const [title, setTitle] = useState("Home");

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


  const toggleTheme = () => {
      setPresetIndex(idx => ++idx%presets.length);
  }

  const changeTitle = (title: string) => {
    setTitle(title);
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
      <TopAppBar title={title} onMenu={toggleMenu}/>
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
            <Link className="mdc-deprecated-list-item" href="/blog">
            <a className="mdc-deprecated-list-item" href="#">
              <span className="mdc-deprecated-list-item__ripple"></span>
              <i className="material-symbols-outlined mdc-deprecated-list-item__graphic" aria-hidden="true">notes</i>
              <span className="mdc-deprecated-list-item__text">Blog</span>
            </a>
            </Link>
          </nav>
        </div>
      </aside>
      <div className={`mdc-drawer-scrim ${styles['navbar']}`}></div>
      <div className="mdc-top-app-bar--fixed-adjust">
      <div className="mdc-layout-grid mdc-top-app-bar--fixed-adjust">        
            {/* https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children */}
            <MyContext.Provider value={{
                    changeTitle: changeTitle,
                    toggleTheme: toggleTheme,
                    title: title,
                }}>
          {children}
          </MyContext.Provider>
      </div>
    </div>
  </body>
  )
}

IndexPage.contextType = MyContext;

type ButtonIconProps = {
    icon?: String,
    actionItem?: boolean,
    onClick?: () => void,
}

type TopAppBarProps = {
    children?: ReactNode
    title?: string
    onMenu?: () => void,
}

export const TopAppBar = ({onMenu = () => {}, title = ""}: TopAppBarProps) => {    
    const ref = useCallback((node) => {
        if (node !== null) {
            const t = new MDCTopAppBar(node);
        }
    }, []);

    return (
    <>
    {/* mdc-top-app-bar--fixed */}
<header ref={ref} className="mdc-top-app-bar" style={{zIndex: 8}}> 
  <div className="mdc-top-app-bar__row">
    <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <ButtonIcon icon="menu" actionItem onClick={onMenu} />
      <span className="mdc-top-app-bar__title mdc-theme--on-primary">{title}</span>
    </section>
    <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
      <ButtonIcon icon="share" actionItem/>
      <ButtonIcon icon="help" actionItem/>
      <ButtonIcon icon="more_vert" actionItem/>
    </section>
  </div>
</header>
        {/* <main className="mdc-top-app-bar--fixed-adjust"> */}
            {/* {children} */}
        {/* </main> */}
    </>
    )
}

export const ButtonIcon = ({icon = "", actionItem = false, onClick = () => {}}: ButtonIconProps) => {
    return (
    <>
    <div className={`mdc-touch-target-wrapper ${styles.ripples}`} onClick={onClick}>
        <button className={`mdc-icon-button  ${actionItem ? "mdc-top-app-bar__action-item" : ""}`}>
            {/* <div className="mdc-icon-button__ripple" style={{fill: 'red'}}></div> */}
            {/* <div className={`mdc-ripple-surface ${styles.ripples}`}></div> */}
            <span className="mdc-icon-button__focus-ring"></span>
            {/* <span className={"material-symbols-outlined"}>favorite</span> */}
            <span className="material-symbols-outlined">{icon}</span>
        </button>
    </div>
    </>
    )
}


export default IndexPage;