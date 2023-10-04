import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { flexBetween } from "@/utilites/myTailwindCSS";
import Logo from "@/assets/Logo.png";
import { Props, SelectedPage } from "@/utilites/type";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import Link from "./Link";
import ActionButton from "@/components/ActionButton";

export default function Navbar({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isMediumScreen = useMediaQuery("(min-width: 1060px)");
  const menuNames = Object.values(SelectedPage);

  return (
    <nav>
      <div
        className={`${
          isTopOfPage ? "" : "bg-primary-100 drop-shadow"
        } ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-28`}>
            <img src={Logo} alt="logo" />

            {/* MEDIUM SCREENS */}
            {isMediumScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}></div>

                {menuNames.map((menuName, index) => (
                  <Link
                    key={index}
                    page={menuName}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                ))}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-lg bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                {!isMenuToggled ? (
                  <Bars3Icon className="h-6 w-6 text-white"></Bars3Icon>
                ) : (
                  <XMarkIcon className="h-6 w-6 text-gray-500" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE SCREENS AND MENU*/}
      {!isMediumScreen && isMenuToggled && (
        <div className="fixed right-0 top-0 h-full w-[300px] bg-primary-100 drop-shadow-md z-20">
          <div className="flex flex-col gap-10 ml-[33%] mt-40">
            {menuNames.map((menuName, index) => (
              <Link
                key={index}
                page={menuName}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
