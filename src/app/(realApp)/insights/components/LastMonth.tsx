'use client';
import { useEffect, useRef } from 'react';
import { CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement } from 'chart.js';

Chart.register([CategoryScale, LineController, LineElement, LinearScale, PointElement]);

const LastMonth = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current;
    if (!ctx) return;

    const rootStyles = getComputedStyle(document.documentElement);

    const blueGraph = rootStyles.getPropertyValue('--blue-graph').trim() || '#4DA1D8';
    const pinkGraph = rootStyles.getPropertyValue('--pink-graph').trim() || '#F2858E';
    const orangeGraph = rootStyles.getPropertyValue('--orange-graph').trim() || '#FFB86B';

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1', '2', '3'],
        datasets: [
          {
            data: [2000, 400, 2010],
            backgroundColor: blueGraph,
            borderColor: blueGraph,
            borderWidth: 4,
            pointRadius: 0,
          },
          {
            data: [3000, 800, 1000],
            backgroundColor: pinkGraph,
            borderColor: pinkGraph,
            borderWidth: 4,
            pointRadius: 0,
          },
          {
            data: [1000, 200, 500],
            backgroundColor: orangeGraph,
            borderColor: orangeGraph,
            borderWidth: 4,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            ticks: {
              display: false,
            },
          },
          y: {
            ticks: {
              display: false,
            },
          },
        },
      },
    });
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className={'h-full w-full'}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default LastMonth;
