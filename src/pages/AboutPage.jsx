import * as styles from './AboutPage.module.css'

export default function AboutPage() {
    return (
        <div class={styles.mainContent}>
            <img src="/img/about_min.webp" class="shadow" />
            <div>
                <h1 class="center-text">About Jamie</h1>
                <div class={styles.aboutDescription}>
                    <p>
                        Jamie is an anthropology, archeology, world mythology, and nature enthusiast; she finds people, cultures, and history endlessly fascinating. She loves to explore places both famous and forgotten but would happily live the rest of her life confined to the forest she grew up in.
                    </p>
                    <p>
                        She studied psychology, computer science, and journalism in college before entering the medical field as a phlebotomist, and she now lives in northern Idaho with her husband and two fluffy kittens, Pumpkin the Lionheart and Avalon Nimue.
                    </p>
                    <p>
                        When not writing, she can be found playing racket sports, baking chocolate chip cookies and pastries, trailing her husband to disc golf courses around the PNW, and spending far too much time with her espresso machine.
                    </p>
                    <p>
                        Jamie is a Christian; though she doesn't explicitly write Christian fiction, it's important to her that her stories point to God.
                    </p>

                </div>

            </div>
        </div >
    )
}