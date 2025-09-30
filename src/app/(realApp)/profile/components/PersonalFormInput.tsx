import { useController, UseControllerProps } from "react-hook-form";
import { ProfileFormValues } from "@/app/(realApp)/profile/schemas/profileSchema";

type profileInputProps = UseControllerProps<ProfileFormValues> &{
    placeholder: string;
    isNumeric?: boolean;
}

const PersonalFormInput = ( props: profileInputProps ) => {

    const { isNumeric, ...controllerProps } = props;

    const { field, fieldState } = useController({
        ...controllerProps,
        defaultValue: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string | number | null = e.target.value;

        if (isNumeric) {
            const numValue = parseFloat(value);
            value = isNaN(numValue) ? null : numValue;
        }

        field.onChange(value);
    };

    return (
        <input
            onChange={handleChange}
            onBlur={field.onBlur}
            name={field.name}
            ref={field.ref}
            value={field.value ?? ''}
            type={isNumeric ? 'number' : 'text'}
            className={`
                 p-2.5 input-no-spinner w-[80%] max-w-lg rounded-md border
                 font-bold text-[var(--text-color)] outline-none mb-3.5 placeholder-[var(--desactive-color)]
                 ${fieldState.invalid ? ' border-[var(--red-theme)] ' : ' border-[var(--green-theme)] '}               
            `}
            placeholder={props.placeholder}
        />
    )
}

export default PersonalFormInput;