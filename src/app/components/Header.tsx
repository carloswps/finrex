import Insights from '../(realApp)/revenue/components/icons/Insights.svg'
import RevenueSpending from '../(realApp)/revenue/components/icons/RevenueSpending.svg'
import Goals from '../(realApp)/revenue/components/icons/Goals.svg'
import Profit from '../(realApp)/revenue/components/icons/Profit.svg'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='bg-white mb-9'>
            <div>
                <nav>
                    <ul className={'flex items-center border-b border-[var(--green-theme)] w-fit py-8 gap-32 m-auto cursor-pointer'}>
                        <li>
                            <img src="/darkLogo.png" alt="logo" className={'w-45'}/>
                        </li>
                        <li className={'flex items-center gap-2 text-xl text-[var(--desactive-color)] hover:text-[var(--text-color)]'}>
                            <Insights className={'w-10 h-10'}/>
                            <Link href={"/insights"}>Insights</Link>
                        </li>
                        <li className={'flex items-center gap-2 text-xl text-[var(--desactive-color)] hover:text-[var(--text-color)] text-nowrap'}>
                            <RevenueSpending className={'w-10 h-10'}/>
                            <Link href={"/revenue"}>Revenue & Spending</Link>
                        </li>
                        <li className={'flex items-center gap-2 text-xl text-[var(--desactive-color)] hover:text-[var(--text-color)]'}>
                            <Goals className={'w-10 h-10'}/>
                            <Link href={"/goals"}>Goals</Link>
                        </li>
                        <li className={'flex items-center gap-2 text-xl text-[var(--desactive-color)] hover:text-[var(--text-color)]'}>
                            <Profit className={'w-10 h-10'}/>
                            <Link href={"/profit"}>Profit</Link>
                        </li>
                        <li className={'rounded-full'}>
                            <Link href={"/profile"}>
                                <img src="/user.png" alt="" className={'w-13 h-13'}/>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;