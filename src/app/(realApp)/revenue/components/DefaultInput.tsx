import { useController, UseControllerProps } from "react-hook-form";
import Edit from './icons/Edit.svg';
import Money from './icons/Money.svg';
import { revenueSchemaType } from "../schemas/revenueSchema";

type DefaultInputProps = UseControllerProps<revenueSchemaType> &  {
    label: string;
    labelIcon?: boolean;
    legend?: string;
    inputIcon?: boolean;
}

const DefaultInput = (props : DefaultInputProps) => {
    const { field, fieldState } = useController({
        ...props,
    })

    return (
        <div className={'flex flex-col max-h-[94px]'}>
                <label
                    className={'text-[var(--text-color)] font-bold text-lg'} htmlFor="inputName"
                >
                    <span className={'flex items-center gap-2'}>
                        {props.label}
                        {props.labelIcon && <Edit className={'w-4 h-4'}/>}
                    </span>
                    {props.legend &&
                        <p className={'text-[var(--lines-color)] text-[12px] font-light -mt-1'}>{props.legend}</p>
                    }
                </label>
            <div className={'relative flex items-center'}>
                {props.inputIcon && <Money className={'absolute w-5 h-5 ml-2 bottom-[30px] text-[var(--desactive-color)]'}/>}
                <input
                    type="number"
                    value={
                        field.value === undefined || field.value === null
                            ? ''
                            : field.value
                    }
                    className={'border border-[var(--green-theme)] text-[var(--text-color)] max-w-md rounded-md p-3 pl-8 mb-4 outline-none font-bold w-full input-no-spinner'}
                    onInput={e => {
                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                    }}
                    onChange={e => {
                        const val = e.target.value
                        const numericValue = val === '' ? undefined : Number(val);
                        field.onChange(numericValue);
                    }}
                />
                {fieldState.error && <p className='-mt-6 ml-2 font-semibold text-[var(--text-color)]'>{fieldState.error.message}</p>}
            </div>
        </div>
    )
}

export default DefaultInput;