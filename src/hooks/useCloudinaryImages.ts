import { useState, useEffect } from 'react';

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
}

export const useCloudinaryImages = () => {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const timestamp = Math.round((new Date()).getTime() / 1000);
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/das743qa2/resources/search`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + btoa('976649276322222:v1Eu595rk1a8u-V9qs-lt79rim8')
            },
            body: JSON.stringify({
              expression: 'folder:realizacje',
              max_results: 500
            })
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }

        const data = await response.json();
        setImages(data.resources);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { images, loading, error };
};