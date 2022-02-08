import React, { Component, Fragment } from 'react'

 class MegaMenu extends Component {

    constructor(){
        super();
        this.MegaMenu = this.MegaMenu.bind(this);
   }

   componentDidMount(){
        this.MegaMenu();
   }



   MegaMenu(){
        var acc = document.getElementsByClassName("accordion");
        var accNum = acc.length;
        var i;
        for(i=0;i<accNum;i++){
             acc[i].addEventListener("click",function (){
                  this.classList.toggle("active");
                  var panel = this.nextElementSibling;
                  if(panel.style.maxHeight){
                       panel.style.maxHeight = null;
                  }else{
                       panel.style.maxHeight= panel.scrollHeight+ "px"
                  }
             })
        }
   }
  render() {
    return (
      <div className="accordionMenuDiv" >
          <div className="accordionMenuDivInside" >
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>




              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>
              <button className="accordion" >
                  <img className="accordionMenuIcon" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907776.png?token=exp=1644231948~hmac=515308b09379c29a12c3c3648d7df836" />
                  Men's Clothing
              </button>
<div className="panel" >
    <ul>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
        <li><a href="#" className="accordionItem">Mans Tshirt</a></li>
    </ul>
              </div>

          </div>
      </div>
    )
  }
}

export default MegaMenu
