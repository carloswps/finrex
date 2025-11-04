import { useIncomeValues, useSpendingValues } from '@/app/(auth)/login/utils/mutations';
import TitleAndSubtitle from '@/app/components/TitleAndSubtitle';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { incomeSchema, incomeSchemaType } from '../schemas/incomeSchema';
import { spendingSchema, spendingSchemaType } from '../schemas/spendingSchema';
import { incomeItem } from '../types/incomeType';
import DefaultInput from './DefaultInput';

type Props = {
  data: incomeItem[];
  secondData: incomeItem[];
};

const RevenueForm = ({ data, secondData }: Props) => {
  const incomeForm = useForm<incomeSchemaType>({
    resolver: zodResolver(incomeSchema),
    defaultValues: {
      mainIncome: undefined,
      freelance: undefined,
      benefits: undefined,
      businessProfit: undefined,
      other: undefined,
    },
  });

  const spendingForm = useForm<spendingSchemaType>({
    resolver: zodResolver(spendingSchema),
    defaultValues: {
      transportation: undefined,
      rent: undefined,
      groceries: undefined,
      utilities: undefined,
      entertainment: undefined,
    },
  });

  const addIncomeValues = useIncomeValues();
  const addSpendingValues = useSpendingValues();

  const handleFormsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const incomeValid = await incomeForm.trigger();
    const spendingValid = await spendingForm.trigger();
    if (!incomeValid || !spendingValid) return;

    try {
      await Promise.all([
        addIncomeValues.mutateAsync(incomeForm.getValues()),
        addSpendingValues.mutateAsync(spendingForm.getValues()),
      ]);
    } catch (err) {
      console.log('Error', err);
    }
  };

  return (
    <form onSubmit={handleFormsSubmit}>
      <div className="grid grid-cols-2">
        <div className="mr-22 border-r border-[var(--lines-color)]">
          <TitleAndSubtitle title="Monthly Income" subTitle="Log your income" />
          {data.map(input => (
            <DefaultInput
              key={input.name}
              name={input.name as keyof incomeSchemaType}
              control={incomeForm.control}
              label={input.label}
              inputIcon
            />
          ))}
        </div>

        <div className="pl-6">
          <TitleAndSubtitle title="Monthly Spending" subTitle="Record your expenses" />
          {secondData.map(input => (
            <DefaultInput
              key={input.name}
              name={input.name as keyof spendingSchemaType}
              control={spendingForm.control}
              label={input.label}
              inputIcon
            />
          ))}
        </div>
      </div>

      <input type="submit" className="hidden" />
    </form>
  );
};

export default RevenueForm;
