import { useState } from 'react';
import { IBugFormValues } from '../../models/bug/bug';
import AccountSVG from '../svgs/AccountSVG';

const ProfileButton = () => {
    
    const [open, setOpen] = useState<boolean>(false);
    
    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const saveProfile = (values : IBugFormValues) => {
        closeDialog();
    };
    
    return (
        <>
            <div onClick={openDialog} className={'transition group bg-white hover:bg-secondary rounded-full p-1 hover:shadow-lg hover:translate-y-[-4px] cursor-pointer'}>
                <AccountSVG width={50} height={50} className={'transition fill-secondary group-hover:fill-white'}/>
            </div>
        </>
    )
}

export default ProfileButton;