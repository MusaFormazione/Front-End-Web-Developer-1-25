/**
 * Assets list in ./assets to import
 * cielo_sereno.png
 * coperto.png
 * nebbia.png
 * neve.png
 * parzialmente_nuvoloso.png
 * pioggia.png
 * pioviggine.png
 * principalmente_sereno.png
 * rain.png
 * rovesci_neve.png
 * rovesci_pioggia.png
 * temporale.png
 * temporale_grandine.png
 */

import ImgCieloSereno from "./assets/cielo_sereno.png";
import ImgCoperto from "./assets/coperto.png";
import ImgNebbia from "./assets/nebbia.png";
import ImgNeve from "./assets/neve.png";
import ImgParzialmenteNuvoloso from "./assets/parzialmente_nuvoloso.png";
import ImgPioggia from "./assets/pioggia.png";
import ImgPioviggine from "./assets/pioviggine.png";
import ImgPrincipalmenteSereno from "./assets/principalmente_sereno.png";
import ImgRovesciNeve from "./assets/rovesci_neve.png";
import ImgRovesciPioggia from "./assets/rovesci_pioggia.png";
import ImgTemporale from "./assets/temporale.png";
import ImgTemporaleGrandine from "./assets/temporale_grandine.png";


/**
 * Descrizione del weather_code di openmeteo
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
  console.log('code:',  code)
  const codeMap = {
    0: { emoji: "☀️", description: "Cielo sereno", image: ImgCieloSereno },
    1: { emoji: "🌤️", description: "Principalmente sereno", image: ImgPrincipalmenteSereno },
    2: { emoji: "⛅", description: "Parzialmente nuvoloso", image: ImgParzialmenteNuvoloso },
    3: { emoji: "☁️", description: "Coperto", image: ImgCoperto },
    45: { emoji: "🌫️", description: "Nebbia", image: ImgNebbia },
    48: { emoji: "🌫️", description: "Nebbia con brina", image: ImgNebbia },
    51: { emoji: "🌦️", description: "Pioviggine leggera", image: ImgPioviggine },
    53: { emoji: "🌦️", description: "Pioviggine moderata", image: ImgPioviggine },
    55: { emoji: "🌧️", description: "Pioviggine intensa", image: ImgPioviggine },
    56: { emoji: "🌧️", description: "Pioviggine gelata leggera", image: ImgPioviggine },
    57: { emoji: "🌧️", description: "Pioviggine gelata intensa", image: ImgPioviggine },
    61: { emoji: "🌧️", description: "Pioggia debole", image: ImgPioggia },
    63: { emoji: "🌧️", description: "Pioggia moderata", image: ImgPioggia },
    65: { emoji: "🌧️", description: "Pioggia intensa", image: ImgPioggia },
    66: { emoji: "🌧️", description: "Pioggia gelata leggera", image: ImgPioggia },
    67: { emoji: "🌧️", description: "Pioggia gelata intensa", image: ImgPioggia },
    71: { emoji: "🌨️", description: "Neve debole", image: ImgNeve },
    73: { emoji: "🌨️", description: "Neve moderata", image: ImgNeve },
    75: { emoji: "🌨️", description: "Neve intensa", image: ImgNeve },
    77: { emoji: "🌨️", description: "Granuli di neve", image: ImgNeve },
    80: { emoji: "🌦️", description: "Rovesci di pioggia leggeri", image: ImgRovesciPioggia },
    81: { emoji: "🌧️", description: "Rovesci di pioggia moderati", image: ImgRovesciPioggia },
    82: { emoji: "🌧️", description: "Rovesci di pioggia violenti", image: ImgRovesciPioggia },
    85: { emoji: "🌨️", description: "Rovesci di neve deboli", image: ImgRovesciNeve },
    86: { emoji: "🌨️", description: "Rovesci di neve intensi", image: ImgRovesciNeve },
    95: { emoji: "⛈️", description: "Temporale debole o moderato", image: ImgTemporale },
    96: { emoji: "⛈️", description: "Temporale con grandine debole", image: ImgTemporaleGrandine },
    99: { emoji: "⛈️", description: "Temporale con grandine intensa", image: ImgTemporaleGrandine }
  };
  return codeMap[code] || { emoji: "❓", description: "Codice sconosciuto", image: ImgNebbia}
}
