import { Toaster } from 'sonner';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from './layouts/MainLayout'; 

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import CategoryDetailPage from './pages/CategoryDetailPage';
import LoginPage from "./pages/LoginPage"; 
import RegisterPage from "./pages/RegisterPage"; 
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentStatusPage from './pages/PaymentStatusPage';

import SearchPage from "./pages/SearchPage";   // ⭐ THÊM SEARCH PAGE

// Admin
import AdminLayout from './layouts/AdminLayout'; 
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminOrderList from './pages/admin/AdminOrderList';
import AdminOrderDetail from './pages/admin/AdminOrderDetail';
import AdminBookList from './pages/admin/AdminBookList';
import AdminBookForm from './pages/admin/AdminBookForm';
import AdminUserList from './pages/admin/AdminUserList';

function App() {

  return (
    <>
      <Toaster richColors />
      
      <BrowserRouter> 
        <Routes>
          
          {/* === Main Layout chứa Header + Footer === */}
          <Route element={<MainLayout />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/category/:id" element={<CategoryDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/book/:id" element={<ProductDetailPage />} />
            <Route path="/payment-status/:orderId" element={<PaymentStatusPage />} />

            {/* ⭐ ROUTE TÌM KIẾM — BẮT BUỘC CẦN CÓ */}
            <Route path="/search" element={<SearchPage />} />

          </Route>

          {/* === Admin Layout === */}
          <Route element={<AdminLayout />}>

            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/orders" element={<AdminOrderList />} /> 
            <Route path="/admin/order/:id" element={<AdminOrderDetail />} />
            <Route path="/admin/books" element={<AdminBookList />} />
            <Route path="/admin/books/add" element={<AdminBookForm />} />
            <Route path="/admin/books/edit/:id" element={<AdminBookForm />} />
            <Route path="/admin/users" element={<AdminUserList />} />

          </Route>

          {/* === Các trang không có Header/Footer === */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="*" element={<NotFound />} /> 
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
