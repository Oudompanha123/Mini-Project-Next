export const registerService = async (userInfo)=>{
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/auth/sign-up', {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
}

export const loginService = async (userLogin)=>{
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/auth/login', {
        method: "POST",
        body: JSON.stringify(userLogin),
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json();
    return data
}