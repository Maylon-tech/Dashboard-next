import { motion } from "framer-motion"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts"

const UserGrowthData = [
    { month: "Jan", users: 1000 },
    { month: "Feb", users: 1500 },
    { month: "Mar", users: 2000 },
    { month: "Apr", users: 3000 },
    { month: "May", users: 4000 },
    { month: "Jun", users: 5000 },
]

const UserGrowthChart = () => {
  return (
    <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}                                                 
        transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-100">User Growth</h2>

      <div className="h-[320px]">
        <ResponsiveContainer>
            <LineChart data={UserGrowthData}>
                <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                <XAxis dataKey='month' stroke='#9ca3af' />
                <YAxis stroke='#9ca3af' />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColor: "#4b5563"
                    }}
                    itemStyle={{  color: "#e5e7eb" }}
                />
                <Legend />
                <Line 
                    type='monotone' 
                    dataKey='users' 
                    stroke='#8b5cf6' 
                    strokeWidth={2} 
                    dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default UserGrowthChart




