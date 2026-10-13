"""NHTSA Vehicle Recalls API quick start (Python 3, requires `pip install requests`).

Get a free key:
https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-nhtsa-vehicle-recalls
"""

import requests

HOST = "live-nhtsa-vehicle-recalls.p.rapidapi.com"
API_KEY = "YOUR_RAPIDAPI_KEY"

HEADERS = {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": HOST,
}


def fetch_recalls(year: int, make: str, model: str, limit: int = 50) -> dict:
    """Return {"count", "total", "recalls"} for one vehicle. Empty result if NHTSA has no recalls."""
    response = requests.get(
        f"https://{HOST}/api/recalls",
        headers=HEADERS,
        params={"year": year, "make": make, "model": model, "limit": limit},
        timeout=15,
    )
    if response.status_code == 404:  # no recalls on file for this vehicle
        return {"count": 0, "total": 0, "recalls": []}
    response.raise_for_status()
    return response.json()


if __name__ == "__main__":
    data = fetch_recalls(2021, "Toyota", "Camry", limit=25)
    print(f"{data['count']} of {data['total']} recalls:")
    for r in data["recalls"]:
        print(f"- {r['Component']}: {r['Consequence']}")
