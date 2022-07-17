import Header from '../components/header';
import '@material/typography/dist/mdc.typography.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';

const Blog = () => {    
    return (
        <>
              <div className="mdc-layout-grid">
                <div className="mdc-layout-grid__inner">
                     <div className={`mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-12-desktop`}>
                        <p className="mdc-typography--body1">
                            Soon I'll be writing here!<br /><br />
                            But for now, you can visit my old blog <a href="https://mandelag.blogspot.com" target="_blank">here</a>.
                        </p>
                    </div>
                </div>
            </div>  
       </>
    );
}; 

Blog.getLayout = (page) => {
    return (
        <Header>
            {page}
        </Header>        
    )
}


export default Blog;
