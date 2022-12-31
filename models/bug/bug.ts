import * as Yup from 'yup';

export interface IBugFormValues {
    issue : string;
    description : string;
}

export class BugHelper {
    public static getFormValues() : IBugFormValues {
        return {
            issue: '',
            description: '',
        }
    }

    public static getFormValidationSchema() : Yup.SchemaOf<IBugFormValues> {
        return Yup.object().shape({
            issue: Yup.string().required('Required').max(20, 'Cannot be longer than 20 characters.'),
            description: Yup.string().required('Required').max(255, 'Cannot be longer than 255 characters.'),
        });
    }
}