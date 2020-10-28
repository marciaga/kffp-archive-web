import { connect } from 'react-redux'
import moment from 'moment';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import CopyButton from './copy-button';
import { getFileNames, setAudioSource } from '../actions';

const formatHour = num => (
    <div>
        <span className='display-time'>
            {moment().hour(num).format('h:00 A')}
        </span>
        <style jsx>{`
            .display-time {
                font-size: 1.3em;
            }
        `}</style>
    </div>
);


const renderCopyButtons = (items) => {
    if (!items) {
        return (
            <span></span>
        );
    }

    return items.map((item, i) => {
        return (
            <CopyButton
                key={i}
                text={item.url}
            />
        )
    })
}

const renderList = (items = [], dispatch) => {
    if (!items.length) {
        return (
            <h3>Nothing to show.</h3>
        );
    }

    return items.map((item, i) => {
        const { hour, url } = item;

        return (
            <ListItem
                onClick={() => dispatch(setAudioSource(url))}
                primaryText={formatHour(hour)}
                key={i}
            />
        );
    });
};

const formatDate = (date) => {
    if (!date) {
        return '';
    }

    const dateStr = moment(date, 'YYYY/MM/DD');

    return dateStr.format('MM/DD/YYYY');
};

const ArchiveList = (props) => {
    const { currentDay, dispatch } = props;
    const handleChange = (dateString, dateObject) => dispatch(
        getFileNames(dateString, dateObject)
    );
    const { fileNames, date } = currentDay;

    return (
        <div className="md-grid">
            <div className="md-cell md-cell--12 archive-container md-paper md-paper--1">
                <DatePicker
                    id="date-picker"
                    label="Select a date"
                    className="md-cell"
                    style={{ margin: '0 auto 15px' }}
                    onChange={handleChange}
                />
                <h2 className="center">{formatDate(date)}</h2>
                <div
                    className="md-grid md-grid--no-spacing"
                    style={{ justifyContent: 'center' }}
                >

                <List className="md-cell md-cell--5-offset md-cell--2">
                    <div className="center">
                        {renderList(fileNames, dispatch)}
                    </div>
                </List>
                <List className="md-cell md-cell--1">
                    {renderCopyButtons(fileNames)}

                </List>
                </div>
                <style jsx>{`
                    .archive-container {
                        margin-bottom: 86px;

                    }
                    .center {
                        text-align: center;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default connect(state => state)(ArchiveList);
