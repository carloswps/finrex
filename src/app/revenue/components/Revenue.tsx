import Header from "@/app/revenue/components/Header";
import RevenueForm from "@/app/revenue/components/RevenueForm";

const Revenue = () => {
    return (
        <div className={'flex flex-col bg-white w-screen h-screen px-15'}>
            <Header/>
            <RevenueForm/>
        </div>
    )
}

export default Revenue;