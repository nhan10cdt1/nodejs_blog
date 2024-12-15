class SiteController {
    // [GET] /
    // Phương thức `index` xử lý các yêu cầu GET tới đường dẫn "/news".
    index(req, res) {
        // Sử dụng phương thức `res.render` để render view có tên "news".
        res.render('home');
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

// Xuất một instance của lớp SiteController để có thể sử dụng trong các file khác.
module.exports = new SiteController();
