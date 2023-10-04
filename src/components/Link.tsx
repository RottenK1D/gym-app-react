import AnchorLink from "react-anchor-link-smooth-scroll";
import { Props, SelectedPage } from "@/utilites/type";

export default function Link({
  page = "",
  selectedPage,
  setSelectedPage,
}: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}
