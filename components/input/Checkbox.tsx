import { ErrorMessage, Field, useField } from 'formik';

interface ICheckboxProps {
    label : string;
    name : string;
}

const Checkbox = (props : ICheckboxProps) => {

    const { label, name } = props;

    const [field, meta] = useField(name);

    return (
        <div className={'flex flex-col'}>
            <div className={'flex flex-row gap-3'}>
                <label htmlFor={name} className={`w-[120px] font-semibold ${meta.error && meta.touched ? 'text-red-600' : ''}`}>{label}</label>
                <Field id={name} name={name} placeholder={label} type={'checkbox'} className={`w-[18px] ${meta.error && meta.touched ? 'accent-red-600' : ''}`}/>
            </div>
            <ErrorMessage name={name} component={'span'} className={'text-red-600 text-sm font-semibold'}/>
        </div>
    );
}

export default Checkbox;