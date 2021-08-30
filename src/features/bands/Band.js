import React from "react";
import { useDispatch } from "react-redux";
import { bandRemoved } from "./bandsSlice";

const Band = ({ band }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(bandRemoved(band.id));
  };
  return (
    <ul>
      <li>
        {band.name} <button onClick={handleDelete}>Delete Band</button>
      </li>
    </ul>
  );
};

export default Band;
