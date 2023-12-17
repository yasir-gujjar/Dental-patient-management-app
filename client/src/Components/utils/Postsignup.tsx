import Serverurl from "./Serverurl";

const Postsignup = async (form: {}) => {

  try {

    const signupapi = await fetch(`${Serverurl}/users`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      },

    })
    const data = await signupapi.json()
    if (data.status === 201) {
      window.location.href = "/sendquery"
    }

    // navigate("/contact-us")
  } catch (error) {
    console.log("error while signing up try again");

  }

}

export default Postsignup;