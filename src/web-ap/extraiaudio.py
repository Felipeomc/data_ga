from moviepy.editor import VideoFileClip
import os

def extract_audio_in_parts(video_path, output_folder, max_size_mb=50, bitrate='128k'):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    with VideoFileClip(video_path) as video:
        full_duration = video.duration
        bytes_per_second = int(bitrate[:-1]) / 8 * 1024
        seconds_per_part = (max_size_mb * 1024 * 1024) / bytes_per_second

        start = 0
        part_num = 1

        while start < full_duration:
            end = min(start + seconds_per_part, full_duration)
            with video.subclip(start, end) as subclip:
                part_audio = subclip.audio
                part_output_path = os.path.join(output_folder, f"audio_part_{part_num}.mp3")
                part_audio.write_audiofile(part_output_path, codec='mp3', bitrate=bitrate)
                part_num += 1
            start = end


video_path = 'entrevista3.mp4'  # Path to your video file
output_folder = 'output_audio_parts'  # Folder where to save the audio parts
extract_audio_in_parts(video_path, output_folder)
