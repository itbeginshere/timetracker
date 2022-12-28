import * as Yup from 'yup';

export interface IBug {
    subject : string;
    message : string;
    createdOn : string;
    createdBy : string;
}

export interface IBugFormValues {
    subject : string;
    message : string;
}

export class BugHelper {
    public static getFormValues(bug ?: IBug) : IBugFormValues {
        if (bug) {
            return {
                subject: bug.subject,
                message: bug.message,
            }
        }

        return {
            subject: '',
            message: '',
        }
    }

    public static getFormValidationSchema() : Yup.SchemaOf<IBugFormValues> {
        return Yup.object().shape({
            subject: Yup.string().required('Required').max(20, 'Cannot be longer than 20 characters.'),
            message: Yup.string().required('Required').max(255, 'Cannot be longer than 255 characters.'),
        });
    }
}