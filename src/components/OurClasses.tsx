import { Props, SelectedPage, ClassesT } from "@/utilites/type";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import { hText } from "@/utilites/myTailwindCSS";
import Class from "@/components/Class";

const classes: ClassesT[] = [
  {
    name: "Weight Training Classes",
    description:
      "These classes focus on building strength and muscle through various weightlifting exercises, providing you with a comprehensive workout regimen.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Our yoga classes offer a tranquil and rejuvenating experience, helping you enhance flexibility, reduce stress, and promote overall well-being.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Join our Ab Core Classes to target your core muscles, sculpt your abs, and achieve a strong and toned midsection.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on thrilling fitness adventures with our Adventure Classes, where you'll push your limits and explore exciting challenges.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Our Fitness Classes encompass a wide range of workouts designed to boost your cardiovascular health, endurance, and overall fitness level.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Experience comprehensive training sessions that cater to various fitness goals, providing guidance and motivation for your fitness journey.",
    image: image6,
  },
];

export default function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <h1 className={`${hText}`}>OUR CLASSES</h1>
            <p className="py-6">
              Experience the vitality of our fitness classes. Whether you're a
              seasoned enthusiast or just starting, our classes offer a
              welcoming environment for all. From invigorating cardio sessions
              to strength-building workouts, our expert instructors are here to
              help you reach your fitness goals. Join us and discover a path to
              a healthier and happier you.
            </p>
          </div>
        </motion.div>
        <div className="mt-12 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
