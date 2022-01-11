const Login = () => {
    const [show, setShow] = React.useState(true)
            
    return(
        <>
        <Layout 
            title = "Login"
            subtitle = "Let's Get Digital, Digital"
            main = {show ? <LoginForm  setShow={setShow}/> : <LoginMsg  setShow={setShow} />}
        />
    </>
    )
}

const LoginMsg = (props) => {
    
    return(
        <>
            <h5>Welcome to DigiBank!</h5>
            <p>Where we get digital, digial!</p>
            <Link to="/balance"><button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>Digital Account</button></Link> 
        </>
    )
}


const LoginForm = (props) => {
    const { useState, useContext, useEffect } = React;
    const [data, setData] = useState({email: "", password: ""})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validMsg, setValidMsg] = useState('');

    const loginSubmit = (e) => {
        e.preventDefault
        //  if (typeof window === "undefined") {
        //   return;
        // }
        if (!email){
            setValidMsg(`Please enter your email address`)
            return false
        }
        if (!password){
            setValidMsg(`Please enter your password`)
            return false
        }
       
        const url = `/account/login/${email}/${password}`;
            (async () => {
                var res = await fetch(url);
                console.log(res)
                var data = await res.json();                
                console.log(data);
                const user = data
                setData(user)
                console.log(user)
                
            })();
            props.setShow(false)
    }
    


    return(
        <>
            <h4 style={{color:"red"}}>{validMsg}</h4>
            <form onSubmit={loginSubmit}>
                <label className="label">Email</label><br/>
                <input type="email" className="input" id="createEmail" value={email} onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter your email"></input><br/><br/>
                <label className="label">Password</label><br/>
                <input className="input" type="password" className="input" id="createPassword"  value={password}  onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Enter your password"></input><br/><br/>
                <button className="button" type="button" onClick={loginSubmit}>-- Login --</button>
            </form>
            
        </>
    )

}