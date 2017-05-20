import Head from 'next/head';
import Header from './header';

const Layout = (props) => (
    <div>
        <Head>
            <link rel="stylesheet" href='https://unpkg.com/react-md/dist/react-md.indigo-pink.min.css' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Material+Icons' />
        </Head>
        <Header />
        {props.children}
    </div>
);

export default Layout;
