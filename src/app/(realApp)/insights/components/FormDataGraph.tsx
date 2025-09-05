'use client';
import { useContext, useEffect, useRef } from 'react';

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
  DoughnutController,
} from 'chart.js';
import { GraphContext } from '@/app/(realApp)/insights/contexts/GraphContext';

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
    if (!canvasRef.current || !context) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const options: any = { responsive: true };
    if (context?.style === 'doughnut') {
      options.maintainAspectRatio = false;
      options.cutout = '60%';
      options.radius = '80%';
    }

    const myChart = new Chart(ctx, {
      type: context?.style,
      data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
          {
            data: [12, 19, 3, 16, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options,
    });
    return () => {
      myChart.destroy();
    };
  }, [context?.style]);

  return (
    <div className={context?.style === 'doughnut' ? 'mx-auto h-[500px] w-[500px]' : 'w-full'}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default FormDataGraph;
