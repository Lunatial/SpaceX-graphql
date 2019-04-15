import React from "react";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_success, launch_date_local }
}) {
  return (
    <div className="card card-body mb-3">
      <div className="col-md-9">
        <h4>Mission: {mission_name}</h4>
        <h4>Date: {launch_date_local}</h4>
      </div>
      <div className="col-md-3">
        <button className="btn btn-secondary">Launch details</button>
      </div>
    </div>
  );
}
