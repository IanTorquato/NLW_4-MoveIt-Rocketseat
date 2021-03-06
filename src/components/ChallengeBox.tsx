import { useContext } from 'react'

import { ChallengeContext } from '../contexts/Challenges'
import { CountdownContext } from '../contexts/Countdown'

import styles from '../styles/components/ChallengeBox.module.css'

function ChallengeBox() {
  const { activeChallenge, completeChallenge, resetChallenge } = useContext(ChallengeContext)
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button className={styles.challengeFailedButton} type="button"
              onClick={handleChallengeFailed}>
              Falhei
            </button>

            <button className={styles.challengeSucceededButton} type="button"
              onClick={handleChallengeSucceeded}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level-up.svg" alt="Level Up" />

            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  )
}

export { ChallengeBox }
