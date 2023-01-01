import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import useToggle from '../../hooks/useToggle';
import { ILoginFormValues, IUserFormValues } from '../../models/user/user';
import LoginDialog from '../dialogs/LoginDialog';
import ProfileDialog from '../dialogs/ProfileDialog';
import ProfileSVG from '../svgs/ProfileSVG';

interface IProfileButtonProps {
    className ?: string;
}

const ProfileButton = (props : IProfileButtonProps) => {
    
    const { className } = props;

    const [open, openDialog, closeDialog] = useToggle();
    const [loginLoading, startLoginLoding, endLoginLoading] = useToggle();
    const [profileLoading, startProfileLoding, endProfileLoading] = useToggle();
    
    const saveProfile = async (values : IUserFormValues) => {
        
        try {
            if (!auth.currentUser) {
                toast.error('Please sign in to update your profile');
                return;
            }

            startProfileLoding();

            await updateProfile(auth.currentUser, {
                ...values
            });

            toast.success('Successfully updated profile!');
            closeDialog();

        } catch (ex) {
            toast.error('Error: Something went wrong while saving your profile.')
        } finally {
            endProfileLoading();
        }
        
    };

    const submitSignIn = async (values : ILoginFormValues) => {
        
        try {
            startLoginLoding();

            await signInWithEmailAndPassword(auth, values.email, values.password);
            
            toast.success('Successfully signed in!');
            closeDialog();
        } catch (ex) {
            toast.error('Error: Something went wrong while trying to sign in.');
        } finally {
            endLoginLoading();
        }

    }

    const submitRegister = async (values : ILoginFormValues) => {
        try {
            startLoginLoding();
            
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            
            toast.success('Successfully registered!');
            closeDialog();
        } catch (ex) {
            toast.error('Error: Something went wrong while trying to register.');
        } finally {
            endLoginLoading();
        }

    }

    const currentUser = auth.currentUser;

    return (
        <>
            <button 
                onClick={openDialog} 
                className={`group bg-white hover:bg-secondary rounded-full p-1 hover:shadow-lg ${className ?? ''}`}
            >
                <ProfileSVG width={50} height={50} className={'transition fill-secondary group-hover:fill-white'}/>
            </button>
            {
                (open && !!currentUser) && (
                    <ProfileDialog 
                        loading={profileLoading}
                        user={currentUser} 
                        onClose={closeDialog} 
                        onSave={saveProfile} 
                    /> 
                ) 
            }
            {
                (open && !currentUser) && (
                    <LoginDialog 
                        loading={loginLoading}
                        onClose={closeDialog} 
                        onRegister={submitRegister} 
                        onSignIn={submitSignIn}
                    />
                ) 
            }
        </>
    )
}

export default ProfileButton;