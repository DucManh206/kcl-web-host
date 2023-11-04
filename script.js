// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra trạng thái chế độ từ Local Storage
    var isDarkMode = localStorage.getItem("darkMode") === "true";

    // Áp dụng chế độ tối nếu cần
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }

    // Cập nhật hình ảnh trong chế độ tối
    updateImageColors();
});

function toggleDarkMode() {
    // Đảo ngược trạng thái chế độ tối
    document.body.classList.toggle("dark-mode");

    // Lưu trạng thái chế độ vào Local Storage
    var isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode.toString());

    // Cập nhật hình ảnh trong chế độ tối
    updateImageColors();
}

function updateImageColors() {
    // Cập nhật màu sắc của các hình ảnh dựa trên chế độ tối
    var images = document.querySelectorAll("img");
    images.forEach(function (img) {
        var src = img.src;
        if (document.body.classList.contains("dark-mode")) {
            // Thay thế hình ảnh bằng phiên bản chế độ tối (nếu có)
            src = src.replace(".png", ".png");
        } else {
            // Thay thế hình ảnh bằng phiên bản chế độ sáng (nếu có)
            src = src.replace(".png", ".png");
        }
        img.src = src;
    });
}
