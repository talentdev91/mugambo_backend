var geoip = require("geoip-country");
const Log = require("../models/LogModel");

var config = require("../config/mongodb.json");

// DB connection
var mongoDB =
  "mongodb://" + config.database.host + "/" + config.database.database;
var ip = "207.97.227.239";
var geo = geoip.lookup(ip);

var mongoose = require("mongoose");
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    //don't show the log when it is test
    if (process.env.NODE_ENV !== "test") {
      console.log("Connected to %s", mongoDB);
      console.log("MongoDB is connected ... \n");
    }
    var nonSyncIps = async function () {
      var ips = await Log.find({
        $and: [{ ip: { $exists: true } }, { country: null }],
      });

      for (let i = 0; i < ips.length; i++) {
        var geo = geoip.lookup(ips[i].ip);
        if (geo === null || geo.country === undefined) continue;
        var country = geo.country;
        await Log.updateOne(
          { ip: ips[i] },
          { country: country },
          {
            upsert: true,
            setDefaultsOnInsert: true,
          }
        );
      }
    };
    nonSyncIps();
  })
  .catch((err) => {
    console.error("App starting error:", err.message);
    process.exit(1);
  });
