import NavBar from './Navbar'
import Head from 'next/head'

const Layout = (props) => {
    return <div>
        <Head>
            <title>hey</title>
        </Head>
        <NavBar />
        <div id="main-content-container">
            {props.children}
        </div>
        <style jsx>{`
            #main-content-container {
                margin: 50px;
            }
        `}</style>
    </div>
}

export default Layout