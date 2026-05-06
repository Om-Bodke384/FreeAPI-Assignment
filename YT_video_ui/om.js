async function loadVideos() {
                try {
                    const res = await fetch('https://api.freeapi.app/api/v1/public/youtube/videos');
                    const data = await res.json();

                    if (!data.success || !data.data.data) {
                        throw new Error('Failed to fetch videos');
                    }

                    const videos = data.data.data;
                    const container = document.getElementById('video-container');
                    container.innerHTML = '';

                    videos.forEach(videoItem => {
                        const videoId = videoItem.items?.id;
                        const title = videoItem.items?.snippet?.title;

                        if (videoId) {
                            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                            const card = document.createElement('div');
                            card.style.display = 'flex';
                            card.style.flexDirection = 'column';
                            card.style.gap = '8px';

                            const iframe = document.createElement('iframe');
                            iframe.src = embedUrl;
                            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                            iframe.allowFullscreen = true;

                            const caption = document.createElement('div');
                            caption.textContent = title || 'Untitled video';
                            caption.style.fontSize = '14px';
                            caption.style.color = 'red';
                            caption.style.lineHeight = '1.3';
                            caption.style.marginTop = '4px';
                            caption.style.backgroundColor = 'yellow';

                            card.appendChild(iframe);
                            card.appendChild(caption);
                            container.appendChild(card);
                        }
                    });

                    document.getElementById('loading').style.display = 'none';
                } catch (error) {
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('error').style.display = 'block';
                    document.getElementById('error').textContent = 'Error: ' + error.message;
                }
            }

            loadVideos();