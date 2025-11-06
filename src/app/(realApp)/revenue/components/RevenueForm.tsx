import { useIncomeValues, useSpendingValues } from '@/app/(auth)/login/utils/mutations';
import TitleAndSubtitle from '@/app/components/TitleAndSubtitle';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { incomeSchema, incomeSchemaType } from '../schemas/incomeSchema';
import { spendingSchema, spendingSchemaType } from '../schemas/spendingSchema';
import { transactionsItens } from '../types/transactionsItens';
import DefaultInput from './DefaultInput';

type Props = {
  data: transactionsItens[];
  secondData: transactionsItens[];
};

const RevenueForm = ({ data, secondData }: Props) => {
  const { reset } = useForm();

  const incomeForm = useForm<incomeSchemaType>({
    resolver: zodResolver(incomeSchema),
    defaultValues: {
      MainIncome: undefined,
      Freelance: undefined,
      Benefits: undefined,
      BusinessProfit: undefined,
      Other: undefined,
    },
  });

  const spendingForm = useForm<spendingSchemaType>({
    resolver: zodResolver(spendingSchema),
    defaultValues: {
      Transportation: undefined,
      Rent: undefined,
      Groceries: undefined,
      Utilities: undefined,
      Entertainment: undefined,
    },
  });

  const addIncomeValues = useIncomeValues();
  const addSpendingValues = useSpendingValues();

  const handleFormsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const currentDate = new Date().toISOString().split('T')[0];
    const incomeValid = { ...incomeForm.getValues(), Date: currentDate };
    const spendingValid = { ...spendingForm.getValues(), Date: currentDate };

    if (!incomeValid || !spendingValid) {
      return;
    }

    try {
      await Promise.all([addIncomeValues.mutateAsync(incomeValid), addSpendingValues.mutateAsync(spendingValid)]);
      console.log('Submission successful!');
      incomeForm.reset();
      spendingForm.reset();
    } catch (err) {
      console.log('Submission error:', err);
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
