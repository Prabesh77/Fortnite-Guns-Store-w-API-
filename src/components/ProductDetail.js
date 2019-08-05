import React from "react";

const ProductDetail = ({ productItems, match }) => {
  console.log(productItems);
  return (
    <div className="container">
      {productItems.map(item =>
        item.identifier === match.params.id ? (
          <div className="item-details" key={item.identifier}>
            <img src={item.image} alt="" />
            <div className="explain">
              <h4>{item.name}</h4>
              <p>
                Rarity: <strong>{item.rarity}</strong>
              </p>
              <p>
                Ammocost: <strong>{item.stats.ammocost}</strong>
              </p>
              <p>
                {" "}
                DPS: <strong>{item.stats.dps}</strong>
              </p>
              <p>
                Firerate: <strong>{item.stats.firerate}</strong>{" "}
              </p>
              <p>
                Hit-body: <strong>{item.stats.hit_body}</strong>
              </p>
              <p>
                Hit-head: <strong>{item.stats.hit_head}</strong>
              </p>
              <p>
                Magazine-size:{" "}
                <strong>
                  {item.stats.magazinesize}
                  {item.stats.magazinesize}
                </strong>
              </p>
              <p>
                Reload-time:<strong>{item.stats.reloadtime}</strong>
              </p>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default ProductDetail;
