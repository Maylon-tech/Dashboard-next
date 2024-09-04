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

const UserRetentionData = [
    { name: "Week 1", retention: 100 },
    { name: "Week 2", retention: 75 },
    { name: "Week 3", retention: 60 },
    { name: "Week 4", retention: 50 },
    { name: "Week 5", retention: 45 },
    { name: "Week 6", retention: 40 },
    { name: "Week 7", retention: 38 },
    { name: "Week 8", retention: 35 },
]

const UserRetention = () => {
  return (
    <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}                                                 
        transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-100 mb-4">User Retention</h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
            <LineChart data={UserRetentionData}>
                <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                <XAxis dataKey='name' stroke='#9ca3af' />
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
                    dataKey='retention' 
                    stroke='#8b5cf6' 
                    strokeWidth={2}                     
                />
            </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default UserRetention
