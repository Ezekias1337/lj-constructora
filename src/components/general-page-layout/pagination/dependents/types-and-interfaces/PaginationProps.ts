interface PaginationProps {
  numberOfPages: number
  currentPage: number
  setCurrentPage: (page: number) => void
  setChunkedArrayIndex: (index: number) => void
  defaultChunkSize: number
}

export default PaginationProps
