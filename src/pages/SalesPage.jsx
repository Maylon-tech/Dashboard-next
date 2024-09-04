import Header from "../components/common/Header"
import { motion } from "framer-motion"
import StatCard from "../components/common/StatCard"
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"

import SalesOverviewChart from "../components/sales/SalesOverviewChart"
import SalesByCategoryCart from "../components/sales/SalesByCategoryCart"
import DailySalesTrend from "../components/sales/DailySalesTrend"

const salesStats = {
    totalRevenue: "$1.335.567",
    averageOrderValue: "$78.90",
    conversionRate: "3.15%",
    salesGrowth: "12.4%"
}

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales Dashboard" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* SALES STATS */}
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delaty: 1 }}
        >
            <StatCard 
                name="Total Revenue"
                icon={DollarSign}
                value={salesStats.totalRevenue}
                color="#6366f1"
            />
            <StatCard 
                name="Average Order Value"
                icon={ShoppingCart}
                value={salesStats.averageOrderValue}
                color="#10b981"
            />
            <StatCard 
                name="Conversion Rate"
                icon={TrendingUp}
                value={salesStats.conversionRate}
                color="#f59e0b"
            />
            <StatCard 
                name="Sales Growth"
                icon={CreditCard}
                value={salesStats.salesGrowth}
                color="#ef4444"
            />
        </motion.div>

        <SalesOverviewChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <SalesByCategoryCart />
            <DailySalesTrend />
        </div>
      </main>
    </div>
  )
}

export default SalesPage
