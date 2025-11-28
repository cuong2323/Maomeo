import mongoose from "mongoose";

export default async function connectMDB(uri) {
    try {
        // Thêm log để kiểm tra xem uri có bị null không
        if (!uri) {
             console.error("❌ LỖI: MONGO_URI chưa được cung cấp (đang là null/undefined). Kiểm tra biến môi trường!");
             return;
        }
        
        await mongoose.connect(uri);
        console.log('✅ Kết nối thành công với database');
    } catch (error) {
        console.error('❌ Kết nối thất bại với database. Chi tiết lỗi:');
        console.error(error); // In chi tiết lỗi ra để đọc trên Render Logs
    }
}