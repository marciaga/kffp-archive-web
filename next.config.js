const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.FILENAME_PREFIX': JSON.stringify(process.env.FILENAME_PREFIX),
        'process.env.BUCKET_NAME': JSON.stringify(process.env.BUCKET_NAME),
        'process.env.AWS_REGION': JSON.stringify(process.env.AWS_REGION),
        'process.env.IDENTITY_POOL_ID': JSON.stringify(process.env.IDENTITY_POOL_ID),
      })
    );

    return config;
  },
};
