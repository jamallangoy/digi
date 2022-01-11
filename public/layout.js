const Layout = (props) => {

    return(
        <>
            <div className="card text-center layout">
                <div className="card-header header">
                    DigiBank
                </div>
                <div className="card-body body">
                    <div className="card-title title">{props.title}</div>
                    <div className="card-subtitle subtitle">{props.subtitle}</div>
                    <div className="card-main main">{props.main}</div>
                </div>
                <div className="card-footer text-muted">
                    {Date()}
                </div>
            </div>
        </>
    )
}