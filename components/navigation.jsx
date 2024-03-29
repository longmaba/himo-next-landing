export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1">
            {' '}
            <span className="sr-only">
              Toggle navigation
            </span> <span className="icon-bar"></span> <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            HIMO WORLD
          </a>{' '}
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                Introduction
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Gameplay
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                NFT Items
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                $HIMO Token
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#roadmap" className="page-scroll">
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/presentation/d/1unMs4QwDbgm9oVR9_mzLhASbS08obxZP6E4CdtHLhDY/edit?usp=sharing"
                className="page-scroll">
                Whitepaper
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
