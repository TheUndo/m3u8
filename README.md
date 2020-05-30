## Description
Download segmented video (.ts) from m3u8 playlist and merge the segments into one video (.mp4/.mv4/.\*) file for saving.
## Where to use
You may modify the code to work on server side JavaScript runtimes such as Node JS however it's primarily for client side usage. It's meant to extend video players to allow users to download m3u8 playlists. This repo was made out of frustration for the lack of downloading features in hls.js and video.js.
## Installation
### Normal install
Download m3u8.js and add this to your \<head\> tag
```html
<script type="text/javascript" src="/path/to/m3u8.js></script>
```
### Pylyfilled install
To make this work on older browsers download m3u8-polyfill.js and add this to your \<head\> tag
```html
<script type="text/javascript" src="/path/to/m3u8-polyfill.js></script>
```
## Getting started
### Simple setup
First create a new instance of M3U8 and start a new download
```js
const m3u8 = new M3U8();

const download = m3u8.start("https://example.com/videos/playlist.m3u8");
```
**Please note**: the m3u8 file must be a normal playlist containing one video __NOT__ a master playlist. 

### With events
```js
const m3u8 = new M3U8();

const download = m3u8.start("https://example.com/videos/playlist.m3u8");

download.on("progress", progress => {

  console.log("progress"); // See Classes > M3U8.events.finished

}).on("finished", finished => {

  console.log(finished); // See Classes > M3U8.events.finished

}).on("error", message => {

  console.error(message); // See Classes > M3U8.events.error

}).on("aborted", () => {

  console.log("Download aborted");

});
```
All events are optional, if not specified they will be omitted. If you're debugging/developing it's recommended to handle error events. In addition it's recommended to handle errors for best user experience.
## Methods
| Method name | Description | Syntax | Parameters |
--- | --- | --- | ---
| M3U8 | Initiates a new M3U8 instance. Returns {start} | new M3U8() |  No parameters are expected |
| M3U8.start | Starts downloading the file | M3U8.start(\<**url**\> [, **options**]) | **url**: URL to the location of the video playlist. Required: yes. **options**: See [M3U8.start.options](#m3u8-start-options) class. Required: no. |
| M3U8.start.abort | Aborts the download and calls [M3U8.events.aborted](#m3u8-events-aborted) | M3U8.abort() | No parameters are expected |
## Classes
### M3U8-start-options
M3U8.start.options
| Key | Default | Description | Syntax | Required | Read only |
--- | --- | --- | --- | --- | ---
| filename | "video.mp4" | The output filename | filename: String <filename> | No | No |
| returnBlob | false | If set to true it will not trigger save file. Get data by [M3U8.events.finished](#m3u8-events-finished) | returnBlob: Boolean | No | No |
#### M3U8-events-progress
M3U8.events.progress

Fired every time one video segment (.ts) is downlaoded
| Key | Default | Description | Syntax | Always set | Read only |
--- | --- | --- | --- | --- | ---
| segment | undefined | The latest segment downloaded | segmen: Number | No | Yes |
| total | undefined | The total amount of segments in the playlist | total: Number | No | Yes |
| percentage | undefined | Percentage (segment / total) to 3 decimal points | percentage: String | No | Yes |
| downloaded | undefined | The amount downloaded in bytes (B) (prefixed) | downloaded: String | No | Yes |
| status | "Downloading..." | Downloading/processing/saving status | status: String | Yes | Yes |
### M3U8.events.finished
M3U8.events.finished
Fired when playlist is finished downloading and has merged
| Key | Default | Description | Syntax | Always set | Read only |
--- | --- | --- | --- | --- | ---
| status | "Successfully downloaded video" | Video save status | status: String | Yes | Yes |
| data | Blob | Video data as Blob | data: Blob | Yes | Yes |
### M3U8-events-error
M3U8.events.error

Fired on error
| parameter | Default | Description | Syntax | Always set | Read only |
--- | --- | --- | --- | --- | ---
| 1st | "An error occurred" | Error message as String | String error message | Yes | Yes |
### M3U8-events-aborted
M3U8.events.aborted
  
Fired when (M3U8.start.abort)(#methods) is called
| parameter | Default | Description | Syntax | Always set | Read only |
--- | --- | --- | --- | --- | ---
| 1st | "An error occurred" | Error message as String | String error message | Yes | Yes |
