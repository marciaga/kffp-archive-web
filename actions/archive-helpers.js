import AWS from 'aws-sdk';
import moment from 'moment';

const fileNamePrefix = process.env.FILENAME_PREFIX;
const bucket = process.env.BUCKET_NAME;
const bucketRegion = process.env.AWS_REGION;
const IdentityPoolId = process.env.IDENTITY_POOL_ID;

AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId
    })
});

const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: bucket }
});

const extractKeys = results => results.map(result => result.Key);

const generateURI = path => `${fileNamePrefix}${path}`;

const transformFileNames = (data) => data.map((d) => {
    const hour = d.split('-').pop().replace(/.mp3/, '');

    return {
        hour: parseInt(hour),
        url: generateURI(d)
    };
});

const transformDate = (dateString) => {
    const date = moment(dateString, 'M/DD/YYYY');

    return date.format('YYYY/MM/DD');
};

const isValidResponse = (ary) => {
    const validStorageTypes = ary.filter(o => o.StorageClass !== 'GLACIER');

    return validStorageTypes.length > 0;
};

const getFileNamesFromS3 = async (date) => {
    try {
        const prefix = `${date}/`;
        const { Contents } = await s3.listObjectsV2({
            Prefix: prefix,
            Delimiter: '/'
        }).promise();

        if (!isValidResponse(Contents)) {
            return [];
        }

        const result = extractKeys(Contents);

        return transformFileNames(result);
    } catch (e) {
        return null;
    }
};

export { getFileNamesFromS3, transformDate };
