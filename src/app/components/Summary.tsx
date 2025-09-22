import EvenArrow from '@/app/(realApp)/insights/components/icons/EvenArrow.svg';
type Props = {
  title?: string;
};
const Summary = ({ title }: Props) => {
  return (
    <div className={'my-4 text-[var(--text-color)]'}>
      <h3 className={'bold mb-3 text-[var(--purple-theme)]'}>{title}</h3>
      <div className={'flex gap-1 text-sm'}>
        <div className={'w-5 rounded-[2px] bg-blue-400'}></div>
        <h4>Transportation:</h4>
        <p className={'font-bold'}>$80</p>
        <EvenArrow />
        <p className={'font-bold'}>$80</p>
        <p>(No change)</p>
      </div>
    </div>
  );
};

export default Summary;
