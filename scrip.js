document.getElementById('no').addEventListener('click', () => {
    const button = document.getElementById('no');
    const container = document.querySelector('.background');

    // Lấy kích thước của container để đảm bảo nút không đi ra ngoài
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Tính toán vị trí ngẫu nhiên
    const maxLeft = containerRect.width - buttonRect.width;
    const maxTop = containerRect.height - buttonRect.height;

    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    // Cập nhật vị trí nút "No"
    button.style.position = 'absolute';
    button.style.left = `${randomLeft}px`;
    button.style.top = `${randomTop}px`;

    // Giảm kích thước nút "No" và chữ bên trong
    const currentWidth = button.offsetWidth;
    const currentHeight = button.offsetHeight;
    const currentFontSize = parseFloat(window.getComputedStyle(button).fontSize);

    // Giảm kích thước nút "No" và font 10% mỗi lần nhấn
    const newWidth = currentWidth * 0.9;
    const newHeight = currentHeight * 0.9;
    const newFontSize = currentFontSize * 0.9;

    // Giảm kích thước đến khi nút gần như biến mất
    if (newWidth > 20 && newHeight > 20 && newFontSize > 10) {
        button.style.width = `${newWidth}px`;
        button.style.height = `${newHeight}px`;
        button.style.fontSize = `${newFontSize}px`;
    } else {
        // Ẩn nút khi kích thước quá nhỏ
        button.style.display = 'none';
    }
});


const yesbutton = document.getElementById('yes');
    const yesf = document.getElementById('yesform');

    yesbutton.addEventListener('click', ()=> {
        yesf.classList.add('active');
    })