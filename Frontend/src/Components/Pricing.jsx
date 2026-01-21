import { Check } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const pricing=[
    {
      imgUrl:"/pricing.jpg",
      title:"Basic",
      price:"$7/mo",
      length:"Billed monthly"
    },
    {
      imgUrl:"/pricing.jpg",
      title:"Advance",
      price:"$30/6mo",
      length:"Billed every 6 months"
    },
    {
      imgUrl:"/pricing.jpg",
      title:"Premium",
      price:"$50/yr",
      length:"Billed yearly"
    }
  ]
  return (
    <section className="pricing">
      <h1>Choose Your Plans</h1>
      <div className="wrapper">
        {
          pricing.map(element=>{
            return(
              <div key={element.title} className="card">
                <img src={element.imgUrl} alt="PricingImage" />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>Subscription</h1>
                  <h2>{element.price}</h2>
                  <p>{element.length}</p>
                
                </div>
                <div className="description">
                  {/*We use npm i lucide-react for icons*/}
                  <p>
                    <Check size={16} /> Modern Equipments
                  </p>
                  <p><Check size={16} /> 24/7 Support</p>
                  <p><Check size={16} /> Personal Trainer</p>
                  <p><Check size={16} /> Weight Losing Classes</p>
                  <p><Check size={16} /> Nutrition Plans</p>
                   <Link to={"/"}>Get Started</Link>
                </div>
                </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Pricing