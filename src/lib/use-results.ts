import { useEffect, useState } from 'react'
import { supabase } from './api'
import { Tables } from './database.types'

export const useResults = () => {
  const [tableData, setTableData] = useState<Tables<'voting-table'>[]>([])
  const [error, setError] = useState<unknown>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from('voting-table').select('*')

        if (error) {
          throw new Error(error.message)
        }

        data.sort((a, b) => {
          const ratioA =
            a.votes_for === 0
              ? 0
              : a.votes_for / (a.votes_for + a.votes_against)
          const ratioB =
            b.votes_for === 0
              ? 0
              : b.votes_for / (b.votes_for + b.votes_against)
          return ratioB - ratioA
        })

        setTableData(data)
        setError(null)
      } catch (error) {
        setError(error)
        setTableData([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { tableData, error, isLoading }
}
