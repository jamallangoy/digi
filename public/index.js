const Link = ReactRouterDOM.Link
const Route = ReactRouterDOM.Route
const HashRouter = ReactRouterDOM.HashRouter
const UserContext = React.createContext(null)


function App(){
    
    return(
        <>
        <HashRouter>
            <div>
                <Navbar/>
                <UserContext.Provider value={{users:[{name: "", email: "", password: "", balance: 0}]}}>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/createaccount"  component={CreateAccount} />
                    <Route path="/login"  component={Login} />
                    <Route path="/balance"  component={Balance} />
                    <Route path="/deposit"  component={Deposit} />
                    <Route path="/withdraw"  component={Withdraw} />
                    <Route path="/alldata"  component={AllData} />
                </div>
            </UserContext.Provider>

            </div>
        </HashRouter>
            
        </>
    )

};

ReactDOM.render(
<App />,
document.getElementById('root')
    )