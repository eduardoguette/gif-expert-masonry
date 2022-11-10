import { getGifs } from "./getGifs"

export function infiniteScroll (category, setGifs, refItem, page) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        page += 50
        const cat = category === '' ? 'Trending Gifs' : category
        getGifs(cat, page).then(({ data, total_count }) => {
          setGifs((p) => [...p, ...data])
        })
      }
    })
  }, {
    rootMargin: '200px'
  })
  observer.observe(refItem.current)
}
