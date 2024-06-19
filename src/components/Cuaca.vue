<template>
  <q-page class="flex flex-center custom-page">
    <div style="max-width: 600px; width: 100%">
      <q-card class="q-pa-md q-mt-md" bordered>
        <q-card-section class="text-center">
          <div class="text-h6">Weather App</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit.stop>
            <q-input
              v-model="location"
              label="Enter Location"
              @keyup.enter="getWeather"
              outlined
              dense
              autofocus
              clearable
            />
            <q-btn
              @click="getWeather"
              color="primary"
              label="Get Weather"
              dense
              class="q-mt-md"
              style="width: 100%"
              type="button"
            />
          </q-form>
        </q-card-section>
        <q-card-section v-if="weatherData">
          <div class="text-h6">Location: {{ weatherData.name }}</div>
          <div class="text-subtitle1">Weather in {{ weatherData.name }}</div>
          <div class="q-mt-md">Temperature: {{ weatherData.main.temp }}°C</div>
          <div>Weather: {{ weatherData.weather[0].description }}</div>
          <div>Humidity: {{ weatherData.main.humidity }} %</div>
          <div>Wind Speed: {{ weatherData.wind.speed }} m/s</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  name: "Cuaca",

  data() {
    return {
      location: "",
      weatherData: null,
      apiKey: "42cd66ffa0d85ba5b4066906dadf6837",
      apiUrl: "https://api.openweathermap.org/data/2.5/weather",
    };
  },
  methods: {
    async getWeather() {
      try {
        const response = await axios.get(
          `${this.apiUrl}?q=${this.location}&appid=${this.apiKey}&units=metric`
        );
        this.weatherData = response.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
        this.weatherData = null;
      }
    },
  },
};
</script>

<style scoped>
.q-mt-md {
  margin-top: 1rem;
}
.custom-page {
  margin-top: -3rem;
}
</style>
