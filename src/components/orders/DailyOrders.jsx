import { motion } from "framer-motion"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis,  YAxis } from "recharts"

const dailyOrdersData = [
    { date: "07/01", orders: 82 },
    { date: "07/02", orders: 65 },
    { date: "07/03", orders: 47 },
    { date: "07/04", orders: 41 },
    { date: "07/05", orders: 67 },
    { date: "07/06", orders: 56 },
    { date: "07/07", orders: 62 },
]

const DailyOrders = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}                                                 
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Daily Orders</h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
            <LineChart data={dailyOrdersData}>
                <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                <XAxis dataKey='date' stroke='#9ca3af' />
                <YAxis stroke='#9ca3af' />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColor: "#4b5563"
                    }}
                    itemStyle={{  color: "#e5e7eb" }}
                />
                <Legend />
                <Line type='monotone' dataKey='orders' stroke='#10b981' strokeWidth={2} />                
            </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default DailyOrders
