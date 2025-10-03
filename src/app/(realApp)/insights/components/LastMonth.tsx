import Summary from '@/shared/components/Summary';
import FromDataGraph from '@/app/(realApp)/insights/components/FormDataContainer';

const LastMonth = () => {
  return (
    <div>
      <FromDataGraph graphSelection={false} />
      <Summary title={'Summary'} />
    </div>
  );
};

export default LastMonth;
