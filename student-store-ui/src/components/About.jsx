
import * as React from "react"
import "./Home/Home.css"

export default function About() {
    return(
<div className="about" id="about">
        <div id="texts">
          <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
          <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
          <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
        </div>
        <img src="\src\assets\codepath.png" alt="codepath"></img>
      </div>
    )
}