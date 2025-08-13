import { useForm } from "react-hook-form";
import DefaultInput from "./DefaultInput";
import { revenueSchema, revenueSchemaType } from "../schemas/revenueSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRevenueValues } from "@/app/(auth)/login/utils/mutations";
import { incomeItem } from "../types/incomeType";

type Props = {
    title: string;
    subTitle: string;
    secondTitle: string;
    subSecondTitle: string;
    data: incomeItem[];
    secondData: incomeItem[];
}

const RevenueForm = ({title, subTitle, data, secondData, secondTitle, subSecondTitle}: Props) => {

     const { handleSubmit, control } = useForm({
            resolver: zodResolver(revenueSchema),
            defaultValues: {
                mainIncome: undefined,
                freelance: undefined,
                benefits: undefined,
                businessProfit: undefined,
                other: undefined,
                transportation: undefined,
                rent: undefined,
                groceries: undefined,
                utilities: undefined,
                entertainment: undefined,
            }
        });

        const addRevenueValues = useRevenueValues();
        
            const handleFormSubmit = async (data: revenueSchemaType) => {
                try {
                    await addRevenueValues.mutateAsync(data); 
                    console.log(data)
                } catch {
                    console.log('error')
                }
            }

    return (
            <div>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="grid grid-cols-2">
                        <div className="border-r border-[var(--lines-color)] mr-22">
                            <h2 className={'text-[var(--text-color)] text-3xl font-semibold'}>{title}</h2>
                            <h5 className={'text-[var(--green-theme)] text-sm mb-6'}>{subTitle}</h5>
                            {data.map(input => (
                                <DefaultInput
                                    key={input.name}
                                    name={input.name as keyof revenueSchemaType}
                                    control={control}
                                    label={input.label}
                                    inputIcon={true}
                                />
                            ))}
                        </div>
                        <div className="pl-6">
                            <h2 className={'text-[var(--text-color)] text-3xl font-semibold'}>{secondTitle}</h2>
                            <h5 className={'text-[var(--green-theme)] text-sm mb-6'}>{subSecondTitle}</h5>
                             {secondData.map(input => (
                                <DefaultInput
                                    key={input.name}
                                    name={input.name as keyof revenueSchemaType}
                                    control={control}
                                    label={input.label}
                                    inputIcon={true}
                                />
                            ))}
                        </div>
                    </div>
                    <input
                        type="submit"
                        className="hidden"
                    />
                </form>
            </div>
    )
}

export default RevenueForm;