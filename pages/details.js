import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import OrganismNav from "../components/organisms/nav";
import "bootstrap/dist/css/bootstrap.min.css";

export default function details(){
  return (
    <>
      <OrganismNav/>
      <center>
        <div className="row container mt-5" >
          <div className="col">
            <div className="row container">
              <div className="col">
              <img src="/products/tas1-big.jpg"></img>
              </div>
            </div>
            <div className="row container">
              <div className="col"><img src="/products/tas1-small-1.png"></img></div>
              <div className="col"><img src="/products/tas1-small-2.png"></img></div>
              <div className="col"><img src="/products/tas1-small-3.png"></img></div>
            </div>
          </div>
          <div className="col container">
            <div className="row text-left">
            <div className="col">
            <AtomText value="Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment" size="30px" weight="bold" />
            <AtomText value="Stock : 50" size="18px" color="#9D9D9D"/>
            <AtomText value="$50.00" size="30px" weight="bold"/>
            <AtomText value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" size="14px"/>
            </div>
            </div>
            <div className="col mt-5 container text-left">
              <AtomButton 
                value="Add to cart" 
                background="#0086CF"
                border="nome"
                color="white"
                radius="10px"
                padding="2px 2px 1px 1px"
                border="none"
              />
            </div>
          </div>
        </div>
      </center>
    </>
  )
}
