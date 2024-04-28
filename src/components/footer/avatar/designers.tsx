import Image from 'next/image';
import styles from './styles.module.css'
const Avatars = () => {
  return (
    <div className={styles.avatars}>
        <div className={styles.user}>
            <div className={styles.avatarsitem}>
                <Image src="/members/riyaimg.jpg" alt="Riya" width={200} height={200} className={styles.avatar} />
            </div>
            <span className={styles.title}>Riya </span>
            <span className={styles.position}>TeamLead </span>

        </div>
        <div className={styles.user}>
            <div className={styles.avatarsitem}>
                <Image src="/members/karan.jpg" alt="Karan" width={200} height={200} className={styles.avatar} />
            </div>
            <div className={styles.title}>Karan</div>
            <span className={styles.position}>Developer </span>
        </div>
        <div className={styles.user}>
            <div className={styles.avatarsitem}>
                <Image src="/members/nancy.jpg" alt="Nancy"width={200} height={200} className={styles.avatar} />
            </div>
            <div className={styles.title}>Nancy</div>
            <span className={styles.position}>Designer</span>
        </div>
        <div className={styles.user}>
            <div className={styles.avatarsitem}>
                <Image src="/members/navya.jpg" alt="Navya" width={200} height={200} className={styles.avatar}/>
            </div>
            <div className={styles.title}>Navya<br/></div>
            <span className={styles.position}>Designer</span>
        </div>
        {/* <div className={styles.user}>
            <div className={styles.avatarsitem}>
                <Image src="/members/user.jpg" alt="" width={200} height={200} className={styles.avatar} />
            </div>
        </div> */}
    </div>
  );
};

export default Avatars;