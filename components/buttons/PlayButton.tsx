import PauseSVG from '../svgs/PauseSVG';
import PlaySVG from '../svgs/PlaySVG.';

interface IPlayButton {
    disabled : boolean;
    isCounting : boolean;
    onClick : () => void;
}

const PlayButton = (props : IPlayButton) => {
    
    const { isCounting, disabled } = props;
    const { onClick } = props;

    return (
        <button 
            className={'rounded-full p-1'}
            disabled={disabled}
            onClick={onClick}
        >
            {
                isCounting ? 
                    <PauseSVG className={`fill-primary ${disabled ? 'opacity-50' : ''}`}/> :
                    <PlaySVG className={disabled ? 'opacity-50' : ''}/>
            }
        </button>
    );
}

export default PlayButton;