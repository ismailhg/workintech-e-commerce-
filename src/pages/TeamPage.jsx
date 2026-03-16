import TeamMember from "../components/teampage/TeamMember";
import { team } from "../assets/teaminfo";

const TeamPage = () => {
  return (
    <section className="py-16 px-6 max-w-[1200px] mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-[#252B42]">Meet Our Team</h2>

      <p className="mb-12 text-[#737373] max-w-xl mx-auto">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member) => (
          <TeamMember
            key={member.id}
            avatar={member.avatar}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
