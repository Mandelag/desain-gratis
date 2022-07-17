import {MyContext} from '../components/header';
import Header from '../components/header';
import {MDCTabBar} from '@material/tab-bar';
import { useContext, useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import profilePic from '../public/profpic.jpg';

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
    useEffect(() => {
        ctx.changeTitle("Experiences");
      }, [ctx.title])
  
  return (
    <div className={`${styles["tight-layout"]}`}>
    <div className="mdc-layout-grid__inner" style={{gap: '0px', padding: '0px', margin: '0px'}}>
        <div className="mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-12-desktop">

        </div>
        <div className={`mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-3-desktop ${styles.container}`}>
            <div className="mdc-layout-grid">
                <div className="mdc-layout-grid__inner">
                    <div className="mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-12-desktop">
                        <Image src={profilePic} width="150px" height="150px" alt="profile picture"/>
                        <h2 className={`mdc-typography--caption`}>Keenan Mandela Gebze</h2>
                        <a href="https://www.linkedin.com/in/keenan-gebze/" target="_blank"><p className={`mdc-typography--caption`}>Linkedin</p></a>
                        <a href="https://www.github.com/mandelag" target="_blank"><p className={`mdc-typography--caption`}>Github</p></a>
                        <hr />
                        <p className="mdc-typography--caption">This site is currently under development! <br />Many information are not yet complete.</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-9-desktop mdc-theme--surface	 mdc-theme--on-surface">


          {/* <div className={`mdc-tab-bar`} role="tablist" ref={ref}>
            <div className="mdc-tab-scroller">
                <div className="mdc-tab-scroller__scroll-area">
                    <div className="mdc-tab-scroller__scroll-content">
                        <button className={`mdc-tab`} role="tab" tabIndex={0}>
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
                        <button className={`mdc-tab`} role="tab" tabIndex={1}>
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
            </div> */}


                <div className="mdc-layout-grid">   
                    <div className="mdc-layout-grid__inner">
                        <div className="mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-12-desktop">

                    <p className="mdc-typography--headline6">Tokopedia</p>
                    <p className="mdc-typography--caption">
                        PT. Tokopedia <br />
                        Back End Software Engineer <br />
                        Home Recommendation and Personalization <br />
                        (2019 - current) <br />
                    </p>
                    <p className="mdc-typography--body1">
                        Tokopedia is the biggest online market place in Indonesia. <br />
                    </p>
                    <ul>
                        <li className="mdc-typography--caption">Maintain and develop Tokopedia's high RPS personalization service and data pipelines</li>
                        <li className="mdc-typography--caption">Do research and routinely share knowledge with other team members</li>
                        <li className="mdc-typography--caption">So many more...</li>
                    </ul>

                    <p className="mdc-typography--headline6">Bahasa.ai </p>
                    <p className="mdc-typography--caption">
                        PT. Antares Global Teknologi <br />
                        Software Engineer <br />
                        (2018 - 2019) <br />
                    </p>
                    <p className="mdc-typography--body1">
                    Bahasa.ai is a company that build, develop, and train chat bots using AI/ML/NLP algorithm.
                    It helps people to interact with technologies more easily.
                    </p>
                    <ul>
                        <li className="mdc-typography--caption">Responsible in designing, planning, and delivering Bahasa.ai analytics dashboard</li>
                    </ul>

                    <p className="mdc-typography--headline6">esri</p>
                    <p className="mdc-typography--caption">
                        PT. Esri Indonesia <br />
                        Solutions Engineer <br />
                        (2017 - 2018) <br />
                    </p>
                    <p className="mdc-typography--body1">
                        Esri is the global market leader in geographic information system (GIS) software, location intelligence, and mapping
                        This company is the distributor of Esri products in Indonesia.
                    </p>
                    <ul>
                        <li className="mdc-typography--caption">Automate data management tasks and analysis using Python</li>
                        <li className="mdc-typography--caption">Provide training for python to users, do research, and sharing programming techniques with team</li>
                        <li className="mdc-typography--caption">Build various prototypes and analytical dashboards for various government body, and public and private companies</li>
                    </ul>
                   </div>
                   </div>
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