import FormDataGraph from "@/app/(realApp)/insights/components/FormDataGraph";
import GraphExhibition from "@/app/(realApp)/insights/components/GraphExhibition";

type Props = {
    data: string,
    showData: boolean,
    graphSelection: boolean,
}

const FormDataContainer = ({ data, showData, graphSelection }: Props) => {
    return (
        <div>
            {showData &&
                <h3 className={'text-[var(--text-color)] text-2xl font-semibold'}>{data}</h3>
            }
            <FormDataGraph/>
            {graphSelection &&
                <div>
                    <GraphExhibition/>
                </div>
            }
        </div>
    )
}

export default FormDataContainer;