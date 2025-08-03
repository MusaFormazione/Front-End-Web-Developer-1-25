const style = {
  width: '280px',
  height: '280px',
  border: '1px solid black'
}

function ColorDiv ({ color }) {
  return (
    <div
      style={{ ...style, backgroundColor: color }}
    />
  )
}

export default ColorDiv
