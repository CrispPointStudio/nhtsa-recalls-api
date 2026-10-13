#!/usr/bin/env bash
# NHTSA Vehicle Recalls API quick start (curl)
# Get a free key: https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-nhtsa-vehicle-recalls

curl --request GET \
  --url 'https://live-nhtsa-vehicle-recalls.p.rapidapi.com/api/recalls?year=2021&make=Toyota&model=Camry&limit=25' \
  --header 'X-RapidAPI-Key: YOUR_RAPIDAPI_KEY' \
  --header 'X-RapidAPI-Host: live-nhtsa-vehicle-recalls.p.rapidapi.com'
