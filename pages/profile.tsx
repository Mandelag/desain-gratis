import {MyContext} from '../components/header';
import Header from '../components/header';
import {MDCTabBar} from '@material/tab-bar';
import { useContext, useEffect, useCallback, useState } from 'react';

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

import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";
import "@material/tab/dist/mdc.tab.css";

const CVPage = () => {
    const ctx = useContext(MyContext);

    const [body, setBody ] = useState(null);
    const ref = useCallback((node) => {
        if (node !== null) {
            const t = new MDCTabBar(node);
            setBody(t);
        }
      }, []);
    
    useEffect(() => {
        ctx.changeTitle("Profile & CV");
      }, [ctx.title])
  
  return (
    <div className={`${styles["tight-layout"]}`}>
    <div className="mdc-layout-grid__inner" style={{gap: '0px', padding: '0px', margin: '0px'}}>
        <div className="mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-12-desktop">
        <div className="mdc-tab-bar" role="tablist" ref={ref}>
                <div className="mdc-tab-scroller">
                    <div className="mdc-tab-scroller__scroll-area">
                        <div className="mdc-tab-scroller__scroll-content">
                            <button className="mdc-tab" role="tab" tabIndex={0}>
                                <span className="mdc-tab__content">
                                    <span className="mdc-tab__icon material-symbols-outlined" aria-hidden="true">favorite</span>
                                    <span className="mdc-tab__text-label">Overview</span>
                                </span>
                                <span className="mdc-tab-indicator">
                                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                </span>
                                <span className="mdc-tab__ripple"></span>
                                <div className="mdc-tab__focus-ring"></div>
                            </button>
                            <button className="mdc-tab" role="tab" tabIndex={1}>
                                <span className="mdc-tab__content">
                                    <span className="mdc-tab__icon material-symbols-outlined" aria-hidden="true">work</span>
                                    <span className="mdc-tab__text-label">Projects</span>
                                </span>
                                <span className="mdc-tab-indicator ">
                                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                </span>
                                <span className="mdc-tab__ripple"></span>
                                <div className="mdc-tab__focus-ring"></div>
                            </button>
                            <button className="mdc-tab" role="tab"tabIndex={2}>
                                <span className="mdc-tab__content">
                                    <span className="mdc-tab__icon material-symbols-outlined" aria-hidden="true">article</span>
                                    <span className="mdc-tab__text-label">Papers &amp; Book</span>
                                </span>
                                <span className="mdc-tab-indicator ">
                                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                </span>
                                <span className="mdc-tab__ripple"></span>
                                <div className="mdc-tab__focus-ring"></div>
                            </button>
                            <button className="mdc-tab" role="tab" tabIndex={3}>
                                <span className="mdc-tab__content">
                                    <span className="mdc-tab__icon material-symbols-outlined" aria-hidden="true">workspace_premium</span>
                                    <span className="mdc-tab__text-label">Certification</span>
                                </span>
                                <span className="mdc-tab-indicator">
                                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                </span>
                                <span className="mdc-tab__ripple"></span>
                                <div className="mdc-tab__focus-ring"></div>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
          <div className={`mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-6-desktop ${styles.container}`}>
            <div className="mdc-layout-grid">
                <h2 className={`mdc-typography--caption`}>Keenan Mandela Gebze</h2>
            </div>
          </div>
          <div className="mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-6-desktop mdc-theme--surface	 mdc-theme--on-surface">
                <div className="mdc-layout-grid">   
                <p className="mdc-typography--subtitle2">Software Engineer Tokopedia (2019 - current)</p>
                    <p className="mdc-typography--subtitle1"></p>
                    <p className="mdc-typography--subtitle1">Home Recommendation &amp; Personalization</p>
                    <p className="mdc-typography--body1">Responsible for maintaining Tokopedia's personalization service</p>
                </div>
                <div className="mdc-layout-grid">   
                <p className="mdc-typography--subtitle2">Software Engineer at PT. Antares Global Teknologi (2018 - 2019)</p>
                    <p className="mdc-typography--subtitle1"></p>
                    <p className="mdc-typography--subtitle1">Home Recommendation &amp; Personalization</p>
                    <p className="mdc-typography--body1">Responsible for maintaining Tokopedia's personalization service</p>
                </div>
                <div className="mdc-layout-grid">   
                <p className="mdc-typography--subtitle2">Solutions Engineer at Esri Indonesia (2017 - 2018)</p>
                    <p className="mdc-typography--subtitle1"></p>
                    <p className="mdc-typography--subtitle1">Home Recommendation &amp; Personalization</p>
                    <p className="mdc-typography--body1">Responsible for maintaining Tokopedia's personalization service</p>
                </div>

            </div>
          </div>
        </div>
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