import profilePic from "../assets/profile-picture.jpg"

function Card() {

    return (
        <div className="card">
            <img src={profilePic} className="card-image" alt="profile picture" />
            <h2 className="card-title">Roshan</h2>
            <p className="card-text">Roshan is a backend developer. I play video games.</p>
        </div>
    )
}

export default Card;