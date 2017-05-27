import ReactAudioPlayer from 'react-audio-player';

const styles = {
    bottom: 0,
    width: '100%',
    backgroundColor: 'white'
};

const AudioPlayer = ({ url }) => (
    <div style={styles} className="md-grid">
        <ReactAudioPlayer
            src={url}
            controls
            className="md-cell md-cell--12"
        />
    </div>
);

export default AudioPlayer;
