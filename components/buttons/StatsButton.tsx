import { useState } from 'react';
import StatsDialog from '../dialogs/StatsDailog';
import StatsSVG from '../svgs/StatsSVG';

const StatsButton = () => {
    
    const [open, setOpen] = useState<boolean>(false);

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };
    
    return (
        <>
            <div 
                className={'md:hidden transition group bg-white hover:bg-secondary rounded-full p-1 hover:shadow-lg hover:translate-y-[-4px] cursor-pointer'}
                onClick={openDialog} 
            >
                <StatsSVG width={50} height={50} className={'transition fill-secondary group-hover:fill-white'}/>
            </div>
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