import { useEffect, useState } from "react";
import axios from "axios";

interface Artist {
  name: string;
  images: { url: string }[];
  external_urls: { spotify: string };
}

const Spotify = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (!storedAccessToken) {
      window.location.href = "http://localhost:4000/login";
    } else {
      setAccessToken(storedAccessToken);
    }
  }, []);

  useEffect(() => {
    if (!accessToken) return;

    const fetchTopArtists = async () => {
      try {
        const artistsResponse = await axios.get(
          "https://api.spotify.com/v1/me/top/artists",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setArtists(artistsResponse.data.items);
      } catch (error) {
        console.error("Error fetching top artists:", error);
      }
    };

    fetchTopArtists();
  }, [accessToken]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Top Artists on Spotify</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {artists.map((artist) => (
          <div key={artist.name} className="p-4 border rounded-lg shadow">
            <img
              src={artist.images[0]?.url}
              alt={artist.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-2">
              <h2 className="text-xl font-semibold">{artist.name}</h2>
              <a
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on Spotify
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spotify;
