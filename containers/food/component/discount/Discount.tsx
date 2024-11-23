import "./discount.css"

const Discount = () => {
    return (
      <section className="discount_container">
        <div className="discount-food_frame">
          <div className="big_discount-card">
            <img
              src="/images/Frame 2610767.png"
              alt=""
              className="big_discount-card-img"
            />
          </div>
          <div className="small_discount-card">
            <img
              src="/images/Component 113.png"
              alt=""
              className="small_discount-card-img"
            />
            <img
              src="/images/Component 114.png"
              alt=""
              className="small_discount-card-img"
            />
          </div>
        </div>
      </section>
    );
}
export default Discount;