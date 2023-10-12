import React, {useState} from "react";

function MoreButton({loadMore}) {

  return <button onClick={loadMore}>More sushi!</button>;
}

export default MoreButton;
