module.exports = {
  "db": process.env.MONGODB || process.env.MONGOLAB_URI || "mongodb://localhost:27017",
  "server": {
    "port": process.env.PORT || 3000,
    "address": "0.0.0.0"
  },
  "accessControl": {
    "allowOrigin": "*",
    "allowMethods": "GET,POST,PUT,DELETE,HEAD,OPTIONS",
    "allowCredentials": false
  },
  "mongoOptions": {
    "serverOptions": {},
    "dbOptions": {
      "w": 1
    }
  },
  "humanReadableOutput": true,
  "collectionOutputType": "json",
  "urlPrefix": ""
}
