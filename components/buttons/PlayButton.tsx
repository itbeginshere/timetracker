import PauseSVG from '../svgs/PauseSVG';
import PlaySVG from '../svgs/PlaySVG.';

interface IPlayButton {
    isCounting : boolean;
    onClick : () => void;
}

const PlayButton = (props : IPlayButton) => {
    
    const { isCounting } = props;
    const { onClick } = props;

    return (
        <div 
            data-mdb-ripple="true"
            className={'cursor-pointer rounded-full p-1'}
            onClick={onClick}
        >
            {
                isCounting ? 
                    <PauseSVG className='fill-primary'/> :
                    <PlaySVG />
            }
        </div>
    );
}

export default PlayButton;