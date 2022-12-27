import PauseSVG from '../svgs/PauseSVG';
import PlaySVG from '../svgs/PlaySVG.';

interface IPlayButton {
    playing : boolean;
    onClick : () => void;
}

const PlayButton = (props : IPlayButton) => {
    
    const { playing } = props;
    const { onClick } = props;
    
    return (
        <div 
            data-mdb-ripple="true"
            className={'cursor-pointer rounded-full p-1'}
            onClick={onClick}
        >
            {
                playing ? 
                    <PauseSVG /> :
                    <PlaySVG />
            }
        </div>
    );
}

export default PlayButton;