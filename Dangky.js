const datas = [
    {
        username: 'Hoangminh',
        email: 'minh123@gmail.com',
        password: 'minh123',
    },
    {
        username: 'Hoangminh123',
        email: 'minh123@gmail.com',
        password: 'minh123',
    }
]
let users = [];

if (localStorage.getItem('users')) {
    const data = localStorage.getItem('users');
    users = JSON.parse(data);
} else {
    localStorage.setItem('users', JSON.stringify(datas))
    users = datas;
}
document.getElementById('btnSubmit').addEventListener('click', handleSignUp);
function handleSignUp() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Kiểm tra password và confirm password có giống nhau hay không
    if (password !== confirmPassword) {
        alert("Mật khẩu không khớp");
        return;
    }

    // Lưu thông tin đăng ký vào Local Storage
    const user = {
        username: username,
        email: email,
        password: password,
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Đăng kí tài khoản thành công!')
    window.location.href ="Dangnhap.html"
}