export default function ProfileCard({ title, handle, image, description }) {
  return (
    <div className='card'>
      <div className='card-image m-2'>
        <figure className='image is-1by1'>
          <img src={image} alt='pda logo' />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media-content'>
          <p className='title is-4 has-text-centered'>{title}</p>
          <p className='subtitle is-6'>{handle}</p>
        </div>
        <div className='sub-title'>{description}</div>
      </div>
    </div>
  );
}

// Do not use Destructuring
// function ProfileCard(title, handle) <use destrugturing> Or Choose below this old way
// function ProfileCard(props){
//   const {title, handle}= props;

//   return (
//     <>
//     <div>Title is {title}</div>
//     <div>Handle is {handle}</div>
//     <div>Title is {title}</div>
//     <div>Handle is {handle}</div>
//     <div>Title is {title}</div>
//     <div>Handle is {handle}</div>
//     </>
//     )
// }
// export default ProfileCard;

// Used Argument Destructuring
