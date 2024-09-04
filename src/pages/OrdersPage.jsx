import Header from "../components/common/Header"
import { motion } from "framer-motion"
import StatCard from "../components/common/StatCard"
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react"
import DailyOrders from "../components/orders/DailyOrders"
import OrderDistribution from "../components/orders/OrderDistrbution"
import OrdersTable from "../components/orders/OrdersTable"

const orderStats = {
    totalOrders: "1.337",
    pendingOrders: "78",
    completeOrders: "367",
    totalRevenue: "$92.87"
}

const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Orders" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delaty: 1 }}
            >
                <StatCard 
                    name="Total Orders"
                    icon={ShoppingBag}
                    value={orderStats.totalOrders}
                    color="#6366f1"
                />
                <StatCard 
                    name="pending Orders"
                    icon={Clock}
                    value={orderStats.pendingOrders}
                    color="#f59e0b"
                />
                <StatCard 
                    name="Complete Orders"
                    icon={CheckCircle}
                    value={orderStats.completeOrders}
                    color="#10b981"
                />
                <StatCard 
                    name="Total Revenue"
                    icon={DollarSign}
                    value={orderStats.totalRevenue}
                    color="#ef4444"
                />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <DailyOrders />
                <OrderDistribution />
            </div>

            <OrdersTable />
      </main>
    </div>
  )
}

export default OrdersPage
