import React from 'react';
import Cards from './Cards';
import CardApi from './CardApi';

const Home = () => {
    return (
        <div>
            <p className="fs-1 fw-bold text-center">Home</p>
            <div className="d-flex justify-content-center align-items-center pb-3 flex-wrap">
            {CardApi.map((val,i)=>{
                return(<Cards
                key={i+1}
                img={val.img}
                name={val.name}
                desc={val.desc}
                link={val.link} />)
            })}
            </div>
        </div>
    )
}

export default Home
