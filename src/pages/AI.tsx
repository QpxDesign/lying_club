import { IoIosArrowRoundDown } from "react-icons/io";
import { FaFileSignature } from "react-icons/fa";
import Footnote from "../components/Footnote";

export default function AI() {
  return (
    <>
      <a className="logo-wrapper" href="/">
        <img src={"/img/Logo.png"} className="logo" />
        <h1>
          An Official Bulletin of <br></br> Lying Club
        </h1>
      </a>
      <div
        className="page-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <section className="ai-header vstack hstack">
          <div
            style={{ width: "90%", margin: "0 auto", zIndex: 3 }}
            className="vstack"
          >
            <h1 style={{ fontSize: "6.5rem" }}>"AI" is a lie.</h1>
            <h2 style={{ fontSize: "2rem" }}>
              Trust Us. We have over 37 weeks of experience in disseminating
              lies, misinformation, and half-truths.
            </h2>
            <button
              onClick={() => {
                window.scrollTo({
                  left: 0,
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
              style={{
                marginTop: "1.5em",
                gap: "0.125em",
                padding: "0.25em 1.5em",
              }}
              className="hstack"
            >
              Read More &amp; <br></br> Sign the Pledge{" "}
              <IoIosArrowRoundDown
                style={{ fontSize: "2em", padding: 0 }}
              />{" "}
            </button>
          </div>
        </section>
        <div>
          <div>
            <h3>"AI" isn't AI.</h3>
            <h4>
              What is "AI"? Nobody seems to know. Perhaps because the term "AI"
              has no explicit definition or meaning, outside of the buzzwords
              used by those with a direct financial stake in its success.{" "}
              "AI"-peddlers often point to the ability of language models to
              solve high-level exams and coding tasks at or above the level of a
              human. They fail to mention how the models have the entirety of
              the internet at their disposal. Hell, who couldn't get a 1600 on
              the SAT or build their own website if they had access to hundreds
              of SAT answer-keys and thousands of repositories of already-coded
              websites? At most, "AI" is just a way to obfuscate and legitimise
              plagiarism.
            </h4>
            <h3>"AI" Sucks.</h3>
            <h4>
              Here's a non-exhaustive list of reasons why. If "AI" was actually
              a human-like being, it'd be facing several millenniums in
              prison.{" "}
            </h4>
            <ul style={{ width: "75%" }}>
              <li>
                X Users use it to generate CSAM based on images of real children{" "}
                <Footnote
                  link={"https://www.bbc.com/news/articles/cvg1mzlryxeo"}
                  number={1}
                />
                <Footnote
                  link={
                    "https://en.wikipedia.org/wiki/Grok_sexual_deepfake_scandal"
                  }
                  number={2}
                />
                , and explicit/revealing images of unconsenting adults{" "}
                <Footnote
                  link={
                    "https://oag.ca.gov/news/press-releases/attorney-general-bonta-launches-investigation-xai-grok-over-undressed-sexual-ai"
                  }
                  number={3}
                />{" "}
              </li>
              <li>
                The U.S. Government uses it to commit acts of war{" "}
                <Footnote
                  link={
                    "https://www.economist.com/culture/2026/05/14/the-ai-that-transformed-american-warfare"
                  }
                  number={4}
                />
              </li>
              <li>
                DOGE (remember them?) used it to cut access to programs, to
                predictively (pun-indented) terrible results
                <Footnote
                  link={
                    "https://www.nytimes.com/2026/03/07/arts/humanities-endowment-doge-trump.html"
                  }
                  number={5}
                />
              </li>
              <li>
                The U.S. President uses it to generate misinformation and
                propaganda (and really shitty memes)
                <Footnote
                  link={
                    "https://www.snopes.com/collections/trump-white-house-ai-posts/"
                  }
                  number={6}
                />
              </li>
              <li>
                It powers scams and hacks
                <Footnote
                  link={
                    "https://dfpi.ca.gov/news/insights/protect-yourself-from-ai-scams/"
                  }
                  number={7}
                />
              </li>
              <li>
                It trains on anything you input into it
                <Footnote
                  link={
                    "https://openai.com/policies/how-your-data-is-used-to-improve-model-performance/#:~:text=ChatGPT%2C%20for%20instance%2C%20improves%20by%20further%20training%20on%20the%20conversations%20people%20have%20with%20it"
                  }
                  number={8}
                />
              </li>
              <li>
                It's trained on pirated media, and it's training exposed
                hundreds of low-paid Kenyan Workers to incredibly traumatizing
                and toxic content
                <Footnote
                  link={
                    "https://time.com/6247678/openai-chatgpt-kenya-workers/"
                  }
                  number={9}
                />
              </li>
              <li>
                "AI" Companies bulldozed forests and green spaces to build loud,
                polluting data enters against the wishes of residents by
                subverting democracy
                <Footnote
                  link={
                    "https://news.cornell.edu/stories/2025/11/roadmap-shows-environmental-impact-ai-data-center-boom"
                  }
                  number={10}
                />{" "}
                <Footnote
                  link={
                    "https://www.theguardian.com/us-news/2026/may/13/utah-approves-datacenter-backlash"
                  }
                  number={11}
                />
              </li>
              <li>
                It lies to you (that's our job!)
                <Footnote
                  link={
                    "https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)"
                  }
                  number={12}
                />
              </li>
              <li>
                and the list goes on.
                <Footnote
                  link={
                    "https://www.eesi.org/articles/view/data-centers-and-water-consumption"
                  }
                  number={13}
                />
                <Footnote
                  link={
                    "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis"
                  }
                  number={14}
                />
                <Footnote
                  link={
                    "https://www.reuters.com/world/china/ai-frenzy-is-driving-new-global-supply-chain-crisis-2025-12-03/"
                  }
                  number={15}
                />
              </li>
            </ul>
            <h3
              className="text-center"
              style={{
                fontStyle: "italic",
                marginTop: 0,
                fontSize: "1.5em",
                width: "80%",
                margin: "0 auto",
              }}
            >
              All this just so you can cheat on your homework!?
            </h3>

            <h3>You Don't Need It.</h3>
            <p>
              You don't need a robot to confidently lie to your face. We've been
              perfecting that art for months, and we barely consume any water
              (at least according to our doctors). "AI" is a dangerous blight
              that came from the epicenter of all evil on earth: Silicon Valley.
              It's the ninth-worst thing big tech has ever done. It kills your
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
                Come to our weekly "AI"-User Anonymous Meetings (TBD) to talk
                out your AI withdrawals amongst the community
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
        <a href="https://forms.gle/XUqwyTFEMXcbqYSc8" target="_blank">
          <button
            onClick={() => {
              window.scrollTo({
                left: 0,
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            style={{
              marginTop: "1.5em",
              gap: "0.5em",
              padding: "0.25em 1.5em",
            }}
            className="hstack"
          >
            Sign the Pledge
            <FaFileSignature style={{ fontSize: "1em", padding: 0 }} />{" "}
          </button>
        </a>
      </div>
    </>
  );
}
