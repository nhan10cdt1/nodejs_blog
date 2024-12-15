const newsRouter = require('./news.js'); // Import module router cho phần news
const siteRouter = require('./site.js'); // Import module router cho phần site

function route(app) {
    // Gắn route "/news" với newsRouter
    // Mọi yêu cầu bắt đầu bằng "/news" sẽ được xử lý bởi newsRouter
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route; // Xuất hàm route để sử dụng trong các phần khác của ứng dụng
