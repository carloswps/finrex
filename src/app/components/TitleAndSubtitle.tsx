type Props = {
  title: string;
  subTitle: string;
  hasLine?: boolean;
  textSize?: string;
};

const TitleAndSubtitle = ({ title, subTitle, hasLine }: Props) => {
  return (
    <>
      <h2 className={`text-3xl font-semibold text-[var(--text-color)]`}>{title}</h2>
      <h5
        className={`-mt-1 mb-5 text-sm text-[var(--green-theme)] ${hasLine && 'border-b-1 border-[var(--green-theme)] pb-5'}`}
      >
        {subTitle}
      </h5>
    </>
  );
};

export default TitleAndSubtitle;
