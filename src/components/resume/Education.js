import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-textGreen tracking-[4px]">2013 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Engineering Science"
            subTitle="Indian Institute of Technology Jodhpur (2022 - Present)"
            result="8.44/10 "
            des=""
          />
          <ResumeCard
            title="PUC II"
            subTitle="MIPU College(Avanti) (2020-2022)"
            result="95.7% (PCM - 100/100)"
            des="PUC(Class 12) is an essential step for students who wish to
             pursue higher education after completing their secondary school (10th grade)."
          />
          <ResumeCard
            title="Class 10 (CBSE)"
            subTitle="Shri Manjunatheshwar Central School (2013 - 2020)"
            result="95.4%"
            des=""
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-textGreen tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SDE Intern"
            subTitle="GlutaClass"
            result="Remote"
            des="Collaborating with GlutaClass, I've been enhancing the platform to facilitate effective simulation-based learning while also integrating additional features into the backend."
          />
          <ResumeCard
            title="Team Member - Inter-IIT Contingent"
            subTitle="Adobe Problem Statement"
            result="Conducted in Chennai"
            des=" Worked on the idea of building a model which trains on a dataset consisting of tweets and can generate tweets that
give optimum values of KPI (key Performance Indicators)"
          />
          <ResumeCard
            title="Project Member - PRAISE"
            subTitle="RAID (AI Society of IITJ)"
            result="Jodhpur"
            des="The PRAISE team specializes in Personality Recognition Using AI on Semantics, 
            employing machine learning models to predict personality traits based on handwriting patterns"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
