export default function AI() {
  return (
    <>
      <div
        className="page-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <div style={{ paddingTop: "15em" }}>
          <h1>Sign the Lying Club AI Pledge</h1>
          <h2>
            (it's a pledge <span>not</span> to use AI, not a pledge for AI)
          </h2>
          <div className="spacearound">
            <a href="https://forms.gle/XUqwyTFEMXcbqYSc8" target="_blank">
              <button>Pledge</button>
            </a>
            <a
              href="https://docs.google.com/spreadsheets/d/1ZwPof3Y86M5GDZNIIhE10I4vJNgS-fuQZLRlyh3bZNo/edit?usp=sharing"
              target="_blank"
            >
              <button>See Pledgers</button>
            </a>
          </div>
          <div>
            <h3
              style={{
                marginTop: "5em",
                fontWeight: 800,
                fontFamily: "Instrument Sans",
              }}
            >
              You Don't Need AI.
            </h3>
            <p>
              You don't need a robot to confidently lie to your face. We've been
              perfecting that art for months, and we barely consume any water
              (at least according to our doctors). AI is a dangerous blight that
              came from the epicenter of all evil on earth: Silicon Valley. It's
              the ninth-worst thing big tech has ever done. It kills your
              creativity, rots your brain, and destroys the environment. It also
              makes you absolutely insufferable. Still not sold? Just look at
              our very real PSAs below:
            </p>
            <div
              className="scrollbox"
              style={{ width: "90%", margin: "0 auto" }}
            >
              <a className="image-stack" href="/img/WhatYouCallIt.webp">
                <img src="/img/WhatYouCallIt.webp" />
              </a>
              <a className="image-stack" href="/img/McGruffAI.webp">
                <img src="/img/McGruffAI.webp" />
              </a>
              <a className="image-stack" href="/img/Sniffing.webp">
                <img src="/img/Sniffing.webp" />
              </a>
            </div>
            <p style={{ paddingBottom: 0 }}>
              Don't think you got what it takes to quit? We'll help wean you off
              of Sam Altman's proverbial (or perhaps literal, I can't speak to
              your personal relationship with him) teat. Here's some tools,
              tips, and tricks we've cultivated to help you 'De-AI' your life.
              Have others? Feel free to submit them to us via{" "}
              <a href="https://instagram.com/lying.club">instagram</a> or{" "}
              <a href="mailto:lyingclub@oxy.edu">email</a>.
            </p>
            <ul style={{ paddingTop: ".5em" }}>
              <li>
                Have questions you need answered? Email/DM them to us, and we'll
                get back to you with an answer that's no less truthful than the
                one you'd get out of ChatGPT.{" "}
              </li>
              <li>
                Come to our weekly AI-User Anonymous Meetings (TBD) to talk out
                your AI withdrawals amongst the community
              </li>
              <li>
                Use <a href="https://udm14.com">udm14.com</a> (or add '-ai' to
                searches) to weed out those pesky Google AI Summaries
              </li>
              <li>
                Need something designed (Poster, Website, etc?) Reach out to{" "}
                <a href="mailto:qpatwardhan@oxy.edu">me</a> and I might be able
                to help
              </li>
              <li>
                Use content-blocking sites/extensions (i.e. UBlock Origin) to
                interrupt your instincts
              </li>
              <li>You can do it! I believe in you :D </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
