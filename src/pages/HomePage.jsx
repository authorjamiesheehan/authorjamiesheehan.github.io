import { For } from "solid-js";
import * as styles from "./HomePage.module.css";

import { FaBrandsGoodreadsG, FaBrandsInstagram, FaBrandsPinterest, FaBrandsSpotify } from 'solid-icons/fa';
import { IoMailOutline } from 'solid-icons/io';

export default function HomePage() {
    return (
        <div class={styles.homepage}>
            <img
                src="/img/home_anton-sharov-unsplash-min.webp"
                alt="Wooden walkway leading to ocean beach."
            />
            <div class={styles.links}>
                <ul>
                    <For each={myLinks}>
                        {link => (
                            <li>
                                <a class={link.class ?? null} href={link.href} target="_blank" aria-label={link.ariaLabel}>
                                    {link.display}
                                </a>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
        </div>
    );
}

const myLinks = [
    {
        href: "https://www.pinterest.com/authorjamiesheehan/",
        class: styles.pinterestLink,
        ariaLabel: "Visit my Pinterest",
        display: () => <FaBrandsPinterest />
    },
    {
        href: "https://open.spotify.com/user/jamiedanae",
        class: styles.spotifyLink,
        ariaLabel: "Follow me on Spotify",
        display: () => <FaBrandsSpotify />
    },
    {
        href: "https://www.goodreads.com/user/show/44081734-jamie-danae",
        ariaLabel: "Check out my Goodreads",
        display: () => <FaBrandsGoodreadsG />
    },
    {
        href: "https://www.instagram.com/authorjamiesheehan",
        class: styles.igLink,
        ariaLabel: "Follow me on Instagram",
        display: () => <FaBrandsInstagram />
    },
    {
        href: "mailto:authorjamiesheehan@gmail.com",
        class: styles.mailLink,
        ariaLabel: "Send me an email",
        display: () => <IoMailOutline />
    }
]