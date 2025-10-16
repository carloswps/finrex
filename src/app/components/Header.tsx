'use client'
import Insights from '../(realApp)/revenue/components/icons/Insights.svg'
import RevenueSpending from '../(realApp)/revenue/components/icons/RevenueSpending.svg'
import Goals from '../(realApp)/revenue/components/icons/Goals.svg'
import Profit from '../(realApp)/revenue/components/icons/Profit.svg'
import Link from 'next/link'
import {useProfilePic} from "@/app/contexts/ProfilePicContext";
import {usePathname} from "next/navigation";

const Header = () => {
    const { fileUrl } = useProfilePic();

    const picSource = fileUrl || '/user.png';
    const pathName = usePathname();

    const activeColor = 'var(--text-color)';
    const desactiveColor = 'var(--desactive-color)';

    const getLinkClass = (path: string) => {
        const isActive = pathName.startsWith(path)

        const colorClass = isActive ? `text-[${activeColor}]` : `text-[${desactiveColor}]`;

        return `flex items-center gap-2 text-xl text-nowrap hover:text-[${activeColor}] ${colorClass}`;
    }

    return (
        <header className='bg-white mb-9'>
            <div>
                <nav>
                    <ul className={'flex items-center border-b border-[var(--green-theme)] w-fit py-8 gap-32 m-auto cursor-pointer'}>
                        <li>
                            <img src="/darkLogo.png" alt="logo" className={'w-45'}/>
                        </li>
                        <li className={getLinkClass('/insights')}>
                            <Insights className={'w-10 h-10'}/>
                            <Link href={"/insights"}>Insights</Link>
                        </li>
                        <li className={getLinkClass('/revenue')}>
                            <RevenueSpending className={'w-10 h-10'}/>
                            <Link href={"/revenue"}>Revenue & Spending</Link>
                        </li>
                        <li className={getLinkClass('/goals')}>
                            <Goals className={'w-10 h-10'}/>
                            <Link href={"/goals"}>Goals</Link>
                        </li>
                        <li className={getLinkClass('/profit')}>
                            <Profit className={'w-10 h-10'}/>
                            <Link href={"/profit"}>Profit</Link>
                        </li>
                        <li>
                            <Link href={"/profile"}>
                                <img
                                    src={picSource}
                                    alt="Your Profile Picture"
                                    className={'w-13 h-13 rounded-full object-cover'}
                                />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;