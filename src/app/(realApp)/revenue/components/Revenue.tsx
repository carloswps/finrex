import { incomeData } from "../data/incomeData";
import { spendingData } from "../data/spendingData";
import RevenueForm from "./RevenueForm";

const Revenue = () => {
    return (
        <div className='flex flex-col bg-white'>
            <RevenueForm
                title="Monthly Income"
                subTitle="Log your income"
                data={incomeData}
                secondTitle="Monthly Spending"
                subSecondTitle="Record your expenses"
                secondData={spendingData}
            />
        </div>
    )
}

export default Revenue;