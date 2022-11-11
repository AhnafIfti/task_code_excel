import React, { useState, useEffect } from "react";
// import { useState } from React;

const MostShared: React.FC = () => {
    const [getSearchElement, setSearchElement] = useState<string>('')
    const searchFilter = (event:any) => {
        if(event.target.value !== ''){
            setSearchElement(event.target.value)
        }
    }
    useEffect(()=>{
        if(getSearchElement !== ''){
            console.log("+",getSearchElement)
        }
    }, [getSearchElement])
    return (
        <div className="container">
            <div className='row'>
                <div className='col-6'></div>
                <div className='col-6'>
                    <form>
                        <div className="my-3 d-flex">
                            <input type="text" className="form-control" style={{marginRight: '0.5rem'}} onChange={(event)=>searchFilter(event)}/>
                            <button type="submit" className="btn btn-primary" >Search</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='m-3'>
                        <div className="card m-auto" style={{width:'25rem', height:'auto'}}>
                            <div className="card-body p-0">
                                <img src="https://static01.nyt.com/images/2022/11/08/science/00SCI-SPAN-MEDICARE/00SCI-SPAN-MEDICARE-mediumThreeByTwo440-v2.jpg" className="card-img-top mb-3" alt="..."/>
                                <div className='px-3 pb-3'>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='m-3'>
                        <div className="card m-auto" style={{width:'25rem', height:'auto'}}>
                            <div className="card-body p-0">
                                <img src="https://static01.nyt.com/images/2022/11/08/science/00SCI-SPAN-MEDICARE/00SCI-SPAN-MEDICARE-mediumThreeByTwo440-v2.jpg" className="card-img-top mb-3" alt="..."/>
                                <div className='px-3 pb-3'>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='m-3'>
                        <div className="card m-auto" style={{width:'25rem', height:'auto'}}>
                            <div className="card-body p-0">
                                <img src="https://static01.nyt.com/images/2022/11/08/science/00SCI-SPAN-MEDICARE/00SCI-SPAN-MEDICARE-mediumThreeByTwo440-v2.jpg" className="card-img-top mb-3" alt="..."/>
                                <div className='px-3 pb-3'>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='m-3'>
                        <div className="card m-auto" style={{width:'25rem', height:'auto'}}>
                            <div className="card-body p-0">
                                <img src="https://static01.nyt.com/images/2022/11/08/science/00SCI-SPAN-MEDICARE/00SCI-SPAN-MEDICARE-mediumThreeByTwo440-v2.jpg" className="card-img-top mb-3" alt="..."/>
                                <div className='px-3 pb-3'>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MostShared;