import Insights from './icons/Insights.svg'
import RevenueSpending from './icons/RevenueSpending.svg'
import Goals from './icons/Goals.svg'
import Profit from './icons/Profit.svg'

const Header = () => {
    return (
        <header>
            <div>
                <nav>
                    <ul className={'flex items-center border-b border-[var(--green-theme)] w-fit py-8 gap-32 m-auto'}>
                        <li>
                            <img src="/darkLogo.png" alt="logo" className={'w-45'}/>
                        </li>
                        <li className={'flex items-center gap-2 text-xl text-[var(--desactive-color)] hover:text-[var(--text-color)]'}>
                            <Insights className={'w-10 h-10'}/>Insights
                        </li>
                        <li className={'flex items-center gap-2 text-xl text-[var(--desactive-color)] hover:text-[var(--text-color)] text-nowrap'}>
                            <RevenueSpending className={'w-10 h-10'}/>Revenue & Spending
                        </li>
                        <li className={'flex items-center gap-2 text-xl text-[var(--desactive-color)] hover:text-[var(--text-color)]'}>
                            <Goals className={'w-10 h-10'}/>Goals
                        </li>
                        <li className={'flex items-center gap-2 text-xl text-[var(--desactive-color)] hover:text-[var(--text-color)]'}>
                            <Profit className={'w-10 h-10'}/>Profit
                        </li>
                        <li className={'rounded-full'}>
                            <img src="/user.png" alt="" className={'w-13 h-13'}/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;