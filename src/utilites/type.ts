export enum SelectedPage {
  Home = "Home",
  Benefits = "Benefits",
  OurClasses = "Our Classes",
  ContactUs = "Contact Us",
}

export type Props = {
  page?: string;
  selectedPage?: SelectedPage;
  isTopOfPage?: boolean;
  setSelectedPage: (value: SelectedPage) => void;
  children?: React.ReactNode;
};

export type BenefitT = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export type ClassesT = {
  name?: string;
  description?: string;
  image?: string;
};
