import './Header.css'

function Header() {
    return(
        <header>
            <section className='firstSection'>
            <h3>Hello There</h3>
            <h1>We Are Glint</h1>
            </section>
            <section className='secondSection'>
            <div className='underline'></div>
                <p>Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eius fugit pariatur officiis id quisquam perferendis in soluta molestias suscipit? Quasi ratione veritatis animi ducimus! Consequuntur error magnam libero totam. ipsum dolor, sit amet consectetur adipisicing elit. Libero enim hic omnis necessitatibus fugit, rem dolore ad iusto ab fuga molestiae sint nemo voluptas ipsam cum eaque id nostrum vitae. Repellat id asperiores ipsum voluptatem. Earum voluptate eaque minima beatae.</p>
            </section>
            <section className='articleSection'>
                <article>
                <h1>127</h1>
                <h6>Avard Received</h6>
                </article>
                <div className="line"></div>
                <article>
                <h1>1505</h1>
                <h6>Cups of Coffee</h6>
                </article>
                <div className="line"></div>
                <article>
                <h1>109</h1>
                <h6>Projects Completed</h6>
                </article>
                <div className="line"></div>
                <article>
                <h1>102</h1>
                <h6>Happy Clients</h6>
                </article>
            </section>
        </header>
    )
}

export default Header;