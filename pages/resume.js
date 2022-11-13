import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobile,
  faLanguage,
  faHandshake,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import BGI from '../src/components/BGI';
import styles from '../styles/Home.module.css'

const Resume = () => {
    return (
        <div className={styles.container}>
        <Head>
          <title>Sajma Seper</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
        <div className={styles.backgroundimage}>
            <BGI/>
          </div>
  
          <div className={styles.sajmagrid}>
          <div className={styles.itemSajmaGrid1}>
            <h1 className={styles.title}>
            Sajma Šeper
            </h1>
          </div>
  
          <div className={styles.itemSajmaGridPhone}>
          <div>
              <FontAwesomeIcon
              icon={faMobile}
              style={{ fontSize: 53, color: "grey",justifyContent:"center",alignContent:"center" }}
              />
              </div>
            <div>         
              <p>061-319-058</p>
            </div>
          </div>
  
          <div className={styles.itemSajmaGridEmail}>
            <div>
              <FontAwesomeIcon
              icon={faEnvelope}
              style={{ fontSize: 40, color: "white",justifyContent:"center",alignContent:"center" }}
              />
              </div>
            <div>         
              <p>sajma.seper@gmail.com</p>
            </div>
          </div>
  
  
  
          <div className={styles.itemSajmaGridSummary}>
            <p>
              Im a Legal Assistant with
              over 13 years of experience
              in Toronto law firms
              specializing in personal
              injury. Currently, I am
              looking for a position in a
              law firm that will allow me to
              fully utilize my skills and
              knowledge.
            </p>
          </div>
  
          <div className={styles.itemSajmaGridReferences}>
            <h2>References</h2>
            <p>
            <a>Phillip Paglino, Lawyer:</a>
              
                <q>
                  Sajma is extremely committed to the
                  practice of law and cares deeply for
                  our clients. She does everything she
                  can to provide the best services and
                  results. She is a fair and understanding
                  person and a great person to work
                  with.
                </q>
            </p>
            <p>
              Rocky Lofranco, Lawyer Senior
              Partner and Founder:
                <q>
                It has taken a lot of hard work to
                accomplish our goal but we have done
                it! Your bonus is my appreciation for
                your efforts and another way of saying
                thanks for a job well done.
                </q>
            </p>
            <p>
              Bobby Vujicic, Licensed Paralegal
            </p>
          </div>
  
          <div className={styles.itemSajmaGridProfessional}>
            <h2>PROFESSIONAL EXPERIENCE</h2>
            <h5>
              2012 to 2017
            </h5>
            <h3>TZAFERIS PERSONAL INJURY LAWYERS, TORONTO, CANADA</h3>
              <ul>
                <li>Meeting with clients for initial interviews, updates, etc.</li>
                <li>Preparing detailed memorandums that pinpoint issues and recommend
              course of action.</li>
                <li>Dealing with insurance adjusters  lawyers.</li>
                <li>Reviewing mail and responding to insurance companies, lawyers and
              doctors.</li>
                <li>Requesting medical legal reports and assessments reports.</li>
                <li>Preparing Applications for Mediation and Arbitration.</li>
                <li>Scheduling mediations and arbitration pre-hearings.</li>
                <li>Participating in face to face mediation as well as the arbitration
              pre-hearings.</li>
                <li>Collecting outstanding accounts.</li>
                <li>Preparing interim, disbursements and final accounts.</li>
                <li>Scheduling discoveries and non-binding mediation.</li>
                <li>Preparing Affidavits of Documents.</li>
                <li>Requesting new productions and follow up on undertakings.</li>
                <li>Preparing Statements of Claim and Trial Records.</li>
                <li>Preparing CPP/STD/LTD applications.</li>
              </ul>
            <h5>2007 - 2010</h5>
            <h3>LOFRANCO CHAGPAR CORRIERO, TORONTO, CANADA</h3>     
              <ul>
                <li>Meeting with clients for initial interviews, updates, etc.</li>
                <li>Dealing with insurance adjusters and lawyers.</li>
                <li>Reviewing mail and responding to insurance companies, lawyers and
              doctors.</li>
                <li>Preparing Applications for Mediation and Arbitration.</li>
                <li>Scheduling mediations and arbitration pre-hearings.</li>
                <li>Participating in face to face mediation as well as the arbitration
              pre-hearings.</li>
                <li>Preparing interim and final accounts.</li>
                <li>Scheduling discoveries and non-binding mediation.</li>
                <li>Requesting new productions and follow up on undertakings</li>
                <li>Preparing Trial Records</li>
                <li>Collecting outstanding accounts</li>
                <li>Preparing CPP/STD/LTD applications</li>
                <li>Scheduling discoveries and non-binding mediation</li>
                <li>Preparing Affidavits of Documents</li>
              </ul>
              <h5>2005 - 2007</h5>
              <h3>LOFRANCO ROMEO PITARO CHAGPAR SHIELDS WOLFE, CANADA</h3>
              <ul>
                <li>Preparing Applications for Accident Benefits</li>
                <li>Preparing Applications for Mediation</li>
                <li>Meeting with clients for initial interviews, updates, etc.</li>
                <li>Dealing with private insurance claims</li>
              </ul>
              <h5>2001 - 2004</h5>
              <h3>UNITED PERSONAL INJURY ASSOCIATES INC., CANADA</h3>
              <ul>
                <li>Initial interviews and other related duties</li>
                <li>Preparing Applications for Accident Benefits</li>
                <li>Preparing settlement proposals</li>
                <li>Responding to daily correspondence</li>
              </ul>
          </div>
  
          <div className={styles.itemSajmaGridEducation}>
              <div>
                <FontAwesomeIcon
                icon={faGraduationCap}
                style={{ fontSize: 40, color: "black",justifyContent:"center",alignContent: "center" }}
                />
              </div>
              <div>
                <p>
                  Economic Technician
                  (1998), Mješovita Srednja
                  Ekonomsko Ugostiteljska
                  Škola, Travnik, BiH.
                </p>
              </div>
          </div>
  
          <div className={styles.itemSajmaGridSkills}>
          <div>
              <FontAwesomeIcon
              icon={faHandshake}
              style={{ fontSize: 40, color: "black",justifyContent:"center",alignContent:"center" }}
              />
              </div>
            <ul>
              <li>Critical thinking andproblem solving</li>
              <li>Teamwork and collaboration</li>
              <li>Professionalism and strong work ethic</li>
              <li>Oral and written communications skills</li>
              <li>Self -Management </li>
              <li>Willingness to learn</li>
            </ul>
          </div>
          
          <div className={styles.itemSajmaGridPersonal}>
            <h2>PERSONAL EXPERIENCE</h2>
            <h3>2017 - Present</h3>
            <h4>FILED A LAWSUIT AGAINST ELEKTROPRIVREDA BiH</h4>
            <h5>Preparing and assisting local lawyer in submitting legal documents to:</h5>
            <ul>
              <li>Municipal court</li>
              <li>Cantonal court</li>
              <li>Supreme court</li>
              <li>Constitutional court</li>
            </ul>
            <h4>PARTICIPATING IN A LAWSUIT AGAINST INDIRECT TAXATION AUTHORITY
  BiH</h4>
            <h5>Preparing and assisting lawyer in submitting legal documents to:</h5>
            <ul>
              <li>Regional Centre Mostar</li>
              <li>Regional Centre Banja Luka</li>
              <li>Court of Bosnia and Herzegovina</li>
            </ul>
            <h4>FILED A LAWSUIT AGAINST SBK - Central Bosnia Canton</h4>
            <ul>
              <li>Preparing and assisting lawyer in submitting legal documents to Municipal
  court.</li>
              <li>Lodging a complaint to the Ombudsman and follow-up on their
  investigations.</li>
            </ul>
          </div>
  
    <div className={styles.itemSajmaGridLanguages}>
          <div>
              <FontAwesomeIcon
              icon={faLanguage}
              style={{ fontSize: 40, color: "black",justifyContent:"center",alignContent:"center" }}
              />
            </div>
            <ul>
              <li>Bosnian: Mother tongue</li>
              <li>English: Proficient</li>
              <li>French: Intermediate</li>
            </ul>
    </div>
  
  </div>
  
        </main>
  
        <footer className={styles.footer}>
        </footer>
      </div>
    )
}

export default Resume;