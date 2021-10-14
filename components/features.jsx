export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Gameplay</h2>
          <p>
            Himo World takes you to an epic battle, where you can challenge even
            Gods. The game has a lot of modes, from Campaign, PvP, to
            Tournament, Betting,... with monthly updates and worthy rewards.
          </p>
        </div>
        <div className='row'>
          <img
            src='img/gameplayscreen.jpg'
            className='img-responsive'
            alt=''
            style={{ padding: 50 }}
          />
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  );
};
