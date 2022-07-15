import { ReactNode, useCallback, useRef, useState } from 'react';
import {MDCTopAppBar, MDCShortTopAppBarFoundation, MDCTopAppBarAdapter} from '@material/top-app-bar';
// import styles from '../styles/upload.module.scss';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/theme/dist/mdc.theme.css';

import styles from '../styles/index.module.scss';

const UploadPage = () => {
    return (
        <>
            <TopAppBar title="Webp Converter">     
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis rhoncus lectus sit amet malesuada. Aliquam ut posuere diam, varius consectetur nulla. Morbi bibendum elit in rutrum efficitur. Aliquam tempor, est eget tincidunt ullamcorper, erat nisi rutrum lorem, in varius risus enim vitae lorem. Ut sit amet mauris eu libero vulputate fringilla. Donec posuere turpis ut velit imperdiet, ultrices cursus leo pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sed feugiat diam.
<br /><br /><br />
Cras ante magna, tempus quis vehicula vitae, porta vel orci. Sed nec vestibulum odio, in varius velit. Nulla facilisi. Nam ullamcorper diam a massa venenatis ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla laoreet vestibulum ex, quis placerat risus porta eu. Donec at orci a quam egestas sodales vitae sed odio. In ante est, pharetra ac auctor nec, accumsan eu lacus. Duis malesuada, sem in tempus lacinia, ligula lectus dictum risus, id auctor lacus quam eu lorem. Aenean ornare libero lacus, a tempus tellus tincidunt eu. Nulla facilisi. Pellentesque porttitor vulputate efficitur. Cras placerat ante nec tortor pharetra, ac ultrices ligula convallis. Integer a nibh condimentum, tincidunt orci nec, malesuada libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sodales vel nunc at dictum.
<br /><br /><br />
Pellentesque non blandit nisi. Ut congue est eget lobortis aliquam. Nulla sit amet est lobortis, sollicitudin dui sit amet, malesuada magna. Duis egestas magna erat, et bibendum ex commodo vitae. Fusce ac suscipit mi, id sagittis nunc. Cras egestas lectus sollicitudin neque vehicula egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ac lorem magna.
<br /><br /><br />
Nulla eleifend ligula hendrerit, aliquet nulla sed, imperdiet felis. Cras sagittis felis diam, id commodo libero tincidunt vel. Integer a est varius nibh commodo malesuada feugiat et est. Pellentesque tincidunt tincidunt scelerisque. Cras finibus eros in dui malesuada, sed dignissim nisl tempus. Nunc consectetur, libero id luctus aliquam, odio elit consectetur massa, id sagittis nulla enim ut orci. Sed semper vehicula massa nec gravida. Ut consectetur tristique neque. In eu scelerisque erat, quis fermentum nibh. Nam suscipit vehicula odio ut pellentesque.
<br /><br /><br />
Pellentesque sit amet cursus lorem, ut pellentesque justo. Vestibulum quis laoreet metus. Proin non ante eget elit accumsan vestibulum. Cras sed cursus quam, in laoreet dui. Vivamus scelerisque ullamcorper leo sit amet posuere. Donec a risus faucibus, scelerisque mi ut, bibendum erat. Mauris lobortis euismod ipsum, nec efficitur dui gravida eu. Mauris eget lorem non dolor imperdiet mollis. In sit amet neque non lacus dictum aliquam id id diam. Ut hendrerit aliquet nibh, a laoreet diam ornare nec. Fusce scelerisque orci augue, nec aliquet felis sagittis ac. Mauris id nisl nec sapien ullamcorper blandit eget at felis. Aliquam at est convallis, dignissim lacus ac, elementum libero. Phasellus dictum dictum purus, laoreet malesuada ipsum mollis ut. Etiam pharetra facilisis commodo. Nam lacinia arcu volutpat feugiat tempor.            </TopAppBar>
<br /><br /><br />
            <ButtonIcon icon="favorite"/>
        </>
    )
}

type ButtonIconProps = {
    icon?: String,
    actionItem?: boolean,
    onClick?: () => void,
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

type TopAppBarProps = {
    children?: ReactNode
    title?: string
    onMenu?: () => void,
}
export const FixedTopAppBar = ({children, title = ""}: TopAppBarProps) => {    
    const ref = useCallback((node) => {
        if (node !== null) {
            // const t = new MDCTopAppBar(node);
            // console.log(`JIJII ${t} ${node}`);
            node.style.setProperty('--mdc-theme-primary', 'white');
            node.style.setProperty('--mdc-theme-on-primary', 'black');
            node.style.setProperty('color', 'var(--mdc-theme-on-primary, black)');
        }
    }, []);

    return (
    <>
<header ref={ref}>
  <div className="mdc-top-app-bar__row">
    <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <ButtonIcon icon="expand_more" actionItem/>
      <span className="mdc-top-app-bar__title">{title}</span>
    </section>
    <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          {/* <ButtonIcon icon="more_vert" actionItem/> */}
    </section>
  </div>
</header>
        <main>
            {children}
        </main>
    </>
    )
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


export default UploadPage;