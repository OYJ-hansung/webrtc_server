const fs = require('fs');
module.exports = {
    devServer: {
        https: true,
        https: {
            key: fs.readFileSync('/etc/letsencrypt/live/i10a404.p.ssafy.io/privkey.pem'),
            cert: fs.readFileSync('/etc/letsencrypt/live/i10a404.p.ssafy.io/cert.pem'),
            ca: fs.readFileSync('/etc/letsencrypt/live/i10a404.p.ssafy.io/chain.pem'),
        },
        hot: true,
        allowedHosts: "all",
    },
};