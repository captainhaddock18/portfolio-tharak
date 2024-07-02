import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
// import Skills from './Skills';
// import Achievement from './Achievement';
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  // const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  //  const [achievementData, setAchievementData] = useState(false);
  
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Constantly learning and evolving" des="My Resume" />
      </div>
      <div className="flex justify-center">
        <ul className="w-full flex justify-center gap-4">
          <li
            onClick={() => {
              setEducationData(true);
              // setSkillData(false);
              setExperienceData(false);
              // setAchievementData(false);
            }}
            className={`${
              educationData
                ? "border-textGreen rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          {/* <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
              // setAchievementData(false);
            }}
            className={`${
              skillData ? "border-textGreen rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li> */}
          <li
            onClick={() => {
              setEducationData(false);
              // setSkillData(false);
              setExperienceData(true);
              // setAchievementData(false);
            }}
            className={`${
              experienceData
                ? "border-textGreen rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {/* {skillData && <Skills />} */}
      {/* {achievementData && <Achievement />} */}
      {experienceData && <Experience />}
    </section>
  );
}

export default Resume;
