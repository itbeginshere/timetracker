import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {  useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import { ILoginFormValues, IUserFormValues } from '../../models/user/user';
import LoginDialog from '../dialogs/LoginDialog';
import ProfileDialog from '../dialogs/ProfileDialog';
import ProfileSVG from '../svgs/ProfileSVG';

const ProfileButton = () => {
    
    const [open, setOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const saveProfile = (values : IUserFormValues) => {
        closeDialog();
    };

    const submitSignIn = async (values : ILoginFormValues) => {
        
        try {
            setIsLoading(true);

            await signInWithEmailAndPassword(auth, values.email, values.password);
            
            toast.success('Successfully signed in!');
            closeDialog();
        } catch (ex) {
            toast.error('Error: Something went wrong while trying to sign in.');
        } finally {
            setIsLoading(false);
        }

    }

    const submitRegister = async (values : ILoginFormValues) => {
        try {
            setIsLoading(true);
            
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            
            toast.success('Successfully registered!');
            closeDialog();
        } catch (ex) {
            toast.error('Error: Something went wrong while trying to register.');
        } finally {
            setIsLoading(false);
        }

    }

    const currentUser = auth.currentUser;

    return (
        <>
            <div onClick={openDialog} className={'transition group bg-white hover:bg-secondary rounded-full p-1 hover:shadow-lg hover:translate-y-[-4px] cursor-pointer'}>
                <ProfileSVG width={50} height={50} className={'transition fill-secondary group-hover:fill-white'}/>
            </div>
            {
                currentUser ? 
                    <ProfileDialog 
                        open={open && !!currentUser} 
                        loading={isLoading}
                        user={currentUser} 
                        onClose={closeDialog} 
                        onSave={saveProfile} 
                    /> : 
                    <LoginDialog 
                        open={open && !currentUser} 
                        loading={isLoading}
                        onClose={closeDialog} 
                        onRegister={submitRegister} 
                        onSignIn={submitSignIn}
                    />
            }
        </>
    )
}

export default ProfileButton;