require("dotenv/config")

module.exports = {
  systemId: process.env.SYSTEM_ID,
  s3Config: {
    bucket: process.env.S3_BUCKET,
    region: process.env.S3_REGION,
    expires: Number(process.env.S3_EXPIRES),
  },
  vxPermissionamento: {
    baseURL: process.env.VX_PERMISSIONAMENTO_URL
  },
}
