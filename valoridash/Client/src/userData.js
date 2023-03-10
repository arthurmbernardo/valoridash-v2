export var userName = null;
export var userDepartment = null;
export var userToken = null;

export default function setUserToken (token, bool) {    
    if (localStorage.getItem('token')) {
        userToken = localStorage.getItem('token-ref');
    } else {
        userToken = token;
    }

    localStorage.setItem('token-ref', userToken);
}

export function setUserDepartment (department) {
    if (localStorage.getItem('department')) {
        userDepartment = localStorage.getItem('department-ref');
    } else {
        userDepartment = department;
    }

    localStorage.setItem('department-ref', userDepartment);
}

export function setUserName (name) {
    if (localStorage.getItem('name')) {
        userName = localStorage.getItem('name-ref');
    } else {
        userName = name;
    }

    localStorage.setItem('name-ref', userName);
}


