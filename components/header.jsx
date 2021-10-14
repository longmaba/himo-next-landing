export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-md-offset-2 intro-text'>
              <h1>
                {props.data ? props.data.title : 'Loading'}
                <span></span>
              </h1>
              <p>
                <mark
                  style={{
                    backgroundColor: '#37194f',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  {props.data ? props.data.paragraph : 'Loading'}
                </mark>
              </p>
              <a href='#about' className='btn btn-custom btn-lg page-scroll'>
                Learn More
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
