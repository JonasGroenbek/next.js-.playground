import Layout from '../components/Layout'
import Login from '../components/Login'
const Contact = () => {

    const [loggedIn, setLoggedIn] = React.useState()

    return <Layout>
        <Login />
    </Layout>
}

export default Contact