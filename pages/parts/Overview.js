import Image from "next/image";

import Card from "pages/components/Card";
import CursorButton from "pages/components/CursorButton";
import styles from "styles/Overview.module.scss";
import skills from "utils/skills";

function Overview() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/assets/png/summary_vector.png"
          alt="summary_vector"
          width="1388"
          height="1375"
          className={styles.vector}
        />
      </div>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Image
              src="/assets/svg/logo_text.svg"
              alt="shinghotan_logo"
              width="100"
              height="35"
              className={styles.logo}
            />
            <div className={styles.headerItem}>Summary</div>
            <div className={styles.headerItem}>Skills</div>
            <div className={styles.headerItem}>Experience</div>
            <div className={styles.headerItem}>Education</div>
          </div>
          <div className={styles.headerRight}>
            <Card
              style={styles.rightButton}
              link="mailto:talenteyedev@gmail.com"
            >
              Contact me
            </Card>
          </div>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.mainLeft}>
          <div className={styles.name}>SHING HO TAN</div>
          <div className={styles.overview}>
            Senior Full Stack Developer specializing in front end development.
            Experienced with all stages of the development cycle for dynamic web
            and mobile projects.
            <div className={styles.overviewSecond}>
              Well-versed in numerous prog ramming languages and frameworks
              including JavaScript, React.js, React- Native, Vue.js, Python,
              Django, Node.js, Java, Spring- boot, ASP.NET. Strong background in
              project management and customer relations.
            </div>
            <CursorButton
              style={styles.clickButton}
              link="mailto:talenteyedev@gmail.com"
            >
              Contact me
            </CursorButton>
          </div>
        </div>
        <div className={styles.mainRight}>
          <div className={styles.introduceContainer}>
            <div className={styles.introduceBox}>
              Senior Full Stack Developer
            </div>
            <div className={styles.pfpContainer}>
              <Image
                src="/assets/svg/curved_line.svg"
                alt="curved_line"
                width="97"
                height="73"
                className={styles.pfp}
              />
            </div>
          </div>
          <div className={styles.pfpContainer}>
            <Image
              src="/assets/svg/pfp.svg"
              alt="shinghotan_pfp"
              width="830"
              height="830"
              className={styles.pfp}
            />
          </div>
          <div className={styles.skillsContainer}>
            <div className={styles.skillsHeader}>
              <div className={styles.redBut} />
              <div className={styles.yellowBut} />
              <div className={styles.greenBut} />
            </div>
            {skills.map((skill) => (
              <div className={styles.skill} key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
