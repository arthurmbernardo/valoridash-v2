function clearStorage() {
    let session = sessionStorage.getItem('token');
    if (session == null) {
        localStorage.removeItem('token');
        localStorage.removeItem('token-ref');
        localStorage.removeItem('department');
        localStorage.removeItem('department-ref');
        localStorage.removeItem('name');
        localStorage.removeItem('name-ref');
    }
    sessionStorage.setItem('token', 1);
}

export default clearStorage;

