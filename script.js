const users = [];
const products = [];

// Función para agregar un usuario
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userAge = document.getElementById('userAge').value;

    const user = { name: userName, email: userEmail, age: +userAge };
    users.push(user);
    updateUserList();
    this.reset();
});

// Función para mostrar la lista de usuarios
function updateUserList() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
        userList.innerHTML += `<li class="list-group-item">${user.name} - ${user.email} - ${user.age}</li>`;
    });
}

// Función para agregar un producto
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productCategory = document.getElementById('productCategory').value;

    const product = { name: productName, price: +productPrice, category: productCategory };
    products.push(product);
    updateProductList();
    this.reset();
});

// Función para mostrar la lista de productos
function updateProductList() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
        productList.innerHTML += `<li class="list-group-item">${product.name} - $${product.price} - ${product.category}</li>`;
    });
}

// Función para generar el reporte
document.getElementById('generateReport').addEventListener('click', function() {
    const report = [...users, ...products];
    const reportOutput = report.map(item => {
        if (item.price !== undefined) {
            return `Producto: ${item.name}, Precio: $${item.price}, Categoría: ${item.category}`;
        }
        return `Usuario: ${item.name}, Email: ${item.email}, Edad: ${item.age}`;
    }).join('\n');
    document.getElementById('report').textContent = reportOutput;
});
