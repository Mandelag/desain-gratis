import { ReactNode, useCallback, useRef, useState } from 'react';

type BottomSheetType = {
    children: ReactNode
}

const BottomSheet = ({children}: BottomSheetType) => {
    return (
        <div style={{width: '100%'}}>
            <div style={{width: '100%', backgroundColor: 'pink',  height:'100vh'}}>
                {children}
            </div>
        </div>
    )
}

const BottomSheetDemo = () => {
    
    return (
        <>
        <main style={{height: '90vh', width: '100%', overflowY: 'scroll'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis rhoncus lectus sit amet malesuada. Aliquam ut posuere diam, varius consectetur nulla. Morbi bibendum elit in rutrum efficitur. Aliquam tempor, est eget tincidunt ullamcorper, erat nisi rutrum lorem, in varius risus enim vitae lorem. Ut sit amet mauris eu libero vulputate fringilla. Donec posuere turpis ut velit imperdiet, ultrices cursus leo pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sed feugiat diam.
            <br /><br /><br />
            Cras ante magna, tempus quis vehicula vitae, porta vel orci. Sed nec vestibulum odio, in varius velit. Nulla facilisi. Nam ullamcorper diam a massa venenatis ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla laoreet vestibulum ex, quis placerat risus porta eu. Donec at orci a quam egestas sodales vitae sed odio. In ante est, pharetra ac auctor nec, accumsan eu lacus. Duis malesuada, sem in tempus lacinia, ligula lectus dictum risus, id auctor lacus quam eu lorem. Aenean ornare libero lacus, a tempus tellus tincidunt eu. Nulla facilisi. Pellentesque porttitor vulputate efficitur. Cras placerat ante nec tortor pharetra, ac ultrices ligula convallis. Integer a nibh condimentum, tincidunt orci nec, malesuada libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sodales vel nunc at dictum.
            <br /><br /><br />
            Pellentesque non blandit nisi. Ut congue est eget lobortis aliquam. Nulla sit amet est lobortis, sollicitudin dui sit amet, malesuada magna. Duis egestas magna erat, et bibendum ex commodo vitae. Fusce ac suscipit mi, id sagittis nunc. Cras egestas lectus sollicitudin neque vehicula egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ac lorem magna.
            <br /><br /><br />
            Nulla eleifend ligula hendrerit, aliquet nulla sed, imperdiet felis. Cras sagittis felis diam, id commodo libero tincidunt vel. Integer a est varius nibh commodo malesuada feugiat et est. Pellentesque tincidunt tincidunt scelerisque. Cras finibus eros in dui malesuada, sed dignissim nisl tempus. Nunc consectetur, libero id luctus aliquam, odio elit consectetur massa, id sagittis nulla enim ut orci. Sed semper vehicula massa nec gravida. Ut consectetur tristique neque. In eu scelerisque erat, quis fermentum nibh. Nam suscipit vehicula odio ut pellentesque.
            <br /><br /><br />
            Pellentesque sit amet cursus lorem, ut pellentesque justo. Vestibulum quis laoreet metus. Proin non ante eget elit accumsan vestibulum. Cras sed cursus quam, in laoreet dui. Vivamus scelerisque ullamcorper leo sit amet posuere. Donec a risus faucibus, scelerisque mi ut, bibendum erat. Mauris lobortis euismod ipsum, nec efficitur dui gravida eu. Mauris eget lorem non dolor imperdiet mollis. In sit amet neque non lacus dictum aliquam id id diam. Ut hendrerit aliquet nibh, a laoreet diam ornare nec. Fusce scelerisque orci augue, nec aliquet felis sagittis ac. Mauris id nisl nec sapien ullamcorper blandit eget at felis. Aliquam at est convallis, dignissim lacus ac, elementum libero. Phasellus dictum dictum purus, laoreet malesuada ipsum mollis ut. Etiam pharetra facilisis commodo. Nam lacinia arcu volutpat feugiat tempor.
            <br /><br /><br />
        </main>
        <BottomSheet>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis rhoncus lectus sit amet malesuada. Aliquam ut posuere diam, varius consectetur nulla. Morbi bibendum elit in rutrum efficitur. Aliquam tempor, est eget tincidunt ullamcorper, erat nisi rutrum lorem, in varius risus enim vitae lorem. Ut sit amet mauris eu libero vulputate fringilla. Donec posuere turpis ut velit imperdiet, ultrices cursus leo pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sed feugiat diam.
            <br /><br /><br />
            Cras ante magna, tempus quis vehicula vitae, porta vel orci. Sed nec vestibulum odio, in varius velit. Nulla facilisi. Nam ullamcorper diam a massa venenatis ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla laoreet vestibulum ex, quis placerat risus porta eu. Donec at orci a quam egestas sodales vitae sed odio. In ante est, pharetra ac auctor nec, accumsan eu lacus. Duis malesuada, sem in tempus lacinia, ligula lectus dictum risus, id auctor lacus quam eu lorem. Aenean ornare libero lacus, a tempus tellus tincidunt eu. Nulla facilisi. Pellentesque porttitor vulputate efficitur. Cras placerat ante nec tortor pharetra, ac ultrices ligula convallis. Integer a nibh condimentum, tincidunt orci nec, malesuada libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sodales vel nunc at dictum.
            <br /><br /><br />
            Pellentesque non blandit nisi. Ut congue est eget lobortis aliquam. Nulla sit amet est lobortis, sollicitudin dui sit amet, malesuada magna. Duis egestas magna erat, et bibendum ex commodo vitae. Fusce ac suscipit mi, id sagittis nunc. Cras egestas lectus sollicitudin neque vehicula egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ac lorem magna.
            <br /><br /><br />
            Nulla eleifend ligula hendrerit, aliquet nulla sed, imperdiet felis. Cras sagittis felis diam, id commodo libero tincidunt vel. Integer a est varius nibh commodo malesuada feugiat et est. Pellentesque tincidunt tincidunt scelerisque. Cras finibus eros in dui malesuada, sed dignissim nisl tempus. Nunc consectetur, libero id luctus aliquam, odio elit consectetur massa, id sagittis nulla enim ut orci. Sed semper vehicula massa nec gravida. Ut consectetur tristique neque. In eu scelerisque erat, quis fermentum nibh. Nam suscipit vehicula odio ut pellentesque.
            <br /><br /><br />
            Pellentesque sit amet cursus lorem, ut pellentesque justo. Vestibulum quis laoreet metus. Proin non ante eget elit accumsan vestibulum. Cras sed cursus quam, in laoreet dui. Vivamus scelerisque ullamcorper leo sit amet posuere. Donec a risus faucibus, scelerisque mi ut, bibendum erat. Mauris lobortis euismod ipsum, nec efficitur dui gravida eu. Mauris eget lorem non dolor imperdiet mollis. In sit amet neque non lacus dictum aliquam id id diam. Ut hendrerit aliquet nibh, a laoreet diam ornare nec. Fusce scelerisque orci augue, nec aliquet felis sagittis ac. Mauris id nisl nec sapien ullamcorper blandit eget at felis. Aliquam at est convallis, dignissim lacus ac, elementum libero. Phasellus dictum dictum purus, laoreet malesuada ipsum mollis ut. Etiam pharetra facilisis commodo. Nam lacinia arcu volutpat feugiat tempor.
            <br /><br /><br />
        </BottomSheet>
    </>
    );
}; 

export default BottomSheetDemo;
