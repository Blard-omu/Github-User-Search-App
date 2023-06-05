import React from 'react'

const About = (props) => {
  const { heading, subheading="This is default subheading" } = props
  return (
    <div>
      <h1>{heading}</h1>
      <h3>{subheading}</h3>
    </div>
  )
}

export default About