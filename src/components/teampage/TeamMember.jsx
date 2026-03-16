const TeamMember = ({ name, role, avatar }) => {
  return (
    <div className="rounded-lg overflow-hidden text-left">
      <img src={avatar} alt={name} className="w-full h-[370px] object-cover" />

      <div className="py-5">
        <h3 className="text-lg font-bold text-[#252B42] pl-2">{name}</h3>

        <p className="text-sm text-[#737373] mt-1 pl-2">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
