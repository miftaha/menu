const Title = ({ titleText }) => {
  return (
    <div className="text-center text-3xl font-medium tracking-wide p-2">
      <h1>{titleText || 'Default Title'}</h1>
    </div>
  )
}

export default Title
