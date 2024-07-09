import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Over two years of experience in developing modern, reactive user
            interfaces with a keen eye for design and detail, specializing in
            front-end development. Considerable proficiency in Python,
            Javascript and their associated libraries/frameworks like React,
            Typescript, NextJs, NumPy, Matplotlib and Pandas. I have a solid
            understanding of React hooks, state management and simultaneously
            can create sleek designs by utilizing CSS, Tailwind CSS, SaSS, LESS
            and bootstrap to make attractive and intuitive user interfaces. Have
            experience in AI and Data Science as well.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
