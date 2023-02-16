import "./styles.css";
import { useEffect, useState } from "react";

import {
  Banner,
  CapsuleResult,
  RocketList,
  RocketPopup,
  SearchSection
} from "./components";

export default function App() {
  const [rocketList, setRocketList] = useState([]);
  const [capsules, setCapsulesList] = useState([]);
  const [capsuleInfo, setCapsuleInfo] = useState({});
  const [rocketInfo, setRocketInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((res) => res.json())
      .then((res) => {
        setRocketList(res);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    setNoResult(false);
    let str = status ? [`status=${status}`] : [];
    type && str.push(`type=${type}`);
    str = str.join("&");

    console.log("https://api.spacexdata.com/v3/capsules?" + str);
    fetch("https://api.spacexdata.com/v3/capsules?" + str)
      .then((res) => res.json())
      .then((res) => {
        if (res.length > 0) setCapsulesList(res);
        else setNoResult(true);
      });
  };

  return loading ? (
    <div className="center">
      <img
        class="rocket"
        alt="animation"
        src={require("./rocket.png")}
        width="100"
      />
      <div>Lauching...</div>
    </div>
  ) : (
    <div
      className="container"
      style={rocketInfo?.id ? { overflow: "hidden" } : {}}
    >
      <div className="header">
        <div>Space-X</div>
      </div>
      <Banner />
      <SearchSection
        noResult={noResult}
        setStatus={setStatus}
        setType={setType}
        handleSearch={handleSearch}
      />
      <CapsuleResult capsules={capsules} setCapsuleInfo={setCapsuleInfo} />
      <RocketList rocketList={rocketList} setRocketInfo={setRocketInfo} />
      <RocketPopup rocketInfo={rocketInfo} setRocketInfo={setRocketInfo} />
      <div className="footer">
        <div>2023 © Vishnu - FrontEnd Deveoper</div>
      </div>
    </div>
  );
}
