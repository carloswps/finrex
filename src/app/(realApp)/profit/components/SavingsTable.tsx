import TableRow from "@/app/(realApp)/profit/components/TableRow";

const SavingsTable = () => {
    return (
        <table className={'w-11/12 text-center mb-12 text-lg border-separate border-spacing-0'}>
            <thead>
            <tr className={'text-[var(--green-theme)] bg-[var(--desactive-color)]'}>
                <th className={'p-3 rounded-tl-md'}>Month</th>
                <th className={'p-3'}>Saved ($)</th>
                <th className={'p-3'}>Saved (%)</th>
                <th className={'p-3'}>Previous Spending ($)</th>
                <th className={'p-3'}>Current Spending ($)</th>
                <th className={'p-3 rounded-tr-md'}>3-Month Avg Spending ($)</th>
            </tr>
            </thead>
            <tbody>
            <TableRow
                month={'April'}
                savedValue={200}
                savedPercentage={25}
                previousSpending={800}
                currentSpending={600}
                color={'#4DA1D8'}
            />
            <TableRow
                month={'June'}
                savedValue={100}
                savedPercentage={8}
                previousSpending={1200}
                currentSpending={1100}
                color={'var(--pink-graph)'}
            />
            <TableRow
                month={'October'}
                savedValue={250}
                savedPercentage={26}
                previousSpending={950}
                currentSpending={700}
                color={'var(--orange-graph)'}
            />
            </tbody>
        </table>
    );
};

export default SavingsTable;