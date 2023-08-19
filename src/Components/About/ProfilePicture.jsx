import "./ProfilePicture.scss";

const ProfilePicture = () => (
  <div className="center-content">
    <img
      className="profile-picture"
      src={`${process.env.PUBLIC_URL}/CAPic.jpeg`}
      alt="Patrick Vuscan in California"
      aria-label="Patrick Vuscan in California"
    />
  </div>
);

export default ProfilePicture;
