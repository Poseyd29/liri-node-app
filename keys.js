console.log('this is loaded');

var twitterKeys = {
    consumer_key: 'sJIqF7Sc9r70C1qPyLb9ETi3K',
    consumer_secret: 'VRw3nnAsNZwwcSvtPZ41lLKreayZ0Y3hmBWTQ2od392Rv0abYd',
    access_token_key: '925973981567619072-2Fs9ylH1O4P8qC9i9jiiQfbmsSqOeQB',
    access_token_secret: 'E8Zg6CTWPDvLpV9bOL1YYa1JvEfd78S20lrZxCgAIBOz3',

}

module.exports = twitterKeys;
exports.twitter = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  };