import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {  useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import { ILoginFormValues, IUserFormValues } from '../../models/user/user';
import LoginDialog from '../dialogs/LoginDialog';
import ProfileDialog from '../dialogs/ProfileDialog';
import ProfileSVG from '../svgs/ProfileSVG';

const ProfileButton = () => {
    
    const [open, setOpen] = useState<boolean>(false);
    const [loginIsLoading, setLoginIsLoading] = useState<boolean>(false);
    const [profileIsLoading, setProfileIsLoading] = useState<boolean>(false);
    
    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const saveProfile = async (values : IUserFormValues) => {
        
        try {
            if (!auth.currentUser) {
                toast.error('Please sign in to update your profile');
                return;
            }

            setProfileIsLoading(true);

            await updateProfile(auth.currentUser, {
                ...values
            });

            toast.success('Successfully updated profile!');
            closeDialog();

        } catch (ex) {
            toast.error('Error: Something went wrong while saving your profile.')
        } finally {
            setProfileIsLoading(false);
        }
        
    };

    const submitSignIn = async (values : ILoginFormValues) => {
        
        try {
            setLoginIsLoading(true);

            await signInWithEmailAndPassword(auth, values.email, values.password);
            
            toast.success('Successfully signed in!');
            closeDialog();
        } catch (ex) {
            toast.error('Error: Something went wrong while trying to sign in.');
        } finally {
            setLoginIsLoading(false);
        }

    }

    const submitRegister = async (values : ILoginFormValues) => {
        try {
            setLoginIsLoading(true);
            
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            
            toast.success('Successfully registered!');
            closeDialog();
        } catch (ex) {
            toast.error('Error: Something went wrong while trying to register.');
        } finally {
            setLoginIsLoading(false);
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
                        loading={profileIsLoading}
                        user={currentUser} 
                        onClose={closeDialog} 
                        onSave={saveProfile} 
                    /> : 
                    <LoginDialog 
                        open={open && !currentUser} 
                        loading={loginIsLoading}
                        onClose={closeDialog} 
                        onRegister={submitRegister} 
                        onSignIn={submitSignIn}
                    />
            }
        </>
    )
}

export default ProfileButton;