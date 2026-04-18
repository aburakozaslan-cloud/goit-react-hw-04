import { useState } from "react"
import SearchBar from "./components/SearchBar/SearchBar.jsx"
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx"
import Loader from "./components/Loader/Loader.jsx"
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx"
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx"
import ImageModal from "./components/ImageModal/ImageModal.jsx"
import axios from "axios"
import { Toaster } from "react-hot-toast"

export default function App() {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [modalImage, setModalImage] = useState(null)

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery)
    setPage(1)
    setImages([])
    setError(false)
    fetchImages(searchQuery, 1)
  }

  const fetchImages = async (searchQuery, pageNum) => {

    try {
      setLoading(true)
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: searchQuery,
          page: pageNum,
          per_page: 12,
          client_id: import.meta.env.VITE_UNSPLASH_KEY,
        },
      })
      setImages(prev =>
        pageNum === 1
          ? response.data.results
          : [...prev, ...response.data.results]
      )
      setTotalPages(response.data.total_pages)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
    
  }

  const handleLoadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    fetchImages(query, nextPage)
  }

  const handleImageClick = (image) => {
    setModalImage(image)
  }

  const handleModalClose = () => {
    setModalImage(null)
  }

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
      <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal image={modalImage} onClose={handleModalClose} />
    </>
  )
}