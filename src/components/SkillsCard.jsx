import "./SkillsCard.css";
const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="skills-card">
      <span className="skills-icon inline-block hover:animate-bounce">
        {icon}
      </span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};
export default SkillsCard;
