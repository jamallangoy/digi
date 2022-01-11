const CreateAccount = () => {
    const [show, setShow] = React.useState(true)
 
    return(
        <>
            <Layout 
                title = "Create Account"
                subtitle = "Let's Get Digital, Digital"
                main = {show ? <CreateForm  setShow={setShow} />: <CreateMsg  setShow={setShow} />}
            />
        </>
    )
}

const CreateMsg = (props) => {

    
    return(
        <>
           
                <div className="home-title">Congratulations!!!</div>
                <div className="home-subtitle">Account successfully created</div>      
            <button type="submit" className="button" onClick={() => props.setShow(true)}>Add another Account</button>
        </>
    )
}

const CreateForm = (props) => {
    const { useState } = React;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorStatus, setErrorStatus] = useState('');
    
    const handleSubmit = () => {
        console.log(name, email, password);
        if(!name){
            setErrorStatus(`Please enter your name`)
            return false
        }
        if (!email) {
            setErrorStatus(`Please enter your email`)
            return false
        }
        if (!password){
            setErrorStatus(`Please enter a password`)
            return false
        }
        // ctx.users.push({name, email, password});
        props.setShow(false)
        const url = `/account/create/${name}/${email}/${password}`;
            (async () => {
                var res = await fetch(url);
                var data = await res.json();
                console.log(data);
            })();
            props.setShow(false)

    }
    return(
        <>
            <h4 style={{color:"red"}}>{errorStatus}</h4>
            <form onSubmit={handleSubmit}>
                <label className="label">Name</label><br/>
                <input type="text" className="input" id="createName" value={name} onChange={(e) => setName(e.currentTarget.value)} placeholder="Enter your name"></input><br/><br/>
                <label className="label">Email</label><br/>
                <input type="email" className="input" id="createEmail" value={email} onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter your email"></input><br/><br/>
                <label className="label">Password</label><br/>
                <input type="password" className="input" id="createPassword"  value={password}  onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Enter your password"></input><br/><br/>
                <button type="button" className="button" onClick={handleSubmit}>Create Account</button>
            </form>
        </>
    )
}
