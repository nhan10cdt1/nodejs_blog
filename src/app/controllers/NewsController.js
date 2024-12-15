class NewsController {
    // [GET] /news
    // Phương thức `index` xử lý các yêu cầu GET tới đường dẫn "/news".
    index(req, res) {
        // Sử dụng phương thức `res.render` để render view có tên "news".
        res.render('news');
    }
    //[GET] /news/:slug
    show(req, res) {
        res.send('NEW DETAIL !!!');
    }
}

// Xuất một instance của lớp NewsController để có thể sử dụng trong các file khác.
module.exports = new NewsController();
