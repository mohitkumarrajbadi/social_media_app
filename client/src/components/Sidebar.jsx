const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="card">
                    <img className="card-img-top background-image-card" src="https://i0.wp.com/healthyresumes.com/wp-content/uploads/2022/01/LinkedIn-Background-Photo-47-1.png?resize=1024%2C256&ssl=1" alt="Background Images"></img>
                    <img className="img-fluid rounded-circle profile-image" src="mohitimage.jpeg" width="100px" alt="Profile Images"></img>
                    <div className="card-body text-center">
                        <h4 className="card-title name">Mohit Kumar Raj Badi <i class="fa-solid fa-certificate"></i></h4>
                        <p className="card-text username"><i class="fa-solid fa-at"></i>mohit_the_coder</p>
                        <div className="bio-section card-text">
                            Hello , I am Mohit. I am a coder.
                            Peace Brother.
                        </div>
                        <div className="row follow-data-section">
                        <div class="wrap">
                        <div class="social">
                            <i class="fa-brands fa-facebook fb"></i>
                            <i class="fa-brands fa-twitter tw"></i>
                            <i class="fa-brands fa-instagram in"></i>
                            <i class="fa-brands fa-github git"></i>
                            <i class="fa-brands fa-apple git"></i>
                        </div>
                        </div>
                        </div>
                        <div className="profile-button">
                            <a className="my-profile-link" href="#myprofile">My Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;