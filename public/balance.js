const Balance = () => {
    return(
        <>
          <Layout 
                title = "Account Balance"
                subtitle = {<div className="home-status">`"Let's Get Digital, Digital"`</div>}
                main = { <BalanceMsg />}
            />
        
        </>
    )
}

const BalanceMsg = () => {
    const [data, setData] = React.useState('')
    
    React.useEffect(() => {
        fetch('/account/balance')
            .then(data => {
                console.log(data)
                setData(data)
            }) 
            .catch(err => console.log(err))
    }, [])
    

    console.log(data)

    return(
        <>
            <div className="home-title">{`${JSON.stringify(data)}'s Account Balance`}</div>
            <div className="balance">Current Balance: {JSON.stringify(data)}</div><br/><br/>
              
                <Link to='/deposit'> <button type="submit" className='btn button'>Deposit</button></Link><br/><br/>
                <Link to='/withdraw'> <button type="submit" className='btn button'>Withdraw</button></Link>


        </>
    )
}

