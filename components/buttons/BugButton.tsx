import { useState } from 'react';
import { IBugFormValues } from '../../models/bug/bug';
import BugDialog from '../dialogs/BugDialog';
import BugSVG from '../svgs/BugSVG'

const BugButton = () => {
    
    const [open, setOpen] = useState<boolean>(false);
    
    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const reportBug = (values : IBugFormValues) => {
        closeDialog();
    };
    
    return (
        <>
            <div onClick={openDialog} className={'transition group bg-white hover:bg-secondary rounded-full p-1 hover:shadow-lg hover:translate-y-[-4px] cursor-pointer'}>
                <BugSVG width={50} height={50} className={'transition fill-secondary group-hover:fill-white'}/>
            </div>
            {
                open && (
                    <BugDialog 
                        loading={false}
                        onSave={reportBug}
                        onClose={closeDialog}
                    />
                )
            }
        </>
    )
}

export default BugButton;