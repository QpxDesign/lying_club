import { useEffect, useState } from "react";
import "./App.css";

const SLIDESHOW_CONTENT = [
  {
    title: "Lying Club is a Real Club.",
    img_slug: "/img/AmericaField.webp",
  },
  {
    title: "REPORT: Lying 3x/Day Adds 20+ Years to Your Life",
    img_slug: "/img/Science.webp",
  },
  {
    title: "Lying Club Holds 5th Annual Lie-athon in Ann Arbor",
    img_slug: "/img/AnnArbor.webp",
  },
  {
    title: "From Nixon to Clinton to Santos: Famous Lying Club Alumni",
    img_slug: "/img/Senate.webp",
  },
  {
    title: "Lying Club Reaches $50M In Pre-Seed Funding",
    img_slug: "/img/Wallstreet.webp",
  },
  {
    title: "Lying Club Welcomes 50,000th Member",
    img_slug: "/img/Convention.webp",
  },
];

function App() {
  const [slideshowIndex, setSlideshowIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideshowIndex + 1 < SLIDESHOW_CONTENT.length) {
        setSlideshowIndex((slideshowIndex) => slideshowIndex + 1);
      } else {
        setSlideshowIndex(0);
      }
    }, 8000);
    return () => clearInterval(interval);
  });

  let slideshowItem = SLIDESHOW_CONTENT[slideshowIndex];
  return (
    <>
      <header>
        <div className="hstack">
          <span>The</span> LYING CLUB.
        </div>
      </header>
      <div
        className="background hstack"
        style={{
          backgroundImage: `url(${slideshowItem.img_slug})`,
        }}
      >
        <div>
          <h1>{slideshowItem.title}</h1>
        </div>
      </div>
      <section>
        <h1>What We Do</h1>
        <h2>
          We uplift all types of lying, from satire to fraud, from fibs to
          perjury, and from half-truths to misinformation. Lying gets a bad
          name, but it's an essential part of life. We lie all the time:
        </h2>
        <ul>
          <li>when we want to get out of plans</li>
          <li>when someone shows us their kinda bad short film</li>
          <li>when we tell people to ‘have a good day’</li>
          <li>when we want a conversation to end</li>
          <li>on our jobs applications and government forms</li>
          <li>when we make small talk</li>
          <li>to the police, lawyers, and the judge</li>
          <li>when we pretend to like taylor swift</li>
          <li>to our cellmates about what we’re in prison for</li>
          <li>
            when we wear an elaborate disguise to escape charlie-chaplin style
          </li>
        </ul>
        <h1>How We Do It</h1>
        <h2>
          We have weekly meetings every Wednesday @ 8pm in Johnson 105. At our
          meetings we plan our club activities. As long as it involves lying in
          some way, we'd love to make your lie a reality. Think poster
          campaigns, publications, performances, demonstrations, or anything
          else!
        </h2>
      </section>
      <section>
        <h1>Our Work</h1>
        <div className="scrollbox">
          <div className="image-stack" data-image-label="#KeepRotundasRound">
            <img src="/img/Rotunda.webp" /> <img src="/img/RotundaIRL.webp" />
          </div>
          <div
            className="image-stack"
            data-image-label="Book Richard Kind for Springfest"
          >
            <img src="/img/RichardKind.webp" />
          </div>
          <div className="image-stack" data-image-label="">
            <img src="/img/SubauImprezaOwnersClub.webp" />
          </div>
          <div
            className="image-stack"
            data-image-label="Lying Club Recruitment"
          >
            <img src="/img/LyingClub.webp" />
            <img src="/img/McGruff.webp" />
            <img src="/img/LyingClubFirstMeetingSocial.webp" />
          </div>
          <div
            className="vstack"
            style={{
              textWrap: "nowrap",
              fontSize: "2em",
              justifyContent: "flex-end",
            }}
          >
            ... and more to come.
          </div>
        </div>
      </section>
      <section>
        <h1>Get Involved</h1>
        <h2>
          We'd love to have you! Please email qpatwardhan [at] oxy.edu for more
          information and to join the email list. In addition to our club
          activities (see above), we also hold regular meetings to brainstorm
          actions, discuss the art of lying, and to workshop our lying
          abilities.
        </h2>
        <h3>
          <strong>Next Action:</strong> TBD
        </h3>
        <h3>
          <strong>Next Meeting:</strong> Tuesday Oct. 22nd @ 8:30pm in Johnson
          103
        </h3>
        <h2>
          Follow us on Instagram{" "}
          <a href="https://www.instagram.com/lying.club/">@lying.club</a>
        </h2>
      </section>
      <footer>
        site developed by{" "}
        <a href="https://quinnpatwardhan.com">quinn patwardhan</a>.
      </footer>
    </>
  );
}
export default App;
