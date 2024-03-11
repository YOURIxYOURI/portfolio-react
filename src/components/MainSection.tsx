import '../styles/MainSection.css'

function MainSection() {
    return(
        <section className='main-section'>
            <div className='content-box'>
                <div className='content'>
                    <p className='title'>Hi, I'm (NAME)</p>
                    <h1 className='description-header'> 
                    Full Stack 
                    <br />
                    Developer
                    </h1>
                    <span className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus eu dui rhoncus egestas at ac tortor. Nulla venenatis lobortis velit, eu malesuada quam malesuada non.
                    </span>
                    <button className='btn-default'>
                    Contac me
                    </button>
                </div>
                <div className='image-box'>
                    <img className='profile-image' src="/image/profilePicture.jpg" alt="profile picture"/>
                </div>
            </div>
        </section>
    )
}

export default MainSection