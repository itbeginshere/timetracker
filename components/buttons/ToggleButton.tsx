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
            className={'transition flex flex-row h-[38px] items-center bg-secondary hover:bg-primary hover:shadow-lg rounded-lg px-2 py-1 gap-2'}
            onClick={onChange}
        >
            {
                value ? 
                    <VisibilitySVG className={'fill-white'} /> :
                    <HiddenSVG className={'fill-white'}/>
            }
            <span className={'text-white font-medium'}>{label}</span>
        </button>
    );
}

export default ToggleButton;