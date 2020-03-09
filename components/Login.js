import {Button, Small} from "./styled";

const Login = () => {

    const [state, setState] = React.useState({
        username: "",
        password: ""
    })

    const onChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    return <div id="form-container">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name="username" value={state.username} placeholder="Enter username" onChange={onChange}/>
                    <Small id="emailHelp" className="form-text text-muted">I don't judge you for being immature</Small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" value={state.password} placeholder="Password" onChange={onChange} />
                </div>
                <Button type="submit" className="btn btn-primary">Submit</Button>
            </form>
        <style jsx>{`
            .form-group {
                display: flex;
                flex-direction: column;
                margin-top: 15px;
            }
            #form-container {
                width: 450px;
            }
        `}</style>
    </div>
}

export default Login