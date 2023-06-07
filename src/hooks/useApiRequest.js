import { useState, useEffect } from 'react'
import { api } from '../services/api'

const useApiRequest = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [nextPageUrl, setNextPageUrl] = useState('')
  const [reachedEnd, setReachedEnd] = useState(false)

  const makeRequest = async (method, endpoint, requestData = null) => {
    try {
      setLoading(true)

      const response = await api[method](endpoint, requestData)
      return response.data
    } catch (error) {
      console.log(error)
      alert('error server 500')
    } finally {
      setLoading(false)
    }
  }

  const getContents = async () => {
    try {
      if (!nextPageUrl || reachedEnd) return 

      const responseData = await makeRequest('get', nextPageUrl)
      const { results, next, count } = responseData

      setData((prevData) => [...prevData, ...results])
      setNextPageUrl(next || '')

      if (data.length + results.length === count) {
        setReachedEnd(true)
      }
    } catch (error) {
      console.log(error)
      alert('error server 500')
    }
  }

  const post = async (username, title, content) => {
    try {
      const requestData = { username, title, content }
      await makeRequest('post', '/careers/', requestData)
      alert('Post created successfully!')
    } catch (error) {
      alert('error server 500')
    }
  }

  const patch = async (id, title, content) => {
    try {
      const requestData = { title, content }
      await makeRequest('patch', `/careers/${id}`, requestData)
      alert('Post updated successfully!')
    } catch (error) {
      console.log(error)
      alert('error server 500')
    }
  }

  const del = async (id) => {
    try {
      await makeRequest('delete', `/careers/${id}/`)
      alert('Post deleted successfully!')
    } catch (error) {
      alert('error server 500')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await makeRequest('get', '/careers/')
        const { results, next } = responseData

        setData(results)
        setNextPageUrl(next || '')
        if (!next) {
          setReachedEnd(true)
        }
      } catch (error) {
        console.log(error)
        alert('error server 500')
      }
    }

    fetchData()
  }, [])

  return { data, loading, getContents, post, patch, del, reachedEnd }
}

export default useApiRequest

