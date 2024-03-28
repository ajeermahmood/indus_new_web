import HomePage from "./home/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Unveiling Excellence: Best in Dubai with Indus Real Estate",
  description:
    "Indulge in the luxury of Dubai living with Indus Real Estate LLC! Expert agents, exclusive listings. Your dream property awaits, start your journey now",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  );
}
