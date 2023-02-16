const RocketList = ({ rocketList, setRocketInfo }) => {
  return (
    <div className="date-grid">
      <div className="content">
        <h1
          style={{
            fontSize: 40
          }}
        >
          Rockets
        </h1>
      </div>
      <div className="card-container">
        {rocketList.map((rocket) => {
          return (
            <div className="card" onClick={() => setRocketInfo(rocket)}>
              <div className="image-constainer">
                <img
                  className="rocketimage"
                  src={rocket?.flickr_images[0]}
                  alt={"test"}
                />
              </div>
              <h2>{rocket?.rocket_name}</h2>
              <div className="tag">
                <span> {rocket?.country}</span>
              </div>
              <p>${rocket?.cost_per_launch}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RocketList;
