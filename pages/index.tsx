// import Head from 'next/head';

import '@material/typography/dist/mdc.typography.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/theme/dist/mdc.theme.css';
import { TopAppBar } from './upload';
import styles from '../styles/index.module.scss';
import {useCallback, useState} from 'react';
import Head from 'next/head';

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
  }
]

const IndexPage = () => {
  const [presetIndex, setPresetIndex] = useState(0);
  const [body, setBody ] = useState(null);
  const ref = useCallback((node) => {
    if (node !== null) {
        // const t = new MDCTopAppBar(node);
        // console.log(`JIJII ${t} ${node}`);
        setBody(node);
    }
  }, []);

  const changeTheme = () => {
      setPresetIndex(idx => ++idx%presets.length);
  }

  if (body!== null) {
    const preset = presets[presetIndex%presets.length];
    // body.style.setProperty('color', 'var(--mdc-theme-on-primary, black)');  
    body.style.setProperty('--mdc-theme-primary', preset.primary);
    body.style.setProperty('--mdc-theme-on-primary', preset.onPrimary);
  }

  return (

    <body ref={ref}>
      <Head>
        <meta name="theme-color" content={presets[presetIndex].primary} />
      </Head>
    <TopAppBar title="Home">
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className={`mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-8-desktop ${styles.container}`}>
                <h1 className={`mdc-typography--headline2`} >
                  Welcome to my blog
                </h1>
                <div className="mdc-touch-target-wrapper" onClick={changeTheme}>
                  <button className="mdc-button mdc-button--touch mdc-button mdc-button--raised">
                    <span className="mdc-button__ripple"></span>
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
    </TopAppBar>
    </body>
  )
}

export default IndexPage;