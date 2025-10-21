'use client';

import Insights from '../(realApp)/revenue/components/icons/Insights.svg';
import RevenueSpending from '../(realApp)/revenue/components/icons/RevenueSpending.svg';
import Goals from '../(realApp)/revenue/components/icons/Goals.svg';
import Profit from '../(realApp)/revenue/components/icons/Profit.svg';
import Link from 'next/link';
import { useProfilePic } from '@/app/contexts/ProfilePicContext';
import { usePathname } from 'next/navigation';
import { paths } from '@/libs/paths';
import Image from 'next/image';

const Header = () => {
  const { fileUrl } = useProfilePic();

  const picSource = fileUrl || '/user.png';
  const pathName = usePathname();

  const activeColor = 'var(--text-color)';
  const desactiveColor = 'var(--desactive-color)';

  const getLinkClass = (path: string) => {
    const isActive = pathName.startsWith(path);

    const colorClass = isActive ? `text-[${activeColor}]` : `text-[${desactiveColor}]`;

    return `flex items-center gap-2 text-xl text-nowrap hover:text-[${activeColor}] ${colorClass}`;
  };

  return (
    <header className="mb-9 bg-white">
      <div>
        <nav>
          <ul
            className={'m-auto flex w-fit cursor-pointer items-center gap-32 border-b border-[var(--green-theme)] py-8'}
          >
            <li>
              <Image src={'/darkLogo.png'} alt={'logo'} width={200} height={50} />
            </li>
            <li className={getLinkClass(paths.page.insights)}>
              <Insights className={'h-10 w-10'} />
              <Link href={paths.page.insights}>Insights</Link>
            </li>
            <li className={getLinkClass(paths.page.revenue)}>
              <RevenueSpending className={'h-10 w-10'} />
              <Link href={paths.page.revenue}>Revenue & Spending</Link>
            </li>
            <li className={getLinkClass(paths.page.goals)}>
              <Goals className={'h-10 w-10'} />
              <Link href={paths.page.goals}>Goals</Link>
            </li>
            <li className={getLinkClass(paths.page.profit)}>
              <Profit className={'h-10 w-10'} />
              <Link href={paths.page.profit}>Profit</Link>
            </li>
            <li>
              <Link href={'/profile'}>
                <Image src={picSource} alt={'Your Profile Picture'} width={45} height={45} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
