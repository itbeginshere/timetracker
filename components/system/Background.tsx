import Image from 'next/image';

const Background = () => {
    return (
        <Image 
            src={'/clouds.png'} 
            alt={'many clouds'} 
            className={'absolute z-[-1]'}
            fill
        />
    );
}

export default Background;