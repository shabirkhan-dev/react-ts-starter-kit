type ProfileProps = {
  name: string;
  username: string;
  image: string;
};

const Profile = ({ name, username, image }: ProfileProps) => {
  return (
    <div data-cy="profile" className="flex  gap-2 items-center">
      <img className="w-14 h-14 rounded-full" src={image} alt={name} />
      <div className="flex flex-col gap-0.5">
        <h1 className="text-sm font-medium m-0">{name}</h1>
        <p className="text-xs text-gray-500 m-0">{username}</p>
      </div>
    </div>
  );
};

export default Profile;
