import React from "react";

const SearchArea = (props) => {
  return (
    <div className="container" style={{ paddingTop: 30, paddingBottom: 30 }}>
      <div className="row">
        <section className=" test col s6 offset-s1">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                placeholder="search"
                type="text"
                onChange={props.handleChange}
                class="validate"
                id="first_name2"
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchArea;
