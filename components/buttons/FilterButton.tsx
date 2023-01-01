import { useState } from 'react';
import FilterDialog from '../dialogs/FilterDialog';

const FilterButton = () => {
    
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
                className={'transition flex flex-row h-[38px] items-center bg-secondary hover:bg-primary hover:shadow-lg rounded-lg px-2 py-1 gap-2'}
                onClick={openDialog}
            >
                <span className={'text-white font-medium'}>FILTERS</span>
            </button>
            {
                open && (
                    <FilterDialog 
                        onClose={closeDialog}
                    />
                )
            }
       </>
    );
}

export default FilterButton;