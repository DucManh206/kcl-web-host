document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time
    setTimeout(function() {
        // Redirect to the main page
        window.location.href = "main.html";
    }, 3000); // 3000 milliseconds (3 seconds) as an example
});

document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra chiều rộng màn hình khi trang web được tải
    checkScreenWidth();

    // Thêm sự kiện lắng nghe cho việc thay đổi kích thước màn hình
    window.addEventListener("resize", checkScreenWidth);

    // Kiểm tra chế độ tối theo cài đặt hệ điều hành
    checkDarkModePreference();
});

function checkScreenWidth() {
    var isMobile = window.innerWidth <= 768;
    var body = document.body;

    if (isMobile) {
        body.classList.add("mobile-view");
        body.classList.remove("desktop-view");
    } else {
        body.classList.remove("mobile-view");
        body.classList.add("desktop-view");
    }
}

function checkDarkModePreference() {
    var darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkModeMediaQuery.matches) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}