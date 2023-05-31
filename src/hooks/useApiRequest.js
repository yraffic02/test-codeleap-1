import { useState, useEffect } from 'react'
import { api } from '../services/api'

const useApiRequest = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [nextPageUrl, setNextPageUrl] = useState('')

  const makeRequest = async (method, endpoint, requestData = null) => {
    try {
      setLoading(true)

      const response = await api[method](endpoint, requestData)
      return response.data
    } catch (error) {
      setError('error server 500')
    } finally {
      setLoading(false)
    }
  }

  const getContents = async () => {
    try {
      if (!nextPageUrl) return

      const responseData = await makeRequest('get', nextPageUrl)
      const { results, next } = responseData

      setData((prevData) => [...prevData, ...results])
      setNextPageUrl(next || '')
    } catch (error) {
      setError('Erro no servidor!')
    }
  }

  const post = async (username, title, content) => {
    try {
      const requestData = { username, title, content }
      await makeRequest('post', '/careers/', requestData)
    } catch (error) {
      setError('Erro ao criar um novo post!')
    }
  }

  const patch = async (id, title, content) => {
    try {
      const requestData = { title, content }
      await makeRequest('patch', `/careers/${id}`, requestData)
    } catch (error) {
      setError('Erro ao atualizar o post!')
    }
  }

  const del = async (id) => {
    try {
      await makeRequest('delete', `/careers/${id}`)
    } catch (error) {
      setError('Erro ao excluir o post!')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await makeRequest('get', '/careers/')
        const { results, next } = responseData

        setData(results)
        setNextPageUrl(next || '')
      } catch (error) {
        setError('Erro no servidor!')
      }
    }

    fetchData()
  }, [])

  return { data, loading, error, getContents, post, patch, del }
}

export default useApiRequest

