import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`sm:px-16 px-6 sm:py-4 py-10 max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

const ContactDirectly = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Contact Me</p>
        <h2 className={styles.sectionHeadText}>Directly.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[19px] max-[450px]:text-[15px] max-w-3xl leading-[30px]"
      >
        <p>
          <span className="text-purple-500">Email -</span>{" "}
          jikunalvermabbbb@gmail.com
          <br className="min-[850px]:hidden" />
          <span className="text-purple-500 min-[851px]:ml-16 lg:ml-32">Phone No. -</span> +91 62399
          22797
        </p>
      </motion.p>
    </>
  );
};

export default SectionWrapper(ContactDirectly, "");
