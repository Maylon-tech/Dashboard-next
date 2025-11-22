import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users, LogOut } from "lucide-react"
import { Link } from "react-router-dom"

const SIDEBAR_ITEMS = [
    {
        name:"Painel Controle",
        icon: BarChart2,
        color: "#6366f1",
        href: "/", 
    },
    {
        name:"Produtos",
        icon: ShoppingBag,
        color: "#8b5cf6",
        href: "/products", 
    },
    {
        name:"Clientes",
        icon: Users,
        color: "#ec4899",
        href: "/users", 
    },
    {
        name:"vendas",
        icon: DollarSign,
        color: "#10b981",
        href: "/sales", 
    },
    {
        name:"Serviços",
        icon: ShoppingCart,
        color: "#f59e0b",
        href: "/orders", 
    },
    {
        name:"Despesas",
        icon: TrendingUp,
        color: "#3b82f6",
        href: "/analytics", 
    },
    {
        name:"Configurações",
        icon: Settings,
        color: "#6ee7b7",
        href: "/settings", 
    },
    {
        name:"Sair",
        icon: LogOut,
        color: "#15409c",
        href: "/sighIn", 
    }
]


const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <motion.div
        className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md flex flex-col border-r border-gray-700">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
            >
                <Menu size={24} />
            </motion.button>

            <nav className="mt-8 flex-grow">
                {
                    SIDEBAR_ITEMS.map((item, index) => (
                        <Link key={index} to={item.href}>
                            <motion.div 
                                className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2"
                            >
                                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />

                                <AnimatePresence>
                                    {
                                        isSidebarOpen && (
                                            <motion.span
                                                className="ml-4 whitespace-nowrap"
                                                initial={{ opacity: 0, width: 0 }}
                                                animate={{ opacity: 1, width: "auto" }} 
                                                exit={{ opacity: 0, width: 0 }}
                                                transition={{ duration: 0.2, delay: 0.3 }}
                                            >                                           
                                                {item.name}
                                            </motion.span>
                                        )
                                    }
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))
                }
            </nav>
      </div>
    </motion.div>
  )
}

export default Sidebar
