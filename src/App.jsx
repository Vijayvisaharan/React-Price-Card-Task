
import './App.css'
import Pricecard1 from'./Pricecard1'
import Pricecard2 from'./pricecard2'
import Pricecard3 from'./pricecard3'
import Pricecard from './Pricecard'

function App() {
  const products = [
    {
        id: 1,
        name: "FREE",
        price: "$0/month",
        user: { feature: "Single User", isAvailable: true },
        storage: { feature: "50GB Storage", isAvailable: true },
        publicProjects: { feature: "Unlimited Public Projects", isAvailable: true },
        access: { feature: "Community Access", isAvailable: true },
        privateProjects: { feature: "Unlimited Private Projects", isAvailable: false },
        phoneSupport: { feature: "Dedicated Phone Support", isAvailable: false },
        subdomain: { feature: "Free Subdomain", isAvailable: false },
        reports: { feature: "Monthly Status Reports", isAvailable: false },
    },
    {
        id: 2,
        name: "PLUS",
        price: "$9/month",
        user: { feature: "5 Users", isAvailable: true },
        storage: { feature: "50GB Storage", isAvailable: true },
        publicProjects: { feature: "Unlimited Public Projects", isAvailable: true },
        access: { feature: "Community Access", isAvailable: true },
        privateProjects: { feature: "Unlimited Private Projects", isAvailable: true },
        phoneSupport: { feature: "Dedicated Phone Support", isAvailable: true },
        subdomain: { feature: "Free Subdomain", isAvailable: true },
        reports: { feature: "Monthly Status Reports", isAvailable: false },
    },
    {
        id: 3,
        name: "PRO",
        price: "$49/month",
        user: { feature: "Unlimited Users", isAvailable: true },
        storage: { feature: "50GB Storage", isAvailable: true },
        publicProjects: { feature: "Unlimited Public Projects", isAvailable: true },
        access: { feature: "Community Access", isAvailable: true },
        privateProjects: { feature: "Unlimited Private Projects", isAvailable: true },
        phoneSupport: { feature: "Dedicated Phone Support", isAvailable: true },
        subdomain: { feature: "Free Subdomain", isAvailable: true },
        reports: { feature: "Monthly Status Reports", isAvailable: true },
    },
];

  return (
    <div>
    <h1 className='heading'>React Price Card Task</h1>
    <div className='app'> 
      {
        products.map((product) => (
          <Pricecard 
          key={product.id}
          name={product.name}
          price={product.price}
          user={product.user}
          storage={product.storage}
          publicProjects={product.publicProjects}
          access={product.access}
          privateProjects={product.privateProjects}
          phoneSupport={product.phoneSupport}
          subdomain={product.subdomain}
          reports={product.reports}
           />
        ))
      
      }
    
    </div> 
    </div>
  )
}

export default App
