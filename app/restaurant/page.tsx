import { Restaurant } from '@/containers/restaurant/Restaurant'
import React from 'react'

export const metadata = {
  title: "Restaurants",
};

const Page = () => {
  return (
      <div>
          <Restaurant />
    </div>
  )
}

export default Page