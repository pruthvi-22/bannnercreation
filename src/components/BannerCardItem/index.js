// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props

  const {id, headerText, description, className} = bannerCardsList
  console.log(id)
  return (
    <li className={className}>
      <div className="list">
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}
export default BannerCardItem
