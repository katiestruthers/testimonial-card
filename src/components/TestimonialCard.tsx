import profileImage from "../img/profile-thumbnail.png";

export const TestimonialCard = () => {
  return (
    <article className="card">
      <header>
        <img src={profileImage} alt="User profile thumbnail" />
        <span>
          <div className="text-lg text-neutral-900 font-semibold">Sarah Dole</div>
          <div className="text-sm text-neutral-600">@sarahdole</div>
        </span>
      </header>
      <p className="text-base text-neutral-600">I've been searching for high-quality abstract images for my design projects, 
      and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!</p>
    </article>
  )
};