// Import các module cần thiết
const path = require("path"); // Module để làm việc với đường dẫn
const express = require("express"); // Framework web phổ biến cho Node.js
const morgan = require("morgan"); // Module HTTP logger để log request chi tiết
const handlebars = require("express-handlebars"); // Template engine Handlebars

// Khởi tạo ứng dụng Express
const app = express();

// Khởi tạo cổng mà ứng dụng sẽ chạy
const port = 3000;

//static file
app.use(express.static(path.join(__dirname, "public")));
// HTTP Logger (Ghi lại log các yêu cầu HTTP)
app.use(morgan("combined")); // Sử dụng chế độ log "combined" của Morgan

// Cấu hình Template Engine
app.engine("hbs", handlebars.engine({ extname: ".hbs" })); // Khởi tạo Handlebars làm template engine
app.set("view engine", "hbs"); // Thiết lập Handlebars làm view engine
app.set("views", path.join(__dirname, "resources/views")); // Thiết lập thư mục chứa các file view (templates)

// Định nghĩa route (đường dẫn) cơ bản
// Khi người dùng truy cập vào đường dẫn "/", render file "home.handlebars"
app.get("/", (req, res) => {
  res.render("home"); // Render template "home.handlebars"
});

app.get("/news", (req, res) => {
  res.render("news"); // Render template "home.handlebars"
});

// Khởi động server và lắng nghe kết nối từ cổng `port`
// Sau khi server chạy, log thông báo xác nhận
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // In ra cổng đang chạy
});
