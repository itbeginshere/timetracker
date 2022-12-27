import { useState } from 'react';
import BugSVG from '../svgs/BugSVG'

const BugButton = () => {
    
    const [open, setOpen] = useState<boolean>(false);
    
    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const deleteTask = () => {
        closeDialog();
    };
    
    
    return (
        <>
            <div onClick={openDialog} className={'absolute left-10 bottom-4 rounded-full p-1 bg-white shadow-md'}>
                <BugSVG width={50} height={50} className={'fill-secondary'}/>
            </div>
        </>
    )
}

export default BugButton;