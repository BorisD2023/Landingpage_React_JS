import './Firstsection.css'

const Main = () => {
    return (
        <main>
            <section className='business'>
                <h6>What We Do</h6>
                <h1>We've got everything you need to launch and grow your business</h1>
            </section>
            <section className='brand'>
                <article>
                    <section>
                    <img src="./src/assets/img/brush.svg" alt="brush" />
                    <div>
                    <h5>Brand Identity</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit est corporis labore earum quos saepe temporibus hic eius doloremque. Suscipit voluptas magnam officiis ea dolor perferendis minus nemo, amet ut?</p>
                    </div>
                    </section>
                    <section>
                    <img src="./src/assets/img/megaphone.svg" alt="megaphone" />
                    <div>
                    <h5>Marketing</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit est corporis labore earum quos saepe temporibus hic eius doloremque. Suscipit voluptas magnam officiis ea dolor perferendis minus nemo, amet ut?</p>
                    </div>
                    </section>
                </article>
                <article>
                    <section>
                    <img src="./src/assets/img/object-select.svg" alt="select" />
                    <div>
                    <h5>illustration</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit est corporis labore earum quos saepe temporibus hic eius doloremque. Suscipit voluptas magnam officiis ea dolor perferendis minus nemo, amet ut?</p>
                    </div>
                    </section>
                    <section>
                    <img src="./src/assets/img/globe-line.svg" alt="globe" />
                    <div>
                    <h5>Web Design</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit est corporis labore earum quos saepe temporibus hic eius doloremque. Suscipit voluptas magnam officiis ea dolor perferendis minus nemo, amet ut?</p>
                    </div>
                    </section>
                </article>
            </section>
        </main>
      );
}
 
export default Main;