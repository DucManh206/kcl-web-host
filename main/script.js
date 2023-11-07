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

    // Chắc chắn rằng phần tử có id là 'toggleMode' đã được tìm thấy
    const toggleModeButton = document.getElementById('toggleMode');
    if (toggleModeButton) {
        toggleModeButton.addEventListener('click', function() {
            toggleDarkMode();
        });
    }
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
            src = src.replace(".png", "-dark.png");
        } else {
            // Thay thế hình ảnh bằng phiên bản chế độ sáng (nếu có)
            src = src.replace("-dark.png", ".png");
        }
        img.src = src;
    });
}
document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra chiều rộng màn hình khi trang web được tải
    checkScreenWidth();

    // Thêm sự kiện lắng nghe cho việc thay đổi kích thước màn hình
    window.addEventListener("resize", checkScreenWidth);
});

function checkScreenWidth() {
    var isMobile = window.innerWidth <= 768;

    // Lấy đối tượng body
    var body = document.body;

    // Thêm hoặc xóa lớp tùy thuộc vào loại thiết bị
    if (isMobile) {
        body.classList.add("mobile-view");
        body.classList.remove("desktop-view");
    } else {
        body.classList.remove("mobile-view");
        body.classList.add("desktop-view");
    }
}
// Your existing JavaScript code here

// Add these lines to the end of script.js
document.addEventListener("DOMContentLoaded", function () {
    // Check if the element with id 'toggleMode' is found
    const toggleModeButton = document.getElementById('toggleMode');
    if (toggleModeButton) {
        toggleModeButton.addEventListener('click', function () {
            toggleDarkMode();
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing-text");
    const learnMoreBtnContainer = document.getElementById("learn-more-btn-container");

    const textToType = "Nhanh chóng, Tiện lợi, Trực quan";
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            typingText.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeText, 36);
        } else {
            // Hiển thị nút "Learn More" khi chữ đã gõ xong
            learnMoreBtnContainer.style.opacity = 1;
        }
    }

    // Bắt đầu gõ chữ khi trang web được tải
    typeText();
});

function handleLearnMoreClick() {
    // Lấy đối tượng HTML của phần content
    const contentSection = document.getElementById("content");

    // Sử dụng smooth-scroll để cuộn màn hình một cách từ từ
    const scroll = new SmoothScroll();
    scroll.animateScroll(contentSection, null, { easing: 'easeInOutQuart', speed: 2800 });
}

