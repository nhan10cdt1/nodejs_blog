const Course = require("../models/Course");

class SiteController {
    // [GET] /
    // Phương thức `index` xử lý các yêu cầu GET tới đường dẫn "/news".
    // [GET] /
    index = async(req, res) => {
        try {
            const courses = await Course.find({});

            res.json(courses);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
    //[GET] /search
    search(req, res) {
        res.render("search");
    }
}

// Xuất một instance của lớp SiteController để có thể sử dụng trong các file khác.
module.exports = new SiteController();