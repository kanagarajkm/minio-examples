import { Client, BucketItem } from "minio";

var s3Client = new Client({
  endPoint: "play.minio.io",
  port: 9000,
  useSSL: true,
  accessKey: "Q3AM3UQ867SPQQA43P2F",
  secretKey: "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG"
});

s3Client
  .listObjects("uploads", "", true)
  .on("data", (item: BucketItem) => {
    console.log(item);
  })
  .on("error", err => {
    console.log(err);
  })
  .on("end", () => {
    console.log("end");
  });
