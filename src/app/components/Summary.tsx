import EvenArrow from '@/app/(realApp)/insights/components/icons/EvenArrow.svg';
import TripleUpArrow from '@/features/profit/components/icons/TripleUpArrow.svg';
import DownArrow from '@/app/(realApp)/insights/components/icons/UpArrow.svg';

type Props = {
  title?: string;
  summaryName?: string;
  growthPercentage?: number;
  bottom?: string;
  fontSize?: string;
  titleFontSize?: string;
  backgroundColor?: string;
  cubeSize?: string;
  arrowDirection?: 'up' | 'down' | 'even';
  arrowSize?: string;
  pastValue?: number;
  currentValue?: number;
};

const Summary = ({
  title,
  summaryName,
  growthPercentage,
  bottom,
  fontSize,
  titleFontSize,
  backgroundColor,
  cubeSize,
  arrowDirection,
  arrowSize,
  pastValue,
  currentValue,
}: Props) => {
  return (
    <div className={'my-4 text-[var(--text-color)]'}>
      <h3 className={'bold mb-3 text-[var(--purple-theme)]'}>{title}</h3>
      <div className={'flex items-center gap-1 text-sm'}>
        <div
          className={'mr-1 w-5 rounded-md'}
          style={{ backgroundColor: backgroundColor, height: cubeSize, width: cubeSize }}
        ></div>
        <h4 className={'font-semibold'} style={{ fontSize: titleFontSize }}>
          {summaryName}
        </h4>
        <div className={'flex items-center gap-1'}>
          <p className={'font-bold'} style={{ fontSize: fontSize }}>
            {pastValue}
          </p>
          {arrowDirection === 'even' ? (
            <EvenArrow style={{ height: arrowSize, width: arrowSize }} />
          ) : arrowDirection === 'up' ? (
            <TripleUpArrow className={'text-[var(--green-theme)]'} style={{ height: arrowSize, width: arrowSize }} />
          ) : arrowDirection === 'down' ? (
            <DownArrow className={'text-[var(--red-theme)]'} style={{ height: arrowSize, width: arrowSize }} />
          ) : null}
          <p className={'font-bold'} style={{ fontSize: fontSize }}>
            {currentValue}
          </p>
        </div>
        {growthPercentage ? (
          <p className={'relative text-[12px] font-semibold text-[var(--purple-theme)]'} style={{ bottom: bottom }}>
            {currentValue && pastValue && currentValue > pastValue ? `+${growthPercentage}%` : `-${growthPercentage}%`}
          </p>
        ) : (
          <p className={'ml-1.5 text-[12px] text-nowrap'}>
            {pastValue && currentValue && pastValue < currentValue
              ? `(+${currentValue - pastValue} vs last month)`
              : pastValue && currentValue && pastValue > currentValue
                ? `(-${pastValue - currentValue} vs last month)`
                : '(No change)'}
          </p>
        )}
      </div>
    </div>
  );
};

export default Summary;
