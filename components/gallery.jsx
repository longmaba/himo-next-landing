import { Image } from './image';

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Backed By</h2>
        </div>
        <div className="row justify-content-center">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => {
                  return (
                    <img className="portfolio-item" key={i} src={d.largeImage} alt="" height={80} />
                  );
                })
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  );
};
