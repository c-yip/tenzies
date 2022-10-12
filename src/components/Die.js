export default function Die (props) {
  let styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
  }
  
  return (
    <div className="die" style={styles}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  )
}