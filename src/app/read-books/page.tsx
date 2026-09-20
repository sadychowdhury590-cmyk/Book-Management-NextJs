'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from 'recharts'
import { useContext } from 'react'
import { BooksContext } from '@/app/context/BookContext'
import { Ibook } from '@/types/books.types'

const colors = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  'red',
  'pink',
  'black',
]

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${
    x + width / 2
  },${y + height / 3} 
  ${x + width / 2}, ${y} 
  C${x + width / 2},${y + height / 3} ${
    x + (2 * width) / 3
  },${y + height} ${x + width}, ${y + height} 
  Z`
}

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props

  const color = colors[(index ?? 0) % colors.length]

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height)
      )}
      stroke={color}
      fill={color}
      style={{
        transition: 'stroke-width 0.3s ease-out',
      }}
    />
  )
}

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length]

  return <Label {...props} fill={fill} />
}

export default function CustomShapeBarChart() {
  const { readBooks }: { readBooks: Ibook[] } =
    useContext(BooksContext)

  const chartData = readBooks.map((book) => ({
    name: book.bookName,
    rating: book.rating,
  }))

  return (
    <div className="container mx-auto my-6 px-4 text-center">

      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        My Read Books
      </h2>

      {readBooks.length > 0 ? (
        <div className="w-full overflow-x-auto">
          <BarChart
            style={{
              width: '100%',
              maxWidth: '700px',
              maxHeight: '70vh',
              aspectRatio: 1.618,
              margin: '0 auto',
            }}
            responsive
            data={chartData}
            margin={{
              top: 20,
              right: 10,
              left: 0,
              bottom: 20,
            }}
          >
            <CartesianGrid />

            <Tooltip cursor={{ fillOpacity: 0.5 }} />

            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              width="auto"
              domain={[0, 5]}
            />

            <Bar
              dataKey="rating"
              shape={TriangleBar}
              activeBar
            >
              <LabelList
                content={CustomColorLabel}
                position="top"
              />
            </Bar>
          </BarChart>
        </div>
      ) : (
        <div className="py-16">
          <h2 className="text-xl font-semibold">
            No Read Books Found
          </h2>

          <p className="text-gray-500 mt-2">
            Read some books to see your chart.
          </p>
        </div>
      )}

    </div>
  )
}