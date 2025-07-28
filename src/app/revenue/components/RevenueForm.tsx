import DefaultInput from "@/app/revenue/components/DefaultInput"
import Edit from "./icons/Edit.svg"
import Money from "./icons/Money.svg"

const RevenueForm = () => {
    return (
        <div className={'grid grid-cols-2 pt-6'}>
            <div className={'border-r border-[var(--lines-color)] mr-15'}>
                <h2 className={'text-[var(--text-color)] text-3xl font-semibold'}>Monthly Income</h2>
                <h5 className={'text-[var(--green-theme)] text-sm mb-6'}>Log your income</h5>
                <form action="">
                   <DefaultInput
                       label={'Main Income'}
                       inputIcon={Money}
                   />
                    <DefaultInput
                        label={'Freelance'}
                        inputIcon={Money}
                    />
                    <DefaultInput
                        label={'Benefits'}
                        inputIcon={Money}
                    />
                    <DefaultInput
                        label={'Business Profit'}
                        inputIcon={Money}
                    />
                    <DefaultInput
                        label={'Other'}
                        inputIcon={Money}
                    />
                </form>
            </div>
            <div className={'pl-6'}>
                <h2 className={'text-[var(--text-color)] text-3xl font-semibold'}>Monthly Spending</h2>
                <h5 className={'text-[var(--green-theme)] text-sm mb-6'}>Record your expenses</h5>
                <form action="">
                    <DefaultInput
                        label={'Transportation'}
                        legend={'Car Loan, Bus Fare, Ride'}
                        labelIcon={Edit}
                        inputIcon={Money}
                    />
                    <DefaultInput
                        label={'Rent'}
                        legend={'Car Loan, Bus Fare, Ride'}
                        labelIcon={Edit}
                        inputIcon={Money}
                    />
                    <DefaultInput
                        label={'Groceries'}
                        legend={'Car Loan, Bus Fare, Ride'}
                        labelIcon={Edit}
                        inputIcon={Money}
                    />
                    <DefaultInput
                        label={'Utilities'}
                        legend={'Car Loan, Bus Fare, Ride'}
                        labelIcon={Edit}
                        inputIcon={Money}
                    />
                    <DefaultInput
                        label={'Entertainment'}
                        legend={'Car Loan, Bus Fare, Ride'}
                        labelIcon={Edit}
                        inputIcon={Money}
                    />
                </form>
            </div>
        </div>
    )
}

export default RevenueForm;