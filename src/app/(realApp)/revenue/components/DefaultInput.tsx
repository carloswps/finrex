import {
	type FieldValues,
	type UseControllerProps,
	useController,
} from 'react-hook-form';
import Edit from './icons/Edit.svg';
import Money from './icons/Money.svg';

type DefaultInputProps<T extends FieldValues> = UseControllerProps<T> & {
	label: string;
	labelIcon?: boolean;
	legend?: string;
	inputIcon?: boolean;
};

function DefaultInput<T extends FieldValues>({
	...props
}: DefaultInputProps<T>) {
	const { field, fieldState } = useController(props);

	return (
		<div className="flex max-h-[94px] flex-col">
			<label className="text-lg font-bold text-[var(--text-color)]">
				<span className="flex items-center gap-2">
					{props.label}
					{props.labelIcon && <Edit className="h-4 w-4" />}
				</span>
				{props.legend && (
					<p className="-mt-1 text-[12px] font-light text-[var(--lines-color)]">
						{props.legend}
					</p>
				)}
			</label>

			<div className="relative flex items-center">
				{props.inputIcon && (
					<Money className="absolute bottom-[30px] ml-2 h-5 w-5 text-[var(--desactive-color)]" />
				)}
				<input
					type="number"
					value={field.value ?? ''}
					className="input-no-spinner mb-4 w-full max-w-md rounded-md border border-[var(--green-theme)] p-3 pl-8 font-bold text-[var(--text-color)] outline-none"
					onChange={(e) => {
						const val = e.target.value;
						if (val === '') {
							field.onChange(undefined);
						} else {
							const parsed = parseFloat(val.replace(',', '.'));
							field.onChange(isNaN(parsed) ? undefined : parsed);
						}
					}}
				/>
				{fieldState.error && (
					<p className="-mt-6 ml-2 font-semibold text-[var(--text-color)]">
						{fieldState.error.message}
					</p>
				)}
			</div>
		</div>
	);
}

export default DefaultInput;
