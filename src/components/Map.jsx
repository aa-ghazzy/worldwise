import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h3>MAP CONTENT</h3>
      <p>
        position: lat:{lat} / lng:{lng}
      </p>
      <button
        onClick={() => {
          setSearchParams({ lat: 11, lng: 12 });
        }}
      >
        PUSH
      </button>
    </div>
  );
}

export default Map;
