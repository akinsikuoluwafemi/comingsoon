import React from 'react';
import Slider from 'react-slick';




class Infinite extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div style={{ height: '10rem'}}>
        <h2 > Multiple items </h2>
        <Slider {...settings}>
          <div className="bg-dark">
                <p>Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."</p>
          </div>
             <div className="bg-light">
            
            <p>Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."</p>

          </div>
          <div>
                    <p>Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."</p>
                    
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
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