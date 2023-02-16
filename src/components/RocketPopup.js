const RocketPopup = ({ rocketInfo, setRocketInfo }) => {
  return rocketInfo.id ? (
    <div className="popup">
      <div className="popup-container">
        <div
          className="cross"
          onClick={() => {
            setRocketInfo({});
          }}
        >
          X
        </div>
        <div className="image-constainer">
          <img
            className="rocketimage"
            src={rocketInfo?.flickr_images[0]}
            alt={"test"}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: 10
            }}
          >
            {rocketInfo?.flickr_images.map((link) => (
              <img
                width="50"
                src={link}
                alt={"test"}
                style={{
                  margin: 5
                }}
              />
            ))}
          </div>
        </div>
        <div>
          <p style={{ marginBottom: 10, color: "#aaa" }}>
            {rocketInfo?.first_flight}
          </p>
          <h2>{rocketInfo?.rocket_name}</h2>
          <div className="tag">
            <span> {rocketInfo?.country}</span>
          </div>

          <p style={{ marginTop: 10 }}>
            <b>Height : </b> {rocketInfo.height.meters} m
          </p>
          <p style={{ marginTop: 10 }}>
            <b>Mass : </b> {rocketInfo.mass.kg} kg
          </p>
          <p style={{ marginTop: 10, color: "#aaa" }}>
            {rocketInfo?.description}
          </p>
          <a href={rocketInfo?.wikipedia} rel="noreferrer" target="_blank">
            <img
              className="icon"
              width={20}
              height={20}
              alt="wiki"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Wikipedia%27s_W.svg/1024px-Wikipedia%27s_W.svg.png"
            />
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default RocketPopup;
