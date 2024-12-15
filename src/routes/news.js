const express = require("express");
const router = express.Router(); // Tạo một router instance để định nghĩa các route riêng biệt.

// Import NewsController, nơi định nghĩa các hành động (methods) cho route này.
const newsController = require("../app/controllers/NewsController");

// Gắn route "/" vào hàm `index` của newsController.
// Tất cả các yêu cầu tới "/" sẽ được xử lý bởi `index` trong NewsController.
router.use("/:slug", newsController.show);
router.use("/", newsController.index);

// Xuất module router để các phần khác của ứng dụng có thể sử dụng.
module.exports = router;
