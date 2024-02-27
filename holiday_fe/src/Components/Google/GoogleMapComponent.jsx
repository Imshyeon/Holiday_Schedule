import { useEffect, useRef, useState } from "react";

export default function GoogleMapComponent({ center, zoom }) {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map, center, zoom]);

  return <div ref={ref} id="map" className="w-full h-56" />;
}
