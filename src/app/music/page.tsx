import Image from "next/image";
export const dynamic = 'force-static'

async function getSpotifyToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_SECRET, SPOTIFY_REFRESH_TOKEN } =
    process.env;

  if (!SPOTIFY_CLIENT_ID) {
    throw new Error("Missing SPOTIFY_CLIENT_ID");
  }

  if (!SPOTIFY_SECRET) {
    throw new Error("Missing SPOTIFY_SECRET");
  }
  
  if (!SPOTIFY_REFRESH_TOKEN) {
    throw new Error("SPOTIFY_REFRESH_TOKEN");
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=refresh_token&refresh_token=${SPOTIFY_REFRESH_TOKEN}&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_SECRET}`,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Spotify API error: ${JSON.stringify(error)}`);
  }

  return await response.json();
}

async function getMe(token: string): Promise<SpotifyApi.UserObjectPrivate> {
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Spotify API error: ${JSON.stringify(error)}`);
  }

  return await response.json();
}

async function getMyTopArtists(
  token: string
): Promise<SpotifyApi.UsersTopArtistsResponse> {
  const response = await fetch(
    "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=5",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Spotify API error: ${JSON.stringify(error)}`);
  }

  return await response.json();
}

async function getMyTopTracks(
  token: string
): Promise<SpotifyApi.UsersTopTracksResponse> {
  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Spotify API error: ${JSON.stringify(error)}`);
  }

  return await response.json();
}

export default async function Music() {
  const spotifyToken = await getSpotifyToken();
  const me = await getMe(spotifyToken.access_token);
  const topArtists = await getMyTopArtists(spotifyToken.access_token);
  const topTracks = await getMyTopTracks(spotifyToken.access_token);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 border-2 border-white rounded-lg p-2 items-center">
        <span className="text-6xl">
          What is
          <a
            href={me.external_urls.spotify}
            target="blank"
            className="text-pink-400 hover:text-purple-700 hover:cursor-pointer"
          >
            {` ${me.display_name} `}
          </a>
          listening to?
        </span>
        <div>
          {me.images?.[0] && (
            <Image
              src={me.images[0].url}
              alt=""
              width={300}
              height={300}
              className="object-contai rounded-full w-full h-full border-2 border-white"
            />
          )}
        </div>
      </div>
      <div className="border-2 border-white rounded-lg p-2">
        <h2 className="mt-0">Fav Artists</h2>
        <ul>
          {topArtists.items.sort((a, b) => b.popularity - a.popularity).map((item) => (
            <li key={item.id}>
              <a
                className="group hover:text-pink-400 hover:-translate-1 hover:bg-neutral-950 hover:border-pink-400 transition-all border-2 border-white rounded-lg p-2 flex items-center gap-2"
                href={item.external_urls.spotify}
                target="blank"
              >
                {item.images?.[0]?.url && (
                  <div className="flex items-center justify-center min-w-32">
                    <Image
                      width={64}
                      height={64}
                      src={item.images[0]?.url}
                      alt=""
                      className="rounded-full w-16 h-16 border-2 border-white group-hover:border-pink-400 "
                    />
                  </div>
                )}
                <h2 className="text-4xl text-center grow">{item.name}</h2>
                <h2 className="text-8xl text-pink-400 group-hover:text-purple-700 px-2">{item.popularity}</h2>

              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-2 border-white rounded-lg p-2">
        <h2 className="mt-0">Fav Tracks</h2>
        <ul>
          {topTracks.items.sort((a, b) => b.popularity - a.popularity).map((item) => (
            <li key={item.id}>
              <a
                className="group hover:text-pink-400 hover:-translate-1 hover:bg-neutral-950 hover:border-pink-400 transition-all border-2 border-white rounded-lg p-2 flex items-center gap-2"
                href={item.external_urls.spotify}
                target="blank"
              >
                {item.album.images?.[0]?.url && (
                  <div className="flex items-center justify-center min-w-32">
                    <Image
                      width={64}
                      height={64}
                      src={item.album.images[0].url}
                      alt=""
                      className="rounded-full w-16 h-16 border-2 border-white group-hover:border-pink-400"
                    />
                  </div>
                )}
                <div className="flex flex-col grow gap-2">
                  <span className="text-4xl">{item.artists?.[0].name}</span>
                  <span className="text-4xl">{item.name}</span>
                </div>
                <span className="text-8xl text-pink-400 group-hover:text-purple-700 px-2 mb-auto">{item.popularity}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
