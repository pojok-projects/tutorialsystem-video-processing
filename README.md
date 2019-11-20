# tutorialsystem-video-processing

## GQL Test

### Generate Screenshoot or thumbnail
- Request
```
mutation {
  GenerateThumbnail(input: {url: "https://pfn-testing-video.s3.ap-southeast-1.amazonaws.com/w7samplevideo.mp4", limit: 3}) {
    ETag,
    Location,
    Key,
    Bucket
  }
}
```

- Response
```
{
  "data": {
    "GenerateThumbnail": [
      {
        "ETag": "\"352ca828540033ea6371404d4cc2c3bd\"",
        "Location": "https://pfn-testing-video.s3.amazonaws.com/thumbnail-w7samplevideo-at-15.0316835-seconds.png",
        "Key": "thumbnail-w7samplevideo-at-15.0316835-seconds.png",
        "Bucket": "pfn-testing-video"
      },
      {
        "ETag": "\"83896e6e72923082d0a30d8b41eefea2\"",
        "Location": "https://pfn-testing-video.s3.amazonaws.com/thumbnail-w7samplevideo-at-22.54752525-seconds.png",
        "Key": "thumbnail-w7samplevideo-at-22.54752525-seconds.png",
        "Bucket": "pfn-testing-video"
      },
      {
        "ETag": "\"6290d44421f049fe11d884d8da817caa\"",
        "Location": "https://pfn-testing-video.s3.amazonaws.com/thumbnail-w7samplevideo-at-7.51584175-seconds.png",
        "Key": "thumbnail-w7samplevideo-at-7.51584175-seconds.png",
        "Bucket": "pfn-testing-video"
      }
    ]
  }
}
```

### Get Metadata
- Request
```
mutation {
	GenerateMetadata(input: {url: "https://pfn-testing-video.s3.ap-southeast-1.amazonaws.com/w7samplevideo.mp4"}) {
    width,
    height,
    duration,
    size,
    format
  }
}
```

- Response
```
{
  "data": {
    "GenerateMetadata": {
      "width": 1280,
      "height": 720,
      "duration": 30.069833,
      "size": 8723053,
      "format": "mp4"
    }
  }
}
```