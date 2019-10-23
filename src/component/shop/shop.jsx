import React from "react";
import shop_data from "./shopData";
import "./shop.scss";
import CollectionPreview from "../collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collectons: shop_data
    };
  }

  render() {
    const { collectons } = this.state;
    return (
      <div className="shop-page">
        {collectons.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionProps}
          ></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
