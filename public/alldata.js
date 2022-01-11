const AllData =()=>{
    const { useState, useEffect } = React;
    const [data, setData] = useState('')
    
    useEffect(() => {
        fetch('/account/all')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            }) 
    }, [])


    return(
        <>
            <Layout 
                title="All Data"
                subtitle="One user and counting!!!"
                main={
                    <div className="subtitle">{JSON.stringify(data)}</div>
                }
                
            />
        </>
    )

}