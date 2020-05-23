const { compose } = require('ramda');
const withImages = require('next-images');

require('dotenv').config();

const addEnvironment = require('./next.env');
const resolveModules = require('./next.resolve');

module.exports = withImages({
  webpack: compose(resolveModules, addEnvironment),
});
