import React,{useState} from 'react';

const Service = () => {
    const[service,setService]=useState([{
        id:1,
        name:"Game  Development",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Mg9oprywlE853FovX1Cd0F3Bsy3jAX_XdQ&s"
    },{
        id:2,
        name:"Generatives AI",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLNP8QnlyWuNKSvtP8f0wP_hI_9gxZBJzGQA&s"
    },
{
    id:3,
    name:"3D Modelling and Rendering",
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULRrV4LRxEBa4bt_ezsICo2FesdOHPnl4RQ&s"
},
{
    id:4,
    name:"2D/3D Animation",
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDsM-imJgBIa8Ik16q0DQ3kLzEGryhYjr1ag&s"
},
{
    id:5,
    name:"Motion Graphics",
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2VxPzUrsf6LIHcxofxa0pS-jnQI6RbqhxYw&s"
},
{
    id:6,
    name:"VFX ",
    profile:"https://cdn.shutterstock.com/shutterstock/videos/7322113/thumb/1.jpg"
},
{
    id:7,
    name:"AR/VR/MR",
    profile:"https://pixelplex.io/next/images/augmented-virtual-reality/services/augmented-virtual-reality-solutions-1920.jpg"
},
{
    id:8,
    name:"Virtual Production",
    profile:"https://e0.pxfuel.com/wallpapers/546/789/desktop-wallpaper-video-editing-thumbnail.jpg"
},
{
    id:9,
    name:"CG",
    profile:"https://img-new.cgtrader.com/items/3745224/c992783ccc/large/gaming-desktop-3d-model-c992783ccc.jpg"
},
{
    id:10,
    name:"UI/UX",
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFwc_V0I8IRZSMx2VRC8GozGX7VK_iFpCpw&s"
},{
    id:11,
    name:"Academic alliances",
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NQIFrqGranVtUywkpgu4K7JaRlEpg3BlSA&s"

},
{
    id:12,
    name:"Video Editing",
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pP7tikIN38blLE1WqRr5mSzo_b7zqQDkig&s" 
}])
//const serna=service.map((services)=>services.name)
  return (
    <>
    {/* <main className='container'>
        <div className='row justify-content-center mt-3 mb-3'>
            <div className="col-8">
                <div className="card-collection">
                    {
                        service.map((service)=>{
                            <div id={service.id} className='card m-2' style={{cursor:"pointer"}}>
                                <img src={service.profile} alt="" className='card-img-top'/>
                                <div className="card-body">
                                    <h2 className="card-title">{service.name}</h2>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </main> */}
    <main className='container'>
        <div className="row justify-content-center mt-3 mb-3">
            <div className='col-8'>
                <div className='card-collection'>
            {
    service.map((services) => (
        <>
        <div id={services.id} className='card m-2' style={{cursor:"pointer"}}>
            <img src={services.profile} className='card-img-top'/>
            <div className='card-body'>
                <h5 className='card-title'>{services.name}</h5>
            </div>
        </div>
      </>
    ))
  } 
  </div>
            </div>
        </div>
  
</main>

    </>
  );
};

export default Service;

