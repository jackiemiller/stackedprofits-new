import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

interface MobileVideoExplainerProps {
  videoId: string;
  platform: 'youtube' | 'vimeo';
  title: string;
  subtitle?: string;
  thumbnailUrl?: string;
}

export default function MobileVideoExplainer({
  videoId,
  platform = 'youtube',
  title,
  subtitle,
  thumbnailUrl,
}: MobileVideoExplainerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

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
    return '';
  };

  const actualThumbnail = thumbnailUrl || getDefaultThumbnail();

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="w-full mx-auto my-10 px-4" aria-labelledby="mobile-video-heading">
      <div className="text-center mb-6">
        <h2 id="mobile-video-heading" className="text-2xl font-bold mb-3">{title}</h2>
        {subtitle && <p className="text-md text-muted-foreground">{subtitle}</p>}
      </div>
      
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
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
              size="default" 
              variant="outline"
              className="relative z-10 rounded-full w-16 h-16 flex items-center justify-center border-2 hover:scale-110 transition-transform duration-200 bg-primary text-primary-foreground hover:bg-primary/90"
              aria-label="Play video"
            >
              <Play size={28} className="ml-1" />
              <span className="sr-only">Play {title} video</span>
            </Button>
          </div>
        ) : (
          <iframe
            src={getEmbedUrl()}
            width="100%"
            height="100%"
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