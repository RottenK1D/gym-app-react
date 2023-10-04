import { Props, SelectedPage } from "@/utilites/type";
import ActionButton from "@/components/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { flexBetween } from "@/utilites/myTailwindCSS";
import { motion } from "framer-motion";

export default function Home({ setSelectedPage }: Props) {
  return (
    <section id="home" className="gap-20 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* MAIN HEADER */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:content-evolvetext before:-left-20 before:z-[-1]">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Unmatched Fitness Center. Exceptional Workout Sessions.
              State-of-the-art Studios for Achieving Your Dream Body Shape.
              Attain Your Dream Physique Today.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:to-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>

      {/* SPONSORS */}

      <div className="md:h-[150px] w-full bg-primary-100 py-10">
        <div className="mx-auto w-5/6 flex">
          <div className={`${flexBetween} sm:w-3/5 gap-10 flex`}>
            <div>
              <img src={SponsorRedBull} alt="redbull-sponsor-logo shrink-1" />
            </div>
            <div>
              <img src={SponsorFortune} alt="fortune-sponsor-logo shrink" />
            </div>
            <div>
              <img src={SponsorForbes} alt="forbes-sponsor-logo shrink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
