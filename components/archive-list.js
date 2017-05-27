import { connect } from 'react-redux'
import moment from 'moment';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import { getFileNames, setAudioSource } from '../actions';

const formatHour = num => moment().hour(num).format('h:00 A');

const renderList = (items, dispatch) => {
    if (!items) {
        return (
            <h3>Nothing to show right now.</h3>
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
        <div className="md-grid archive-container">
            <List className="md-cell md-cell--12 md-paper md-paper--1">
                <div className="center">
                    <DatePicker
                        id="date-picker"
                        label="Select a date"
                        className="md-cell"
                        style={{margin: '0 auto'}}
                        onChange={handleChange}
                    />
                    <h2>{formatDate(date)}</h2>
                    {renderList(fileNames, dispatch)}
                </div>
            </List>
            <style jsx>{`
                .archive-container {
                    margin-bottom: 50px;
                }
                .center {
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default connect(state => state)(ArchiveList);
