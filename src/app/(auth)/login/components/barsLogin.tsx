import Image from 'next/image';

const BarsLogin = () => {
  return (
    <div
      className={'absolute border-3 border-[var(--yellow-theme)] ' + 'top-89 left-265 h-50 w-50 rounded-md font-bold'}
    >
      <Image src={'/barAnalytic-removebg-preview.png'} alt="" fill />
      <p className={'relative bottom-6 ml-1 text-sm'}>Track Your Progress</p>
    </div>
  );
};

export default BarsLogin;
