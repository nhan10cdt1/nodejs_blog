const express = require('express');
const router = express.Router(); // Tạo một router instance để định nghĩa các route riêng biệt.

// Import siteController, nơi định nghĩa các hành động (methods) cho route này.
const siteController = require('../app/controllers/SiteController');

// Gắn route "/" vào hàm `index` của siteController.
// Tất cả các yêu cầu tới "/" sẽ được xử lý bởi `index` trong siteController.
router.use('/search', siteController.search);
router.use('/', siteController.index);

// Xuất module router để các phần khác của ứng dụng có thể sử dụng.
module.exports = router;
