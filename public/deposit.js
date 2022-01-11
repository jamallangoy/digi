const Deposit = () => {
    const { useState } = React;
    const [show, setShow] = useState(true)

    return(
        <>
          <Layout 
                title = "Deposit"
                subtitle = {<div className="home-status">"Work Hard..."</div>}
                main = {show ? <DepositForm setShow={setShow} /> : <DepositMsg setShow={setShow} />}
            />
        </>
    )
}

const DepositMsg = () => {
    return(
        <>
            <h5>{`Congratulations!  Deposit Successful!`}</h5>
          <Link to='/deposit'> <button type="submit" className='btn btn-light'>Another Deposit</button></Link><br/><br/>
          <Link to='/withdraw'> <button type="submit" className='btn btn-light'>Withdraw Funds</button></Link>


        </>
    )
}

const DepositForm = (props) => {
    const { useContext, useState } = React;
    const ctx = useContext(UserContext)
    const [data, setData] = useState()
    const [balance, setBalance] = useState(ctx.users.map((user) => user.balance))
    const [deposit, setDeposit] = useState('')
    const [validDepositMsg, setValidDepositMsg] = useState('');

    const userName = ctx.users.map((user) => user.name)

    const handleDeposit = (e) => {
        e.preventDefault();
        console.log(deposit)
        if (!deposit){
            setValidDepositMsg(`You must select an amount first`);
            return false
        }
        if (deposit <= 0) {
            setValidDepositMsg(`Go to Withdraw Page to collect funds...`);
            return false
        }
        else {
            let newTotal= +balance + +deposit
            setBalance(newTotal)
            setDeposit('')
            props.setShow(false)
        }
        const url = `/account/deposit/${email}/${password}`;
            (async () => {
                var res = await fetch(url);
                console.log(res)
                var data = await res.json();                console.log(data);
                const user = data
                setData(user)
                console.log(user)
                
            })();
            props.setShow(false)
        
        
    }

    return(
        <>
            <h5>{validDepositMsg}</h5><br/>
            <div className="home-title">{`${userName}'s Account`}</div>
            <div className="balance">Current Balance: {balance}</div><br/>
            <form onSubmit={handleDeposit}>
                <label className="label">Amount</label><br/>
                <input className="input" type="number" className="input" id="inputDeposit" value={deposit} onChange={(e) => setDeposit(Number(e.currentTarget.value))} placeholder="Input an Amount"></input><br/><br/>
                <button className="btn" id="deposit-btn" onClick={handleDeposit}>Deposit</button>
            </form>
        </>
    )
}



