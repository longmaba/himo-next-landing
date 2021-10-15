export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Gameplay</h2>
          <p>
            Himo World takes you to an epic battle, where you can challenge even
            Gods. The game has a lot of modes, from Campaign, PvP, to
            Tournament, Betting,... with monthly updates and worthy rewards.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="row"
                    style={{ padding: 20 }}
                  >
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
          <div className="col-md-6">
            <img
              src="/static/img/mockup.png"
              className="img-responsive"
              alt=""
              style={{ padding: 10 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
