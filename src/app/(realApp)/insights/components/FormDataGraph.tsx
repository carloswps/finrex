'use client'
import {useEffect, useRef} from "react";

import {
    Chart,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

Chart.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

const FormDataGraph = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if(!canvasRef.current) return;

        const ctx = canvasRef.current.getContext('2d');
        if(!ctx) return;

        const myChart = new Chart(ctx, {
            type: "bar",
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
    }, [])

    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}

export default  FormDataGraph;