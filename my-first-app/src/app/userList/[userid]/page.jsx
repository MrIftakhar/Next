import React from 'react'

function page({params}) {
  return (
    <div>
        User Information: {params.userid}
    </div>
  )
}

export default page;


export function generateMetadata(){
  return {
    title: "Welcome",
    description:"this is my page"
  }
}