import { User } from 'firebase/auth';
import * as Yup from 'yup';

export interface ILoginFormValues {
    email : string;
    password : string;
}

export interface IUserFormValues {
    email : string; 
    displayName : string;
}

export class UserHelper {

    public static getFormValuesFromFirebaseUser(user ?: User) : IUserFormValues {
        if (user) {
            return {
                email : user.email ?? '',
                displayName : user.displayName ?? '',
            };
        }

        return {
            email: '',
            displayName: '',
        }
    }

    public static getFormValidationSchema() : Yup.SchemaOf<IUserFormValues> {
        return Yup.object().shape({
            email: Yup.string()
                .email('Please provide a valid email address.')
                .max(255, 'Cannot be longer than 255 characters')
                .required('Required'),
            displayName: Yup.string()
                .max(255, 'Cannot be longer than 255 characters')
                .required('Required'),
        });
    }

    public static getLoginFormValues() : ILoginFormValues {
        return {
            email: '',
            password: '',
        }
    }

    public static getLoginFormValidationSchema() : Yup.SchemaOf<ILoginFormValues> {
        return Yup.object().shape({
            email: Yup.string()
                .email('Please provide a valid email address.')
                .max(255, 'Cannot be longer than 255 characters.')
                .required('Required'),
            password: Yup.string()
                .min(8, 'Cannot be shorter than 8 characters.')
                .max(255, 'Cannot be longer than 255 characters.')
                .required('Required'),
        });
    }
}

