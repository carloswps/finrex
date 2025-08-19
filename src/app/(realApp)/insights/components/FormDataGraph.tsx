'use client'
import {useContext, useEffect, useRef} from "react";

import {
    Chart,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    LineController,
    LineElement,
    PointElement,
    ArcElement,
    DoughnutController
} from "chart.js";
import {GraphContext} from "@/app/(realApp)/insights/contexts/GraphContext";

Chart.register(
    BarController,
    BarElement,
    LineController,
    LineElement,
    PointElement,
    DoughnutController,
    ArcElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);


const FormDataGraph = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const context = useContext(GraphContext);

    useEffect(() => {
        if(!canvasRef.current || !context) return;

        const ctx = canvasRef.current.getContext('2d');
        if(!ctx) return;

        const myChart = new Chart(ctx, {
            type: context?.style ?? 'bar',
            data: {
                labels: ["Jan", "Feb", "Mar"],
                datasets: [
                    {
                        label: "Vendas",
                        data: [12, 19, 3],
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
            },
        });
        return () => {
            myChart.destroy();
        }
    }, [context?.style])

    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}

export default  FormDataGraph;