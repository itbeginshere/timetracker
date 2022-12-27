import Image from 'next/image';
import { CSSProperties } from 'react';

const Background = () => {
   
    const styles : CSSProperties = { objectFit: 'cover', };
   
    return (
        <Image 
            src={'/clouds.png'} 
            alt={'many clouds'} 
            className={'absolute z-[-1] h-full w-full'}
            fill
            style={styles}
        />
    );
}

export default Background;