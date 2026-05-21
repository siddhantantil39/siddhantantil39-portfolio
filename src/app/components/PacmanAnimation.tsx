import styles from "./PacmanAnimation.module.css";

export default function PacmanAnimation() {
  return (
    <div className={styles.scene} role="img" aria-label="Pac-Man animation">
      <div className={styles.track} aria-hidden="true" />
      <div className={styles.pacman} aria-hidden="true">
        <span className={styles.eye} />
      </div>
      <div className={styles.ghost} aria-hidden="true">
        <span className={styles.ghostFeet} />
      </div>
      <span className={styles.caption}>Pac-man eating all the code.</span>
    </div>
  );
}
