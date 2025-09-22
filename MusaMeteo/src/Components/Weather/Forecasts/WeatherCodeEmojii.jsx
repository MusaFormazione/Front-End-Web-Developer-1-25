/**
 * 0	Clear sky
 * 1, 2, 3	Mainly clear, partly cloudy, and overcast
 * 45, 48	Fog and depositing rime fog
 * 51, 53, 55	Drizzle: Light, moderate, and dense intensity
 * 56, 57	Freezing Drizzle: Light and dense intensity
 * 61, 63, 65	Rain: Slight, moderate and heavy intensity
 * 66, 67	Freezing Rain: Light and heavy intensity
 * 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
 * 77	Snow grains
 * 80, 81, 82	Rain showers: Slight, moderate, and violent
 * 85, 86	Snow showers slight and heavy
 * 95 *	Thunderstorm: Slight or moderate
 * 96, 99 *	Thunderstorm with slight and heavy hail
 */
export function WeatherCode({ code }) {
  const codeMap = {
    0: { emoji: "☀️", description: "Cielo sereno" },
    1: { emoji: "🌤️", description: "Principalmente sereno" },
    2: { emoji: "⛅", description: "Parzialmente nuvoloso" },
    3: { emoji: "☁️", description: "Coperto" },
    45: { emoji: "🌫️", description: "Nebbia" },
    48: { emoji: "🌫️", description: "Nebbia con brina" },
    51: { emoji: "🌦️", description: "Pioviggine leggera" },
    53: { emoji: "🌦️", description: "Pioviggine moderata" },
    55: { emoji: "🌧️", description: "Pioviggine intensa" },
    56: { emoji: "🌧️", description: "Pioviggine gelata leggera" },
    57: { emoji: "🌧️", description: "Pioviggine gelata intensa" },
    61: { emoji: "🌧️", description: "Pioggia debole" },
    63: { emoji: "🌧️", description: "Pioggia moderata" },
    65: { emoji: "🌧️", description: "Pioggia intensa" },
    66: { emoji: "🌧️", description: "Pioggia gelata leggera" },
    67: { emoji: "🌧️", description: "Pioggia gelata intensa" },
    71: { emoji: "🌨️", description: "Neve debole" },
    73: { emoji: "🌨️", description: "Neve moderata" },
    75: { emoji: "🌨️", description: "Neve intensa" },
    77: { emoji: "🌨️", description: "Granuli di neve" },
    80: { emoji: "🌦️", description: "Rovesci di pioggia leggeri" },
    81: { emoji: "🌧️", description: "Rovesci di pioggia moderati" },
    82: { emoji: "🌧️", description: "Rovesci di pioggia violenti" },
    85: { emoji: "🌨️", description: "Rovesci di neve deboli" },
    86: { emoji: "🌨️", description: "Rovesci di neve intensi" },
    95: { emoji: "⛈️", description: "Temporale debole o moderato" },
    96: { emoji: "⛈️", description: "Temporale con grandine debole" },
    99: { emoji: "⛈️", description: "Temporale con grandine intensa" }
  };
  return codeMap[code] || "❓";
}
