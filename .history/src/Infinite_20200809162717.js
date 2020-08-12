import React from 'react';
import Slider from 'react-slick';
import './Infinite.css';



class Infinite extends React.Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    return (
        <div style={{ height: '10rem', padding: '5rem' }} >
        <Slider {...settings}>
                <figure className="figure-container">
                    <div className="fig-image">
                        <span className=" tag text-dark font-weight-bold">OLYMPIC NEWS</span>

                    </div>
                    <figcaption className="figure-caption">
                        <p className="h6 caption-text font-weight-bold">Safer Sport day to reinforce the utmost</p>
                        <p className="date">08 AUG 2020</p>
                    </figcaption>
                </figure>
                <div className="bg-light px-3 py-3">
            
            <p>Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."</p>

          </div>
                <figure className="figure-container">
                    <div className="fig-image">
                        <span className=" tag text-dark font-weight-bold">OLYMPIC NEWS</span>

                    </div>
                    <figcaption className="figure-caption">
                        <p className="h6 caption-text font-weight-bold">Safer Sport day to reinforce the utmost</p>
                        <p className="date">08 AUG 2020</p>
                    </figcaption>
                </figure>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
                <figure className="figure-container">
                    <div className="fig-image">
                        <span className=" tag text-dark font-weight-bold">OLYMPIC NEWS</span>

                    </div>
                    <figcaption className="figure-caption">
                        <p className="h6 caption-text font-weight-bold">Safer Sport day to reinforce the utmost</p>
                        <p className="date">08 AUG 2020</p>
                    </figcaption>
                </figure>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    )
  }
}

export default Infinite;




{/* <div className="">
    <section className="container ">
        <p className="h3 py-4">Latest News</p>

        <div className="slide-container">
            <figure className="figure-container">
                <div className="fig-image">
                    <span className=" tag text-dark font-weight-bold">OLYMPIC NEWS</span>

                </div>
                <figcaption className="figure-caption">
                    <p className="h6 caption-text font-weight-bold">Safer Sport day to reinforce the utmost</p>
                    <p className="date">08 AUG 2020</p>
                </figcaption>
            </figure>

            <figure className="figure-container">
                <div className="fig-image">
                    <span className="tag  text-dark font-weight-bold">OLYMPIC NEWS</span>
                </div>
                <figcaption className="figure-caption">
                    <p className="h6 caption-text font-weight-bold">Safer Sport day to reinforce the utmost</p>
                    <p className="date">08 AUG 2020</p>
                </figcaption>
            </figure>

            <figure className="figure-container">
                <div className="fig-image">
                    <span className="tag text-dark font-weight-bold">OLYMPIC NEWS</span>

                </div>
                <figcaption className="figure-caption">
                    <p className="h6 caption-text font-weight-bold ">Safer Sport day to reinforce the utmost</p>
                    <p className="date">08 AUG 2020</p>
                </figcaption>
            </figure>



        </div>
    </section>
</div> */}
