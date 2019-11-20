const ffmpeg = require('fluent-ffmpeg');
const path = require('path')
const s3 = require('./s3')

module.exports = {
    GenThumbnail: (url, limit) => {
        return new Promise((resolve, reject) => {
            ffmpeg(url)
                .screenshots({
                    count: limit,
                    filename: 'thumbnail-%b-at-%s-seconds.png',
                    folder: '/tmp/screenshoot',
                })
                .on('error', (err) => {
                    reject(err)
                })
                .on('end', () => {
                    const s3url = s3.FileUpload('/tmp/screenshoot')
                    resolve(s3url)
                })
        })
    },
    GenMetadata: (url) => {
        return new Promise((resolve, reject) => {
            ffmpeg.ffprobe(url, (err, metadata) => {
                if (err) {
                    reject(err)
                }

                const result = {
                    width: metadata.streams[0].width,
                    height: metadata.streams[0].height,
                    duration: metadata.format.duration,
                    size: metadata.format.size,
                    format: path.basename(metadata.format.filename).split('.')[1]
                }

                resolve(result)
            });
        })
    }
}