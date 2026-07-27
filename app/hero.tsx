import Image from "next/image";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

import styles from "./hero.module.css";

type PhotoTileProps = {
  alt: string;
  className: string;
  label: string;
  position?: string;
  priority?: boolean;
  src: string;
  term: string;
};

function PhotoTile({
  alt,
  className,
  label,
  position = "center",
  priority = false,
  src,
  term,
}: PhotoTileProps) {
  return (
    <figure className={`${styles.photoTile} ${className}`}>
      <Image
        fill
        alt={alt}
        className={styles.photo}
        priority={priority}
        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 48vw"
        src={src}
        style={{ objectPosition: position }}
      />
      <figcaption className={styles.caption}>
        <span className={styles.captionTerm}>{term}</span>
        <span>{label}</span>
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
      <div className={styles.bento}>
        <div className={`${styles.tile} ${styles.brandTile}`}>
          <Image
            alt="Símbolo visual do portfólio"
            className={styles.logo}
            height={564}
            priority
            src="/logo-y.png"
            width={418}
          />
          <p className={styles.brandNote}>
            Fotografia de
            <br />
            cultura japonesa
          </p>
        </div>

        <header className={`${styles.tile} ${styles.titleTile}`}>
          <span className={styles.sun} aria-hidden="true" />
          <p className={styles.kicker}>Um encontro · Um instante</p>
          <h1 className={styles.japaneseTitle} id="hero-title" lang="ja">
            一期一会
          </h1>
          <div className={styles.titleFooter}>
            <p className={styles.romanized}>Ichigo Ichiê</p>
            <p className={styles.intro}>
              Histórias que acontecem uma só vez, preservadas em luz,
              movimento e memória.
            </p>
          </div>
        </header>

        <PhotoTile
          alt="Artista de dança tradicional japonesa sob luz cênica"
          className={styles.mainPhoto}
          label="movimento"
          position="54% center"
          priority
          src="/5.jpeg"
          term="舞 · Mai"
        />

        <PhotoTile
          alt="Taikoísta tocando durante uma apresentação"
          className={styles.tallPhoto}
          label="pulso"
          position="44% center"
          src="/3.jpeg"
          term="鼓動 · Kodō"
        />

        <PhotoTile
          alt="Músico concentrado diante de tambores taiko"
          className={styles.rhythmPhoto}
          label="força"
          position="72% center"
          src="/2.jpeg"
          term="力 · Chikara"
        />

        <aside className={`${styles.tile} ${styles.contactTile}`} id="contato">
          <p className={styles.contactEyebrow}>Ensaios · Eventos · Retratos</p>
          <a className={styles.contactLink} href="#redes">
            Vamos registrar
            <br />
            o seu momento
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </a>
          <div className={styles.socials} id="redes" aria-label="Redes sociais">
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <IoLogoInstagram aria-hidden="true" />
            </a>
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              <IoLogoFacebook aria-hidden="true" />
            </a>
          </div>
        </aside>

        <PhotoTile
          alt="Grupo de taiko em apresentação coletiva"
          className={styles.ensemblePhoto}
          label="coletivo"
          position="center 72%"
          src="/1.jpeg"
          term="和 · Wa"
        />

        <PhotoTile
          alt="Artistas mascarados em uma apresentação cultural"
          className={styles.festivalPhoto}
          label="celebração"
          position="center 32%"
          src="/6.jpeg"
          term="祭 · Matsuri"
        />

        <PhotoTile
          alt="Mãos e baquetas em detalhe sobre um tambor taiko"
          className={styles.detailPhoto}
          label="detalhe"
          position="54% center"
          src="/4.jpeg"
          term="響 · Hibiki"
        />
      </div>

    </section>
  );
}
