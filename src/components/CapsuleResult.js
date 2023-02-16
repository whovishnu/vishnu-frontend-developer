const CapsuleResult = ({ capsules, setCapsuleInfo }) => {
  return capsules.length ? (
    <div className="date-grid2 ">
      <div className="content">
        <h1
          style={{
            fontSize: 40
          }}
        >
          Search Result
        </h1>
      </div>
      <div className="card-container">
        {capsules.map((capsule) => {
          return (
            <div className="card" onClick={() => setCapsuleInfo(capsule)}>
              <h2>{capsule?.type}</h2>
              <div className="tag">
                <span> {capsule?.capsule_serial}</span>
                <span>{capsule?.status}</span>
              </div>
              <p style={{ color: "#aaa" }}>
                <b>Total Landing :</b> {capsule?.landings}
              </p>
              <p>{capsule?.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default CapsuleResult;
