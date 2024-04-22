import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { livePreview } from "../assets";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({
  index,
  name,
  description,
  tags,
  image,
  certificates_link,
  // company_logo
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(certificates_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={livePreview}
                alt="Live Preview"
                className="w-3/4 h-3/4 object-contain rounded-full"
              />
            </div>
            {/* <div onClick={() => window.open(source_code_link, "_blank")} className="certificate_circle w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={company_logo} alt="github" className="w-[80%] h-[80%] object-contain" />
            </div> */}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={styles.sectionHeadText}>Certificates.</h2>
      </div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following are my certificates which I received after completing my
          internships, courses, etc., displaying the tangible evidence of my
          journey through various internships, encapsulated in certificates and
          glowing letters of recommendation. Each certificate represents not
          just a period of time spent in a professional setting, but a
          dedication to honing my craft in web development.
        </motion.p>
      </div>

      <div className="mt-6 flex flex-wrap gap-7">
        {certificates.map((project, index) => (
          <CertificateCard
            key={`certificate-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "");
