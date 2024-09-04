import Header from "../components/common/Header"
import { motion } from "framer-motion"
import StatCard from "../components/common/StatCard"
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react"
import ProductTable from "../components/products/ProductTable"
import SalesTrendChart from "../components/products/SalesTrendChart"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STAST */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}                                                 
          transition={{ duration: 1 }}
        >
          <StatCard 
            name="Total Products"
            icon={Package}
            value="2155"
            color="#6366f1"
          />
          <StatCard 
            name="Top Selling"
            icon={TrendingUp}
            value="89"
            color="#10b981"
          />
          <StatCard 
            name="Low Stock"
            icon={AlertTriangle}
            value="32"
            color="#f59e0b"
          />
          <StatCard 
            name="Total Revenue"
            icon={DollarSign}
            value="$458.235"
            color="#ef4444"
          />
        </motion.div>

        {/* ProductTable */}
        <ProductTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
        
      </main>
    </div>
  )
}

export default ProductsPage
