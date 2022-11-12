export const getGifs = async (category, page) => {
  const APIKey = 'fzId3VBuREjibqafqpDWOufrEfE0rw3r'
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${category}&limit=50&offset=${page}&rating=g`
  if (category.includes('Trending')) {
    url = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKey}&q=${'Trending Gifs'}&limit=50&offset=${page}&rating=g`
  }
  const resp = await fetch(url)
  const { data, pagination: { totalCount } } = await resp.json()
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized.url
  }))
  return ({ data: gifs, totalCount })
}
