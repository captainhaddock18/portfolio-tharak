import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-textGreen tracking-[4px]">2022-Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Extracurriculars</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Vice President - SAA"
            subTitle="Society of Alumni Affairs"
            result="(2024- Present)"
            des=""
          />
          <ResumeCard
            title="Coordinator - SAA"
            subTitle="Society of Alumni Affairs"
            result="(2023 - 2024)"
            des="Successfully built a support team of 40 first year students. The students were guided and mentored to
interact with the alumni and execute new ideas to strengthen the network. Started an Initiative of Alumni Memoirs. Alumni memoirs are series of posts each revealing the college
journey of our alumni. Successfully Conducted Multiple Ask An Alumnus sessions (both Offline and Online) for students to
get knowledge about various different field"
          />
          <ResumeCard
            title="Assistant Head - IGNUS"
            subTitle="Annual Cultural Fest of IITJ"
            result="Feb 2024"
            des="Successfully executed the entry of a large number of outsiders into the Pronite using an in-house app and E-pass system.Also Set up a help desk to help the people facing issues in the app and the obtaining an E-Pass"
          />
          <ResumeCard
            title="Assistant Head - Prometeo"
            subTitle="Prometeo - IITJ's Annual Technical and Entrepreneurial Fest"
            result="Jan 2024"
            des="Successfully planned and executed an Alumni panel discussion consisting of 2012 batch and 2015 batch Alumni."
          />
                    <ResumeCard
            title="Volunteer - TEDx"
            subTitle="TEDx IIT Jodhpur"
            result="Jan 2023"
            des=""
          />
        </div>
      </div>
 
     </motion.div>
  );
};

export default Experience;
