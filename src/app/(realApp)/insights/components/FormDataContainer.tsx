import FormDataGraph from "@/app/(realApp)/insights/components/FormDataGraph";
import GraphExhibition from "@/app/(realApp)/insights/components/GraphExhibition";
import {GraphProvider} from "@/app/(realApp)/insights/contexts/GraphContext";

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
            <GraphProvider>
                <FormDataGraph/>
                {graphSelection &&
                    <div>
                        <GraphExhibition/>
                    </div>
                }
            </GraphProvider>
        </div>
    )
}

export default FormDataContainer;