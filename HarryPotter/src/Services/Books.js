export async function getBooks (lang = 'it', setter, errorSetter) {
  try {
    const response = await fetch(`https://potterapi-fedeperin.vercel.app/${lang}/books`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log('Books fetched:', data)
    setter(data)
    errorSetter(null) // Reset error if fetch is successful
  } catch (error) {
    console.error('Error fetching books:', error.message)
    errorSetter(error.message)
  }
}

export function getBooksMock () {
  return [
    { index: 1, title: 'Harry Potter e la Pietra Filosofale', author: 'J.K. Rowling' },
    { index: 2, title: 'Harry Potter e la Camera dei Segreti', author: 'J.K. Rowling' },
    { index: 3, title: 'Harry Potter e il Prigioniero di Azkaban', author: 'J.K. Rowling' },
    { index: 4, title: 'Harry Potter e il Calice di Fuoco', author: 'J.K. Rowling' },
    { index: 5, title: 'Harry Potter e l\'Ordine della Fenice', author: 'J.K. Rowling' },
    { index: 6, title: 'Harry Potter e il Principe Mezzosangue', author: 'J.K. Rowling' },
    { index: 7, title: 'Harry Potter e i Doni della Morte', author: 'J.K. Rowling' }
  ]
}
