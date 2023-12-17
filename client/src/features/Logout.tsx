



const Logout = () => {

    localStorage.clear()
    window.location.href = "/"

    return <center>
        <h4>logging out</h4>
    </center>
}
export default Logout
