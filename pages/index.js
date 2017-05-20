import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/layout';
import ArchiveList from '../components/archive-list';
import AudioPlayer from '../components/audio-player';
import { initStore } from '../configure-store';

const Index = (props) => (
    <Layout>
        <div className="md-toolbar-relative">
            <ArchiveList dispatch={props.dispatch} />
            <AudioPlayer url={props.audioSource} />
            <style global jsx>{`body { margin: 0; }`}</style>
        </div>
    </Layout>
);

const mapDispatchToProps = dispatch => ({
    dispatch
});

Index.getInitialProps = ({ store, isServer }) => {
    const { dispatch } = store;

    return {
        dispatch,
        isServer
    };
};

export default withRedux(
    initStore,
    state => ({ audioSource: state.audioSource }),
    mapDispatchToProps
)(Index);
