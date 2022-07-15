// import Head from 'next/head';


import { TopAppBar } from './upload';
import {useCallback, useState} from 'react';
import Head from 'next/head';
import {MDCDrawer, MDCModalDrawerFoundation, MDCDrawerAdapter} from "@material/drawer";
import Link from 'next/link';

import Header from '../components/header';

import '@material/typography/dist/mdc.typography.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/drawer/dist/mdc.drawer.css';
import '@material/list/dist/mdc.list.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/theme/dist/mdc.theme.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import styles from '../styles/index.module.scss';

const CVPage = () => {
  return (
    <body>
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
    </body>
  )
}

CVPage.getLayout = (page) => {
    return (
        <Header>
            {page}
        </Header>        
    )
}


export default CVPage;