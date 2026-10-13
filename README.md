# NHTSA Vehicle Recalls API — Car Recalls by Year, Make & Model as JSON

REST API for official US Department of Transportation NHTSA vehicle safety recalls. Look up every recall for a given model year, make, and model and get clean JSON with the affected component, the safety consequence, and the manufacturer's remedy. Built for automotive apps, dealer inventory tools, fleet management, and used-car marketplaces.

👉 **[Get a free API key on RapidAPI](https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-nhtsa-vehicle-recalls)**

---

## Quick Start

```bash
curl 'https://live-nhtsa-vehicle-recalls.p.rapidapi.com/api/recalls?year=2021&make=Toyota&model=Camry' \
  -H 'X-RapidAPI-Key: YOUR_RAPIDAPI_KEY' \
  -H 'X-RapidAPI-Host: live-nhtsa-vehicle-recalls.p.rapidapi.com'
```

Full examples: [Python](examples/python/quickstart.py) · [JavaScript](examples/javascript/quickstart.js) · [curl](examples/curl.sh)

---

## Endpoint Reference

Base URL: `https://live-nhtsa-vehicle-recalls.p.rapidapi.com`

### `GET /api/recalls`

Returns all NHTSA safety recalls for one vehicle, identified by model year, make, and model.

#### Query Parameters

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `year` | integer | Yes | — | Model year, e.g. `2021`. |
| `make` | string | Yes | — | Vehicle make, e.g. `Toyota`, `Ford`, `Honda`. Case-insensitive. |
| `model` | string | Yes | — | Vehicle model, e.g. `Camry`, `F-150`, `Civic`. Case-insensitive. |
| `limit` | integer | No | `50` | Maximum recalls to return, 1 to 250. |

#### Response

A JSON object with a count and the recall list.

| Field | Type | Description |
| :--- | :--- | :--- |
| `count` | integer | Number of recalls in this response |
| `total` | integer | Total recalls NHTSA has for this vehicle |
| `recalls` | array | Recall objects, see below |
| `recalls[].Manufacturer` | string | Manufacturer filing the recall |
| `recalls[].Component` | string | Affected system, in NHTSA's component taxonomy |
| `recalls[].Summary` | string | What is wrong and which vehicles are affected |
| `recalls[].Consequence` | string | The safety risk |
| `recalls[].Remedy` | string | What the manufacturer will do, usually free of charge |

A vehicle with no recalls on file returns HTTP 404 with a message, so a 404 means "no recalls", not "unknown vehicle".

#### Sample Response

`GET /api/recalls?year=2021&make=Toyota&model=Camry`

```json
{
  "count": 1,
  "total": 1,
  "recalls": [
    {
      "Manufacturer": "Toyota Motor Engineering & Manufacturing",
      "Component": "AIR BAGS:SENSOR:OCCUPANT CLASSIFICATION",
      "Summary": "Toyota Motor Engineering & Manufacturing (Toyota) is recalling certain 2020-2021 Avalon, Avalon Hybrid, Corolla, Highlander, Highlander Hybrid, RAV4, RAV4 Hybrid, Lexus ES350, Lexus RX350, Lexus RX450H, 2021 Sienna Hybrid, Lexus ES250, 2020-2022 Camry, Camry Hybrid, and ES300H vehicles.  A short circuit may develop in the Occupant Classification System (OCS) sensor, preventing the front passenger air bag from deploying.",
      "Consequence": "An air bag that does not deploy during a crash increases the risk of injury.",
      "Remedy": "Dealers will inspect and replace the sensor as necessary, free of charge.  Interim letters notifying owners of the safety risk were mailed in February 2024. Some final remedy owner letters were mailed October 31, 2024. Letters will continue to be mailed in phases through January 2026. Owners may contact Toyota customer service at 1-800-331-4331.  Toyota's number for this recall is 23TB15/23TA15 Lexus 23LB03/23LA03."
    }
  ]
}
```

---

## Pricing

All plans are billed through RapidAPI. Full details on the [pricing tab](https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-nhtsa-vehicle-recalls/pricing).

| Plan | Price | Requests / month | Rate limit |
| :--- | :--- | :--- | :--- |
| Basic | Free | 100 | 1,000 per hour |
| Pro | $9.99 / month | 10,000 | — |
| Ultra | $29.99 / month | 50,000 | — |

---

## Data Source

Data comes from the [NHTSA recalls database](https://www.nhtsa.gov/recalls), the US government's authoritative record of vehicle safety recalls.

**Refresh frequency: real-time.** Responses reflect NHTSA's database as it stands at the moment of the request. New recalls are available as soon as NHTSA publishes them.

## License

The example code in this repository is released under the [MIT License](LICENSE). The API service itself and the data it returns are governed by the RapidAPI terms of service and NHTSA data terms, not by this license.

---

👉 **[Subscribe on RapidAPI](https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-nhtsa-vehicle-recalls)** · Built by Crisp Point Studio
