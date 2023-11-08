import styles from './hostList.module.scss';

const hostList = () => {
  return (
    <section className={styles.container}>
      <h2>hostList</h2>
      <article>
        <h3 className={styles.title}> # 경기 펜션 title</h3>
        <h4 className={styles.subtitle}> sub title</h4>
        <ul>
          <li>
            <img
              src="https://avatars.githubusercontent.com/u/131247158?v=4"
              alt=""
            />
            <div>
              <p>host name</p>
              <button type="submit">참여</button>
            </div>
          </li>
        </ul>
      </article>
      <article>
        <h3> # 경기 펜션</h3>
        <ul>
          <li className={styles.rem}>1rem</li>
        </ul>
      </article>
      <article>
        <h3> # 경기 펜션</h3>
        <ul>
          <li>font-size</li>
        </ul>
      </article>
    </section>
  );
};

export default hostList;
