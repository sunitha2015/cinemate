const TMDB_API_BASE = 'https://api.themoviedb.org/3';

const headers = {
  accept: 'application/json',
  Authorization: 'Bearer YOUR_TMDB_BEARER_TOKEN_HERE',
};

export const fetchFromTMDB = async (endpoint: string) => {
  try {
    const response = await fetch(`${TMDB_API_BASE}${endpoint}`, {
      method: 'GET',
      headers,
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error('TMDB fetch failed:', err);
    throw err;
  }
};
