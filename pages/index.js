// import Head from 'next/head';

import '@material/typography/dist/mdc.typography.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

const IndexPage = () => {
  return (
    <>
    <body>
    <h1 className="mdc-typography--headline1">
      Welcome
    </h1>

      <p className="mdc-typography--body1">
        "Desain gratis" is an Indonesian word for free design. It is a pun on "desain grafis" (graphic design). 
        Indonesian use the phrase to refer a common phenomenon in which (graphic) design job doesn't pay enough / or not even paid.
        In this site, however, I use it to explore <a href="https://github.com/material-components">this cool Material Components library</a> &amp; material design in general.
      </p>
      <p className="mdc-typography--body1">
        As of this writing, the Material Design library is under active development by Google engineers. Many Material 2 component are yet to be implemented in the library (bottom sheets, etc.).
        In addition to that, they also aim to implement Material 3 standard. Which is crazy lot of work. As a user for this library, I can only cheers.. or use them to develop website as an early adopter,
         or raise annoying bugs if any (I have <a href="https://github.com/material-components/material-components-web/issues/7644">one already</a>).
      </p>
      <p className="mdc-typography--body1">
        In the same spirit for the exciting commentary with above <a href="https://github.com/material-components"> Material Components library</a> above, 
        I'll also share any other exciting open source library that caught my interest! So stay tuned.
      </p>
      </body>
    </>
  )
}

const TopAppBar = () => {
  return (
    <>

    </>
  )
}

export default IndexPage;