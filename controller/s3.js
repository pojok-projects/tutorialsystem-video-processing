const fs = require('fs')
const dotenv = require('dotenv').config()
const path = require('path')
const AWS = require('aws-sdk')
const S3 = new AWS.S3({
    accessKeyId: process.env.S3KEY,
    secretAccessKey: process.env.S3SECRET
})

module.exports = {
    FileUpload: async (folder) => {

        const list = fs.readdirSync(folder)

        const promises = list.map((filename) => {
            const filepath = folder + '/' + filename
            const fileContent = fs.readFileSync(filepath)

            const params = {
                Bucket: process.env.S3BUCKETNAME,
                Key: path.basename(filename),
                Body: fileContent
            }

            return S3.upload(params).promise()
                .then((res) => {
                    return res
                })
        })

        return Promise.all(promises).then((values) => {
            return values
        })

    }
}