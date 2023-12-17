
import Serverurl from "./Serverurl";

const Login = async (form: {}) => {
    const randombyte = Math.floor(Math.random() * 100)



    try {
        const post = await fetch(`${Serverurl}/login`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-type": "application/json",
            },
        });
        const loginque = await post.json();


        console.log(loginque);

        // we are not saving <Jonwebtoken> on localstorage because doing it is poison for user security so we generated random integers and put in it.they will be used for authentication

        if (loginque.success) {
            window.location.href = "/dashboard"
            localStorage.setItem("t@4$5", randombyte)
        } else {
            console.log(loginque.status);

        }
    } catch (error) {
        console.log("invalid credentials failed");
    }
};

export default Login;
