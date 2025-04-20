import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <div className="min-h-screen bg-[#0F172A] font-[Inter] text-[#F8FAFC] overflow-x-hidden">
            <Header />
            <main className="pt-[80px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;