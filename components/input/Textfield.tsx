import { ErrorMessage, Field, useField } from 'formik';

interface ITextfieldProps {
    label : string;
    name : string;
}

const Textfield = (props : ITextfieldProps) => {

    const { label, name } = props;

    const [field, meta] = useField(name);

    return (
        <div className={'flex flex-col'}>
            <div className={'flex flex-row gap-3'}>
                <label htmlFor={name} className={`w-[120px] font-medium ${meta.error && meta.touched ? 'text-red-600' : ''}`}>{label}</label>
                <Field id={name} name={name} placeholder={label} type={'input'} className={`flex-1 ${meta.error && meta.touched ? 'border-2 border-red-600' : ''}`}/>
            </div>
            <ErrorMessage name={name} component={'span'} className={'text-red-600 text-sm font-semibold'}/>
        </div>
    );
}

export default Textfield;