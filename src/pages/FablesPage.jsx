import * as styles from './BookPage.module.css'

export default function FablesPage() {
  document.title = 'Jamie Sheehan | Fables'
  return (
    <>
      <div class={styles.mainContent}>
        <img src="/img/conspiracy-of-ravens_min.webp" class="shadow" alt="A Conspiracy of Ravens short story cover" />
        <div class={styles.gridCenter}>
          <div class={styles.substackLink}>
            <h1>A Conspiracy of Ravens</h1>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://jamiesheehan.substack.com">Available with free subscription to The Ink-Dipped Trowel Substack</a>
            </div>
          </div>
          <div class={styles.bookDescription}>
            <p>In 1830s Ireland, a fairy lord offers a wish to a family of seamstresses in exchange for wedding clothes.</p>
          </div>
        </div>
      </div >
      <div class="quoteBlock">
        <p>"{footerQuote.quote}"</p>
        <p>— {footerQuote.attribution}</p>
      </div>
    </>
  )
}

const footerQuote = {
  quote: "And men go abroad to admire the heights of mountains, the mighty billows of the sea, the broad tides of rivers, the compass of the ocean, and the circuits of the stars, and pass themselves by.",
  attribution: "Augustine of Hippo",
  title: ""
}