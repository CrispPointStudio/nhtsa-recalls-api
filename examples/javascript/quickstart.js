// NHTSA Vehicle Recalls API quick start (Node 18+ or any runtime with global fetch)
// Get a free key: https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-nhtsa-vehicle-recalls

const HOST = 'live-nhtsa-vehicle-recalls.p.rapidapi.com';
const API_KEY = 'YOUR_RAPIDAPI_KEY';

async function getRecalls(year, make, model, limit = 50) {
  const url = new URL(`https://${HOST}/api/recalls`);
  url.searchParams.set('year', String(year));
  url.searchParams.set('make', make);
  url.searchParams.set('model', model);
  url.searchParams.set('limit', String(limit));

  const response = await fetch(url, {
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': HOST,
    },
  });
  if (response.status === 404) return { count: 0, total: 0, recalls: [] }; // no recalls on file
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  }
  return response.json(); // { count, total, recalls: [...] }
}

getRecalls(2021, 'Toyota', 'Camry', 25)
  .then((data) => {
    console.log(`${data.count} of ${data.total} recalls:`);
    for (const r of data.recalls) {
      console.log(`- ${r.Component}: ${r.Consequence}`);
    }
  })
  .catch((err) => console.error('Error fetching NHTSA recalls:', err));
