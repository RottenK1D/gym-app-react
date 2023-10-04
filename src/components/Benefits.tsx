import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Props, SelectedPage, BenefitT } from "@/utilites/type";
import { motion } from "framer-motion";
import { hText } from "@/utilites/myTailwindCSS";
import BenefitsList from "@/components/BenefitsList";
import ActionButton from "./ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: BenefitT[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Cutting-Edge Facilities",
    description:
      "Experience top-notch facilities designed for your comfort and performance. Unmatched quality awaits you.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Diverse Range of Classes",
    description:
      "Choose from a multitude of diverse classes to cater to every fitness level. Your fitness journey, your choices.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Seasoned Fitness Experts",
    description:
      "Our team of seasoned fitness experts is here to guide you on your fitness journey. Get the support you need.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { stagger: 0.2 },
  },
};

export default function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
      {/* HEADER */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:w-3/5 md:my-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className={`${hText}`}>BEYOND A SIMPLE GYM EXPERIENCE</h1>
          <p className="my-6 text-sm">
            We offer top-tier fitness equipment, expert trainers, and a wide
            range of classes, all dedicated to helping you achieve your fitness
            goals effortlessly. Our commitment to every member is unparalleled,
            ensuring your well-being every step of the way.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-6 md:flex items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <BenefitsList
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>

        {/* GRAPHICS */}
        <div className="mt-12 md:flex items-center justify-between gap-20 md:mt-32 ">
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />
          {/* DESCRIPTION */}
          <div>
            <div className="relative">
              <div className="before:absolute before-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h1 className={`${hText}`}>
                    Numerous Satisfied Members Achieving{" "}
                    <span className="text-primary-500">FIT</span>
                  </h1>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-8">
                Discover a nurturing environment where fitness takes center
                stage. Our state-of-the-art facilities and expert trainers are
                here to guide you on your journey to a healthier you. Join us in
                achieving your fitness goals today.
              </p>
              <p className="mb-8">
                Embrace the path to a healthier lifestyle with us. Our dedicated
                team and diverse range of fitness options are designed to
                empower you. Explore a world of wellness and make every workout
                count.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-b-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
