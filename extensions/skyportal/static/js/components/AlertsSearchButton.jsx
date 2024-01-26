import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import * as alertsActions from "../ducks/alerts";

const AlertsSearchButton = ({ ra, dec, radius = 3 }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(alertsActions.fetchAlerts({ object_id: null, ra, dec, radius }));
  };

  return (
    <Link
      to="/alerts"
      onClick={handleClick}
      target="_blank"
      style={{ textDecoration: "none", color: "black" }}
    >
      ZTF Alerts
    </Link>
  );
};

AlertsSearchButton.propTypes = {
  ra: PropTypes.number.isRequired,
  dec: PropTypes.number.isRequired,
  radius: PropTypes.number,
};
AlertsSearchButton.defaultProps = {
  radius: 3,
};

export default AlertsSearchButton;
