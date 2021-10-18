import { useRef } from 'react';

export const Header = (props) => {
  const introElement = useRef();
  const parallaxHandler = (e) => {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;

    let _depth1 = `${50 - (_mouseX - _w) * 0.015}% ${
      50 - (_mouseY - _h) * 0.015
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.03}% ${
      50 - (_mouseY - _h) * 0.03
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * -0.02}% ${
      50 - (_mouseY - _h) * -0.04
    }%`;

    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    introElement.current.style.backgroundPosition = x;
  };

  return (
    <header id='header'>
      <div className='intro' onMouseMove={parallaxHandler} ref={introElement}>
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
