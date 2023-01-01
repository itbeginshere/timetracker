import HiddenSVG from '../svgs/HiddenSVG';
import VisibilitySVG from '../svgs/VisibilitySVG';

interface IToggleButtonProps {
    value : boolean;
    label : string;
    onChange : () => void;
}

const ToggleButton = (props : IToggleButtonProps) => {
    
    const { value, label } = props;
    const { onChange } = props;
    
    return (
         <button 
            className={'flex flex-row h-[38px] items-center rounded-lg py-1 gap-2'}
            onClick={onChange}
        >
            {
                value ? 
                    <VisibilitySVG className={'fill-secondary'} /> :
                    <HiddenSVG className={'fill-secondary'}/>
            }
            <span className={'text-black font-medium'}>{label}</span>
        </button>
    );
}

export default ToggleButton;