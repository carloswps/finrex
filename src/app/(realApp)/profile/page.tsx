import PersonalForm from "@/app/(realApp)/profile/components/PersonalForm";
import UsageGraph from "@/app/(realApp)/profile/components/UsageGraph";
import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";
import Summary from "@/app/components/Summary";

const Page = () => {
    return (
        <div className={'flex'}>
            <div className={'w-1/3'}>
                <PersonalForm/>
            </div>
            <div className={'w-2/3 mt-8 -ml-12'}>
                <TitleAndSubtitle
                    title={'Usage Over Time'}
                    subTitle={'Track your progress and engagement with the platform'}
                />
                <UsageGraph/>
                <div className={'ml-2'}>
                    <Summary
                        summaryName={'Net Profit:'}
                        growthPercentage={150}
                        bottom={'20px'}
                        fontSize={'18px'}
                        titleFontSize={'20px'}
                        backgroundColor={'var(--blue-graph)'}
                        cubeSize={'24px'}
                        arrowDirection={'even'}
                        arrowSize={'28px'}
                    />
                    <Summary
                        summaryName={'Money Saved:'}
                        growthPercentage={150}
                        bottom={'20px'}
                        fontSize={'18px'}
                        titleFontSize={'20px'}
                        backgroundColor={'var(--pink-graph)'}
                        cubeSize={'24px'}
                        arrowDirection={'up'}
                        arrowSize={'28px'}
                    />
                    <Summary
                        summaryName={'Savings Growth:'}
                        growthPercentage={150}
                        bottom={'20px'}
                        fontSize={'18px'}
                        titleFontSize={'20px'}
                        backgroundColor={'var(--orange-graph)'}
                        cubeSize={'24px'}
                        arrowDirection={'down'}
                        arrowSize={'28px'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Page;