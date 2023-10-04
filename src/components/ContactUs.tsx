import { Props, SelectedPage } from "@/utilites/type";
import { motion } from "framer-motion";
import { useForm, useFormState } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { hText, inputStyles } from "@/utilites/myTailwindCSS";

export default function ContactUs({ setSelectedPage }: Props) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  async function onSubmit(e: any) {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className={`${hText} `}>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </h1>
          <p className="my-6">
            Ready to embark on a journey to a healthier, fitter you? Join our
            vibrant fitness community today and unlock the path to your fitness
            goals. Our dedicated team, state-of-the-art facilities, and diverse
            classes are here to support you every step of the way. Don't wait
            any longer – take the first step toward a better you by joining us
            now!
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 md:flex justify-between gap-8">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action={"https://formsubmit.com/bukacaro@mailgolem.com"}
            >
              <input
                className={`${inputStyles}`}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-2 text-primary-500 ">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}

              <input
                className={`${inputStyles}`}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-2 text-primary-500 ">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}

              <textarea
                className={`${inputStyles}`}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-2 text-primary-500 ">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-md bg-secondary-500 px-16 py-2 transition duration-500 hover:text-white font-bold"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="relative mt-12 basis-2/5 md:mt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:bottom-20 before:right-10 before:z-[-1]">
              <img
                className="w-full"
                alt="contactud-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
