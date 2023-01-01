import { useState } from 'react';
import StatsDialog from '../dialogs/StatsDailog';
import StatsSVG from '../svgs/StatsSVG';

interface IStatsButtonProps {
    className ?: string;
}

const StatsButton = (props : IStatsButtonProps) => {
    
    const { className } = props;

    const [open, setOpen] = useState<boolean>(false);

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };
    
    return (
        <>
            <button 
                className={`md:hidden group bg-white hover:bg-secondary rounded-full p-1 hover:shadow-lg ${className ?? ''}`}
                onClick={openDialog} 
            >
                <StatsSVG width={50} height={50} className={'transition fill-secondary group-hover:fill-white'}/>
            </button>
            <div className={'md:hidden'}>
                {
                    open && (
                        <StatsDialog 
                            onClose={closeDialog}
                        />
                    )
                }
            </div>
        </>
    )
}

export default StatsButton;