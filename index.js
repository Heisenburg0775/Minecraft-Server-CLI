const fetch = require("node-fetch")
exports.Hostname = PingHost;
function PingHost(name){
    const ip = process.argv[2]
    const info = fetch(`https://eu.mc-api.net/v3/server/ping/${name}`).then(res => res.json());
    info.then(result => result)

}