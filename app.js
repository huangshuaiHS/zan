//app.js
const util = require('./utils/util')
const api = require('./api')
const loading = require('./utils/loading')
const config = require('./utils/config')
const u8ad = require('./utils/u8ad_sdk.min.js');

App({
    onLaunch: function () {
        
    },
    globalData: {
        util,
        api,
        config,
        loading
    }
})