import Rating from "@/Components/Rating";
import LikeDislik from "@/Components/LikeDislike";

export default function Home() {
  return(
    <div>
    <h2>Leave a review</h2>
    <div className="section">
    <h3>Safety</h3>
    <p>Gives your rating it's precious to us!</p>
    <Rating />
    </div>
    <div className="section">
    <h3>Communication</h3>
    <p>Gives your rating it's precious to us!</p>
    <Rating />
    </div>
    <div className="section">
      <h3>Would You Recommend Trausti?</h3>
      <p>Please Choose an option</p>
      <LikeDislik />
    </div>
    </div>
  )
}
