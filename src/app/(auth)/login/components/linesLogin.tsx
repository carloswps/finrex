import Image from 'next/image';

const LinesLogin = () => {
  return (
    <div
      className={
        'absolute bg-[var(--white-login)] text-[var(--green-theme)] ' +
        'shadow-custom top-40 left-200 w-sm rounded-md p-5 font-bold'
      }
    >
      <Image src={'/linesAnalytics-removebg-preview.png'} alt="" width={200} height={40} />
      Get your personal analytics
    </div>
  );
};

export default LinesLogin;
