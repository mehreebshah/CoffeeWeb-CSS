import "../style/review.css";
import Image from "next/image";
function Review(){
    return(
<section className="section">
    <main>
        <div className="section">
            <div className="section-title">Reviews</div>

            <div className="review-container">
                <Image src="https://preview.colorlib.com/theme/coffee/img/r1.png.webp" alt="" />
                <h5 className="reviewer-name">Sarah M</h5>
                <p className="review-text responsive-text">
                &quot;This coffee shop has quickly become my go-to spot for both a caffeine fix and a relaxing break from my day. 
                    <br />The atmosphere is perfect—warm, inviting, and beautifully decorated with a mix of rustic and modern touches.
                    <br /> Whether I&apos;m looking for a quiet place to work or catch up with friends, it always delivers the right vibe.&quot;
                </p>
            </div>

            <div className="review-container">
                <Image src="https://preview.colorlib.com/theme/coffee/img/r2.png.webp" alt="" />
                <h5 className="reviewer-name">John Musk</h5>
                <p className="review-text responsive-text">
                &quot;This coffee shop has quickly become my go-to spot for both a caffeine fix and a relaxing break from my day. 
                    <br />The atmosphere is perfect—warm, inviting, and beautifully decorated with a mix of rustic and modern touches.
                    <br /> Whether I&apos;m looking for a quiet place to work or catch up with friends, it always delivers the right vibe.&quot;
                </p>
            </div>
        </div>
    </main>
</section>

    )
}

export default Review