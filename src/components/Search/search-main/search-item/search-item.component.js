import React, { Component } from "react";
import "./search-item.component.scss";

class SearchItemComponent extends Component {
  render() {
    return (
      <div class="container">
        <a href={"./Profile?id=" + this.props.id}>
          <img
            class="container__image"
            alt="text"
            src={
              "http://localhost/kontrol/uploads/" + this.props.address + ".png"
            }
          />
        </a>
        <div class="container__text">
          {this.props.id} - {this.props.address} - {this.props.email}
        </div>
      </div>
    );
  }
}

export default SearchItemComponent;
