import {MyContext} from '../components/header';
import Header from '../components/header';
import { useContext, useEffect } from 'react';

// import Head from 'next/head';
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
import '@material/card/dist/mdc.card.css';
import '@material/list/dist/mdc.list.css';

import styles from '../styles/index.module.scss';
import Link from 'next/link';

const ProfileCard = () => {
  return (
    <>
      <div className="mdc-card">
        {/*   style={{padding: '16px'}} */}
        <div className="mdc-card__primary-action"> 
          <ul className="mdc-list">
            <li className="mdc-list-item mdc-list-item--with-leading-avatar mdc-list-item--with-two-lines" tabIndex={0}>
              {/* <span className="mdc-list-item__ripple"></span> */}
              <span className="mdc-list-item__start">
                <Image
                  src={profilePic}
                  objectFit="cover"
                  width="40dp"
                  height="40dp"
                  alt="Hadji Ali"
                  style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    overflow: 'hidden',
                  }}
                />
              </span>
              <span className="mdc-list-item__content" id="gg">
                {/* <span className="mdc-list-item__overline-text">Overline</span> */}
                <span className="mdc-list-item__primary-text">Keenan Mandela Gebze</span>
                <span className="mdc-list-item__secondary-text">Software Engineer (Golang)</span>
              </span>
            </li>
          </ul>
          <div style={{paddingLeft: '16px', paddingRight: '16px', paddingBottom: '16px'}}>
            <p className="mdc-typography--body2" style={{padding: 0, margin: 0}}>Graduated as a scientist at Uni. Currently living my dream, working, learning, inside <a href="https://www.tokopedia.com" style={{textDecoration: 'none'}}>Tokopedia</a> for the last 3 years.</p>
            <p className="mdc-typography--body2">Will write about papers, cool libraries, open source tech, and other random things in this blog. Feel free to reach me in the links below.</p>
          </div>  
    <div className="mdc-card__ripple"></div>
    </div>
  <div className="mdc-card__actions">
    <div className="mdc-card__action-buttons">
      <Link href="https://www.linkedin.com/in/keenan-gebze/" passHref>
      <a target="_blank" style={{textDecoration: 'none'}}>
        <button className="mdc-button mdc-card__action mdc-card__action--button">
          <div className="mdc-button__ripple"></div>
          <span className="mdc-button__label">Linkedin</span>
        </button>
      </a>
      </Link>
      <Link href="https://github.com/mandelag" passHref>
      <a target="_blank" style={{textDecoration: 'none'}}>
      <button className="mdc-button mdc-card__action mdc-card__action--button">
        <div className="mdc-button__ripple"></div>
        <span className="mdc-button__label">Github</span>
      </button>
      </a>
      </Link>
      <Link href="profile">
      <button className="mdc-button mdc-card__action mdc-card__action--button">
        <div className="mdc-button__ripple"></div>
        <span className="mdc-button__label">CV</span>
      </button>
      </Link>
    </div>
  </div>
</div>
    </>
  )
}
  
const IndexPage = () => {
    const ctx = useContext(MyContext);
    useEffect(() => {
      ctx.changeTitle("Home");
    }, [ctx.title])
    
    return (
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
            <div className={`mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-8-desktop ${styles.container}`}>
                  <h1 className={`mdc-typography--headline2`} >
                    Welcome to my blog
                  </h1>
                  <div className="mdc-touch-target-wrapper" onClick={ctx.toggleTheme}>
                    <button className="mdc-button mdc-button--touch mdc-button mdc-button--raised">
                      <span className="mdc-button__ripple mdc-ripple-surface--accent"></span>
                      <span className="mdc-button__touch"></span>
                      <i className="material-symbols-outlined mdc-button__icon" aria-hidden="true">palette</i>
                      <span className="mdc-button__label">TOGGLE THEME</span>
                    </button>
                  </div>
            </div>

            <div className="mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-desktop mdc-theme--surface	 mdc-theme--on-surface">
                <div>
                  <ProfileCard />
                </div>


                <div style={{display: 'flex', alignContent: 'center', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', padding: '16px'}}>
                  <span className="material-symbols-outlined" aria-hidden="true" style={{padding: '12px', color: '#FFD600'}}>warning</span><br />
                  <p className="mdc-typography--caption">
                    This website is used for exploring many kind of technologies.<br />
                  </p>
                </div>


                  <p className="mdc-typography--body1">
                      "Desain gratis" is an Indonesian word for free design. It is a pun on "desain grafis" (graphic design). 
                    </p>
  
                    <p className="mdc-typography--body1">
                    Indonesian use the phrase to refer a common phenomenon in which graphic design job doesn't pay enough / or not even paid.
                    </p>
  
                    <p className="mdc-typography--body1">
                    In this site however, I use it to explore material design and <a href="https://github.com/material-components" target="_blank">this cool Material Components library</a>.
                    </p>
  
                    <p className="mdc-typography--body1">
                      As of this writing, the Material Design library is under active development by Google engineers.
                      It is crazy lot of work. 
                    </p>
                    <p className="mdc-typography--body1">
                     As a user for this library, I can only cheers.. or use them to develop website as an early adopter,
                      or raise annoying bugs if any (I have <a href="https://github.com/material-components/material-components-web/issues/7644" target="_blank">one already</a>).
                    </p>
                    <p className="mdc-typography--body1">
                      In the same spirit for the exciting commentary with above <a href="https://github.com/material-components" target="_blank"> Material Components library</a> above, 
                      I'll also share any other exciting open source library that caught my interest! So stay tuned.
                    </p>
                    <p className="mdc-typography--caption">
                      Regards, <br /><br />Keenan Gebze <br />
                    </p>
                    <div>
                  </div>
              </div>

            </div>
          </div>
    )
  }

IndexPage.getLayout = (page) => {
    return (
        <Header>
            {page}
        </Header>        
    )
}

// IndexPage.contextType = MyContext;

export default IndexPage;