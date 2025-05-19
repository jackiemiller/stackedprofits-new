import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

interface VideoExplainerProps {
  videoId: string;
  platform: 'youtube' | 'vimeo';
  title: string;
  subtitle?: string;
  thumbnailUrl?: string;
}

export default function VideoExplainer({
  videoId,
  platform = 'youtube',
  title,
  subtitle,
  thumbnailUrl,
}: VideoExplainerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Default dimensions with 16:9 aspect ratio
  const width = '100%';
  const height = '100%';

  // Generate embed URL based on platform
  const getEmbedUrl = () => {
    if (platform === 'youtube') {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else if (platform === 'vimeo') {
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return '';
  };

  // If no custom thumbnail is provided, use the platform's default thumbnail
  const getDefaultThumbnail = () => {
    if (platform === 'youtube') {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    // For Vimeo, we'd need to use their API to get thumbnails
    // As a fallback, we'll use a gradient background
    return '';
  };

  const actualThumbnail = thumbnailUrl || getDefaultThumbnail();

  const handlePlay = () => {
    setIsPlaying(true);
  };
  
  // Add structured data for the video
  useEffect(() => {
    if (videoId && (platform === 'youtube' || platform === 'vimeo')) {
      try {
        // Remove any existing video structured data
        const existingScript = document.getElementById('video-structured-data');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
        
        // Create the structured data
        const script = document.createElement('script');
        script.id = 'video-structured-data';
        script.type = 'application/ld+json';
        
        // Generate video URL based on platform
        const videoUrl = platform === 'youtube' 
          ? `https://www.youtube.com/watch?v=${videoId}`
          : `https://vimeo.com/${videoId}`;
          
        // Set up structured data
        const videoStructuredData = {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": title,
          "description": subtitle || "Learn how our services can help your local business get more leads and clients",
          "thumbnailUrl": actualThumbnail,
          "uploadDate": new Date().toISOString().split('T')[0],
          "contentUrl": videoUrl,
          "embedUrl": getEmbedUrl().replace('?autoplay=1', ''),
          "potentialAction": {
            "@type": "SeekToAction",
            "target": `${videoUrl}?t={seek_to_second_number}`,
            "startOffset-input": "required name=seek_to_second_number"
          }
        };
        
        script.textContent = JSON.stringify(videoStructuredData);
        document.head.appendChild(script);
      } catch (error) {
        console.error("Error adding video structured data:", error);
      }
    }
    
    return () => {
      try {
        const existingScript = document.getElementById('video-structured-data');
        if (existingScript && document.head.contains(existingScript)) {
          document.head.removeChild(existingScript);
        }
      } catch (error) {
        console.error("Error removing video structured data:", error);
      }
    };
  }, [videoId, platform, title, subtitle, actualThumbnail]);

  return (
    <section className="w-full max-w-5xl mx-auto my-16 px-4" aria-labelledby="video-heading">
      <div className="text-center mb-8">
        <h2 id="video-heading" className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
      </div>
      
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
        {!isPlaying ? (
          <div 
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            style={{
              backgroundImage: actualThumbnail ? `url(${actualThumbnail})` : 'linear-gradient(135deg, #1a365d 0%, #2563eb 100%)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            role="img"
            aria-label="Video thumbnail for explainer video"
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <Button 
              onClick={handlePlay}
              size="lg" 
              variant="outline"
              className="relative z-10 rounded-full w-20 h-20 flex items-center justify-center border-2 hover:scale-110 transition-transform duration-200 bg-primary text-primary-foreground hover:bg-primary/90"
              aria-label="Play video"
            >
              <Play size={36} className="ml-1" />
              <span className="sr-only">Play {title} video</span>
            </Button>
          </div>
        ) : (
          <iframe
            src={getEmbedUrl()}
            width={width}
            height={height}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
          ></iframe>
        )}
      </div>
    </section>
  );
}