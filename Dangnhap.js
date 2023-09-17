document.getElementById('btnSubmit').addEventListener('click', handleSignUp);

function handleSignUp() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const data = localStorage.getItem('users');
    const listUsers = JSON.parse(data);
    if (check_users(username, password, listUsers)) {
        alert('Đăng nhập thành công!');
        window.location.href ="index.html"
    } else {
        alert('Tài khoản hoặc mật khẩu chưa chính xác!')
    }
}


function check_users(username, password, list_of_users) {
    for (const user of list_of_users) {
        if (user.username === username && user.password === password) {
            return true;
        }
    }
    return false;
}