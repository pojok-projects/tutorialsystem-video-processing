const ffmpeg = require('fluent-ffmpeg')
const generator = require('../controller/generator')

module.exports = {
    GenerateThumbnail: async (root, parameter, context) => {
        const {
            input: {
                url,
                limit
            }
        } = parameter

        return await generator.GenThumbnail(url, limit)
    },
    GenerateMetadata: async (root, parameter, context) => {
        const {
            input: {
                url
            }
        } = parameter

        return await generator.GenMetadata(url)
    }
}