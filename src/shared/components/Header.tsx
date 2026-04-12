'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useProfilePic } from '@/shared/contexts/ProfilePicContext';
import { paths } from '@/libs/paths';
import Goals from '@/features/revenue/components/icons/Goals.svg';
import Insights from '@/features/revenue/components/icons/Insights.svg';
import Profit from '@/features/revenue/components/icons/Profit.svg';
import RevenueSpending from '@/features/revenue/components/icons/RevenueSpending.svg';

const Header = () => {
	const { fileUrl } = useProfilePic();

	const picSource = fileUrl || '/user.png';
	const pathName = usePathname();

	const activeColor = 'var(--text-color)';
	const desactiveColor = 'var(--desactive-color)';

	const getLinkClass = (path: string) => {
		const isActive = pathName.startsWith(path);

		const colorClass = isActive
			? `text-[${activeColor}]`
			: `text-[${desactiveColor}]`;

		return `flex items-center gap-2 text-xl text-nowrap hover:text-[${activeColor}] ${colorClass}`;
	};

	return (
		<header className="mb-9 bg-white">
			<div>
				<nav>
					<ul
						className={
							'm-auto flex w-fit cursor-pointer items-center gap-32 border-b border-(--green-theme) py-8'
						}
					>
						<li>
							<Image
								src={'/darkLogo.png'}
								alt={'logo'}
								width={180}
								height={46}
							/>
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
								<img
									src={picSource}
									alt="Your Profile Picture"
									className="h-13 w-13 rounded-full object-cover"
								/>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
