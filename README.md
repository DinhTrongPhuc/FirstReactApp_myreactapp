# 📝 Todo App (React + Node.js API)

## 📌 Giới thiệu
Đây là một ứng dụng **Todo App** được xây dựng theo mô hình **Client – Server**:

- **Frontend**: React (Vite)
- **Backend**: Node.js + Express (REST API)
- **Test API**: Postman

Ứng dụng cho phép người dùng:
- Xem danh sách công việc
- Thêm công việc mới
- Đánh dấu hoàn thành
- Xoá công việc
- Hiển thị loading và xử lý lỗi khi gọi API
- Giao diện hỗ trợ Dark Mode & Responsive

## 🧱 Kiến trúc hệ thống
React (Frontend)
|
| axios
v
Node.js API (Express)

- Frontend **không lưu dữ liệu**
- Backend chịu trách nhiệm **xử lý và lưu dữ liệu**
- React chỉ hiển thị dữ liệu lấy từ API

## ⚙️ Công nghệ sử dụng

### Frontend
- React
- Vite
- Axios
- CSS thuần (Responsive + Dark Mode)

### Backend
- Node.js
- Express
- CORS
- RESTful API

### Công cụ
- Postman (test API)
- Git / GitHub

## 📁 Cấu trúc thư mục (Frontend)
src/
├── api/
│ └── todoApi.js # Các hàm gọi API
├── components/
│ ├── TodoItem.jsx
├── App.jsx
├── main.tsx
└── index.css


---

## 🚀 Chức năng chính

- 📄 Load danh sách Todo từ API
- ➕ Thêm Todo mới
- ✅ Đánh dấu hoàn thành
- ❌ Xoá Todo
- ⏳ Hiển thị loading khi gọi API
- ⚠️ Hiển thị lỗi khi API thất bại
- 🌙 Dark Mode
- 📱 Responsive Mobile

## ▶️ Cách chạy project
### 1️⃣ Chạy Backend (API)

```bash
cd todo-api
npm install
node index.js
API chạy tại: http://localhost:3001

### 2️⃣ Chạy Frontend (React)
cd my-react-app
npm install
npm run dev
Mở trình duyệt: http://localhost:5173


