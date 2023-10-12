import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({API, setBudget, budget}) {
  const [sushis, setSushis] = useState([])
  const [visibleSushi, setVisibleSushi] =useState(4)

  const loadMore = () => {
    setVisibleSushi(visibleSushi + 4)
  }

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(sushiData => setSushis(sushiData))
      .catch(error => console.error(error))
  }, []) 
  console.log(sushis)
  return (
    <div className="belt">
      {sushis.slice(0, visibleSushi).map((sushi) => {
        return(
          <Sushi key={sushi.id} name={sushi.name} image={sushi.img_url} price={sushi.price} budget={budget} setBudget={setBudget} />
        )
      })}
      <MoreButton loadMore={loadMore}/>
    </div>
  );
}

export default SushiContainer;
