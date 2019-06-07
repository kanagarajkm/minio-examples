"use strict";
exports.__esModule = true;
var minio_1 = require("minio");
var s3Client = new minio_1.Client({
    endPoint: "play.minio.io",
    port: 9000,
    useSSL: true,
    accessKey: "Q3AM3UQ867SPQQA43P2F",
    secretKey: "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG"
});
s3Client
    .listObjects("uploads", "", true)
    .on("data", function (item) {
    console.log(item);
})
    .on("error", function (err) {
    console.log(err);
})
    .on("end", function () {
    console.log("end");
});
