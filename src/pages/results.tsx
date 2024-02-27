import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tables } from '@/lib/database.types'
import { useResults } from '@/lib/use-results'
import { Link } from 'react-router-dom'

export const Results = () => {
  const { tableData, error, isLoading } = useResults()

  const formatWinRate = (n: number) => {
    return `${(n * 100).toFixed(1)}%`
  }

  const hasMinimumVotes = (data: Tables<'voting-table'>[]) => {
    return !data.some(({ votes_for, votes_against }) => {
      return votes_for + votes_against < 50
    })
  }

  const getFactionIcon = (faction: string) => {
    return (
      <img
        src={`images/icons/${faction}.png`}
        alt={faction}
        className='w-4 h-4 mr-1'
      />
    )
  }

  return (
    <div className='container space-y-4'>
      <h2>Results</h2>
      {isLoading ? (
        <div className='animate-pulse bg-muted rounded-lg max-w-[600px] h-[120px]' />
      ) : error ? (
        <Card className={'max-w-[600px]'}>
          <CardHeader>
            <CardTitle>Unable to calculate results</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Please check your connection and try again.</p>
          </CardContent>
        </Card>
      ) : hasMinimumVotes(tableData) ? (
        <Table>
          {/* <TableCaption>caption</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Combination</TableHead>
              <TableHead>Win rate</TableHead>
              <TableHead>Total votes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map(
              ({ combo_id, faction, mat, votes_for, votes_against }, index) => {
                const totalVotes = votes_for + votes_against
                const winRate = votes_for / totalVotes

                return (
                  <TableRow key={combo_id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className='inline-flex items-center capitalize'>
                      {getFactionIcon(faction)} {mat}
                    </TableCell>
                    <TableCell>{formatWinRate(winRate)}</TableCell>
                    <TableCell>{totalVotes}</TableCell>
                  </TableRow>
                )
              }
            )}
          </TableBody>
        </Table>
      ) : (
        <Card className={'max-w-[600px]'}>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='inline-flex items-center space-x-1.5'>
              <p className=''>We are still collecting data.</p>
              <Link className='text-base text-primary' to={'/vote'}>
                Vote here
              </Link>
              <p>to help us out!</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
