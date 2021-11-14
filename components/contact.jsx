export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="social">
              <ul>
                <li>
                  <a href={props.data ? props.data.medium : '/'}>
                    <i className="fa fa-medium"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.twitter : '/'}>
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.telegram : '/'}>
                    <i className="fa fa-telegram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="row"></div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{' '}
                {props.data ? (
                  <a href={`mailto:${props.data.email}`}>{props.data.email}</a>
                ) : (
                  'loading'
                )}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row"></div>
          </div>
        </div>
      </div>
      {/* <div id='footer'>
        <div className='container text-center'>
          <p>&copy; 2021 Himo World</p>
        </div>
      </div> */}
    </div>
  );
};
