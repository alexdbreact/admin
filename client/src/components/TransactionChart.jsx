import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		Finish: 4000,
		All: 2400
	},
	{
		name: 'Feb',
		Finish: 3000,
		All: 1398
	},
	{
		name: 'Mar',
		Finish: 2000,
		All: 9800
	},
	{
		name: 'Apr',
		Finish: 2780,
		All: 3908
	},
	{
		name: 'May',
		Finish: 1890,
		All: 4800
	},
	{
		name: 'Jun',
		Finish: 2390,
		All: 3800
	},
	{
		name: 'July',
		Finish: 3490,
		All: 4300
	},
	{
		name: 'Aug',
		Finish: 2000,
		All: 9800
	},
	{
		name: 'Sep',
		Finish: 2780,
		All: 3908
	},
	{
		name: 'Oct',
		Finish: 1890,
		All: 4800
	},
	{
		name: 'Nov',
		Finish: 2390,
		All: 3800
	},
	{
		name: 'Dec',
		Finish: 3490,
		All: 4300
	}
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">الإحصائيات اليومية /الشهرية</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Finish" fill="#0ea5e9" />
						<Bar dataKey="All" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
