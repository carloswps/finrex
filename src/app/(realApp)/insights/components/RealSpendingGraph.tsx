import Bar from '@/app/(realApp)/insights/components/Bar';

type Props = {
  title: string;
  subTitle: string;
  value: number;
};
const RealSpendingGraph = ({ title, subTitle, value }: Props) => {
  return (
    <div className={'my-4 flex items-center text-[var(--text-color)]'}>
      <div>
        <h4 className={'text-sm font-semibold'}>{title}</h4>
        <h6 className={'-mt-1.5 text-sm text-[var(--lines-color)]'}>{subTitle}</h6>
      </div>
      <Bar width={'w-full'} />
      <p className={'font-bold'}>${value}</p>
    </div>
  );
};

export default RealSpendingGraph;
