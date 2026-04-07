'use client';
import {
	ArcElement,
	BarController,
	BarElement,
	CategoryScale,
	Chart,
	type ChartData,
	type ChartOptions,
	DoughnutController,
	Legend,
	LinearScale,
	LineController,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';
import { useContext, useEffect, useRef } from 'react';
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
	Legend,
);

type Props = {
	width?: number;
	height?: number;
	margin?: string;
	chartOptions?: ChartOptions;
	chartData?: ChartData<'bar' | 'line' | 'doughnut'>;
	graphType?: 'bar' | 'line' | 'doughnut';
};

const FormDataGraph = ({
	width,
	height,
	margin,
	chartOptions,
	chartData,
	graphType,
}: Props) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const context = useContext(GraphContext);

	useEffect(() => {
		if (!canvasRef.current || !context) return;

		const ctx = canvasRef.current.getContext('2d');
		if (!ctx) return;

		let options: ChartOptions & { cutout?: string; radius?: string } = {
			responsive: true,
			plugins: {
				legend: { display: false },
			},
			scales: {
				x: {
					grid: {
						display: false,
					},
					border: {
						display: false,
					},
					ticks: {
						display: false,
					},
				},
				y: {
					grid: {
						display: false,
					},
					border: {
						display: false,
					},
					ticks: {
						display: false,
					},
				},
			},
		};
		if (context?.style === 'doughnut') {
			options.maintainAspectRatio = false;
			options.cutout = '60%';
			options.radius = '80%';
		}

		options = { ...options, ...chartOptions };

		const rootStyles = getComputedStyle(document.documentElement);

		const blueGraph =
			rootStyles.getPropertyValue('--blue-graph').trim() || '#4DA1D8';
		const pinkGraph =
			rootStyles.getPropertyValue('--pink-graph').trim() || '#F2858E';
		const orangeGraph =
			rootStyles.getPropertyValue('--orange-graph').trim() || '#FFB86B';
		const greenGraph =
			rootStyles.getPropertyValue('--green-graph').trim() || '#2EBCB3';
		const yellowGraph =
			rootStyles.getPropertyValue('--yellow-graph').trim() || '#F6C971';

		const dynamicColors = [
			blueGraph,
			pinkGraph,
			orangeGraph,
			greenGraph,
			yellowGraph,
		];

		const myChart = new Chart(ctx, {
			type: context?.style || graphType || 'bar',
			data: chartData || {
				labels: [
					'Transportation',
					'Rent',
					'Groceries',
					'Utilities',
					'Entertainment',
				],
				datasets: [
					{
						data: [1000, 2000, 3000, 4000, 5000],
						backgroundColor: dynamicColors.map((color) => `${color}CC`),
						borderColor: dynamicColors.map((color) => `${color}CC`),
						borderWidth: 1,
						borderRadius: 5,
						pointRadius: 0,
					},
				],
			},
			options,
		});
		return () => {
			myChart.destroy();
		};
	}, [context, graphType, chartOptions, chartData]);

	return (
		<div
			className={
				context?.style === 'doughnut' ? 'mx-auto h-[500px] w-[500px]' : 'w-full'
			}
			style={
				context?.style === 'doughnut' ? { height, width, margin } : undefined
			}
		>
			<canvas ref={canvasRef}></canvas>
		</div>
	);
};

export default FormDataGraph;
