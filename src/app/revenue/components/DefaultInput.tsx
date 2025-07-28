import {FC, SVGProps} from "react";

type SvgComponent = FC<SVGProps<SVGSVGElement>>;

type Props = {
    label: string;
    labelIcon?: SvgComponent;
    legend?: string;
    inputIcon?: SvgComponent;
}

const DefaultInput = ({label, labelIcon: LabelIcon, legend, inputIcon: InputIcon} : Props) => {
    return (
        <div className={'flex flex-col max-h-[94px]'}>
                <label
                    className={'text-[var(--text-color)] font-bold text-lg'} htmlFor="inputName"
                >
                    <span className={'flex items-center gap-2'}>
                        {label}
                        {LabelIcon && <LabelIcon className={'w-4 h-4'}/>}
                    </span>
                    {legend &&
                        <p className={'text-[var(--lines-color)] text-[12px] font-light -mt-1'}>{legend}</p>
                    }
                </label>
            <div className={'relative flex items-center'}>
                {InputIcon && <InputIcon className={'absolute w-5 h-5 ml-2 bottom-[30px] text-[var(--desactive-color)]'}/>}
                <input
                    type="text"
                    className={'border border-[var(--green-theme)] max-w-md rounded-md p-3 mb-4 outline-none font-bold w-full'}
                />
            </div>
        </div>
    )
}

export default DefaultInput;