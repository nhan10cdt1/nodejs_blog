// Import các module cần thiết
const path = require('path'); // Module để làm việc với đường dẫn
const express = require('express'); // Framework web phổ biến cho Node.js
const morgan = require('morgan'); // Module HTTP logger để log request chi tiết
const handlebars = require('express-handlebars'); // Template engine Handlebars

const route = require('./routes'); // Import module định nghĩa các route

// Khởi tạo ứng dụng Express
const app = express();

// Khởi tạo cổng mà ứng dụng sẽ chạy
const port = 3000;

// Thiết lập thư mục chứa các file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Ghi log chi tiết các yêu cầu HTTP bằng Morgan
app.use(morgan('combined')); // Sử dụng chế độ log "combined" của Morgan

// Xử lý dữ liệu từ form (URL-encoded data)
app.use(
    express.urlencoded({
        extended: true,
    }),
);

// Xử lý dữ liệu dạng JSON
app.use(express.json());

// Cấu hình Template Engine Handlebars
app.engine('hbs', handlebars.engine({ extname: '.hbs' })); // Khởi tạo Handlebars làm template engine
app.set('view engine', 'hbs'); // Thiết lập Handlebars làm view engine
app.set('views', path.join(__dirname, 'resources/views')); // Thiết lập thư mục chứa các file view (templates)

// Khởi tạo route
route(app);

// Khởi động server và lắng nghe kết nối từ cổng `port`
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); // In ra cổng đang chạy
});
