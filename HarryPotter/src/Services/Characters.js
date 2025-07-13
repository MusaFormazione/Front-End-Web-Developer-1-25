export async function getCharacters (lang = 'it', setter, errorSetter) {
  try {
    const response = await fetch(`https://potterapi-fedeperin.vercel.app/${lang}/characters`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log('Books fetched:', data)
    setter(data)
    errorSetter(null) // Reset error if fetch is successful
  } catch (error) {
    console.error('Error fetching books:', error)
    errorSetter(error.message)
  }
}
