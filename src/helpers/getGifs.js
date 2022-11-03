export const getGifs = async (category) => {
  const APIKey = 'fzId3VBuREjibqafqpDWOufrEfE0rw3r'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${category}&limit=100&offset=0&rating=g`
  const resp = await fetch(url)
  const { data } = await resp.json()
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return gifs
}
