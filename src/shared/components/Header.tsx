'use client';

import Insights from '@/app/(realApp)/revenue/components/icons/Insights.svg';
import RevenueSpending from '@/app/(realApp)/revenue/components/icons/RevenueSpending.svg';
import Profit from '@/app/(realApp)/revenue/components/icons/Profit.svg';
import Link from 'next/link';
import Goals from '@/app/(realApp)/revenue/components/icons/Goals.svg';

const Header = () => {
  return (
    <header className="mb-9 bg-white">
      <div>
        <nav>
          <ul
            className={'m-auto flex w-fit cursor-pointer items-center gap-32 border-b border-[var(--green-theme)] py-8'}
          >
            <li>
              <img src="/darkLogo.png" alt="logo" className={'w-45'} />
            </li>
            <li
              className={'flex items-center gap-2 text-xl text-[var(--desactive-color)] hover:text-[var(--text-color)]'}
            >
              <Insights className={'h-10 w-10'} />
              <Link href={'/insights'}>Insights</Link>
            </li>
            <li
              className={
                'flex items-center gap-2 text-xl text-nowrap text-[var(--desactive-color)] hover:text-[var(--text-color)]'
              }
            >
              <RevenueSpending className={'h-10 w-10'} />
              <Link href={'/revenue'}>Revenue & Spending</Link>
            </li>
            <li
              className={'flex items-center gap-2 text-xl text-[var(--desactive-color)] hover:text-[var(--text-color)]'}
            >
              <Goals className={'h-10 w-10'} />
              <Link href={'/goals'}>Goals</Link>
            </li>
            <li
              className={'flex items-center gap-2 text-xl text-[var(--desactive-color)] hover:text-[var(--text-color)]'}
            >
              <Profit className={'h-10 w-10'} />
              Profit
            </li>
            <li className={'rounded-full'}>
              <img src="/user.png" alt="" className={'h-13 w-13'} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
