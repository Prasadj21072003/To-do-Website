export const weathericon = (weather) => {
  switch (weather) {
    case "Clear":
      return "☀️";

    case "Clouds":
      return "🌥️";

    case "Rain":
      return "🌧️";

    case "Drizzle":
      return "🌦️";

    case "Snow":
      return "❄️";

    case "Thunderstorm":
      return "⛈️";

    case "Mist":
      return "🌫️";

    case "Smoke":
      return "🌫️";

    case "Haze":
      return "🌫️";

    case "Dust":
      return "🌫️";

    case "Fog":
      return "🌫️";

    case "Ash":
      return "🌋";

    case "Squall":
      return "💨";

    case "Tornado":
      return "🌪️";
  }
};
