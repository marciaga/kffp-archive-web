import Head from 'next/head';
import Header from './header';

const Layout = (props) => (
    <div>
        <Head>
            <meta charset="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://unpkg.com/react-md@1.16.1/dist/react-md.indigo-pink.min.css" />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Material+Icons' />
            <link rel="icon" href="https://s3-us-west-2.amazonaws.com/freeformpdx-images/icons/cropped-record-favicon-1.png" sizes="32x32" />
            <link rel="icon" href="https://s3-us-west-2.amazonaws.com/freeformpdx-images/icons/cropped-record-favicon-1.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="https://s3-us-west-2.amazonaws.com/freeformpdx-images/icons/cropped-record-favicon-1.png" />
        </Head>
        <Header />
        {props.children}
    </div>
);

export default Layout;
