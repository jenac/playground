## .WEBM to .MP3
```bash
for FILE in *.webm; do
    echo -e "Processing video '\e[32m$FILE\e[0m'";
    ffmpeg -i "${FILE}" -vn -ab 128k -ar 44100 -y "${FILE%.webm}.mp3";
done;
```

## .MKV to .MP3
```bash
find . -type f -name "*.mkv" -exec bash -c 'FILE="$1"; ffmpeg -i "${FILE}" -vn -c:a libmp3lame -y "${FILE%.mkv}.mp3";' _ '{}' \;
```

## .MP4 to .MP3
```bash
find . -type f -iname "*.mp4" -exec bash -c 'FILE="$1"; ffmpeg -i "${FILE}" -vn -y "${FILE%.mp4}.mp3";' _ '{}' \;
```