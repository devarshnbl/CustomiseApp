import React from "react";
import { Pocket } from "../Pocket/PocketCard";

export const PocketList = ({ pockets, onDeletePocket, onUpdatePocketText }) => {
  return (
    <div>
      {pockets.map((pocket) => (
        <Pocket
          key={pocket.id}
          pocket={pocket}
          onDeletePocket={onDeletePocket}
          onUpdatePocketText={onUpdatePocketText}
        />
      ))}
    </div>
  );
};
