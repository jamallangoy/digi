const Withdraw =()=>{
    
    return(
        <>
            <Layout 
                title="Withdraw"
                subtitle="Play Harder..."
                main={
                <>
                    <div>
                        <button className="button">Collect Withdraw</button>
                    </div>
                    <div>
                    <a href="#/account" className="btn button">Back to Account</a>
                    <a href="#/deposit" className="btn button">Make Deposit</a>
                    </div>
                </>
                }
                
            />
        </>
    )

}