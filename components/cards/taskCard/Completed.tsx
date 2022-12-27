import CheckedSVG from '../../svgs/CheckedSVG';
import UnCheckedSVG from '../../svgs/UnCheckedSVG';

interface ICompletedProps {
    value : boolean;
}

const Completed = (props : ICompletedProps) => {
    
    const { value } = props;
    
    return value ? <CheckedSVG fill={'lime'}/> : <UnCheckedSVG fill={'grey'}/>
}

export default Completed;