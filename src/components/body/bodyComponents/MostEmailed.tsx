import React from 'react';
import { connect } from "react-redux";

const MostEmailed = (props:any) => {
    const {isAuthenticated, userId, users} = props;
    return (
        <div className="container">
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
                                    <h5 className="card-title">{userId}</h5>
                                    <p className="card-text">{isAuthenticated}</p>
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

const mapStateToProps = ({
    authentication: { isAuthenticated, userId },
    user: {users}
}:any) => ({
    isAuthenticated,
    userId,
    users
});
  
//   const mapDispatchToProps = (dispatch) => ({
//     setContactGridLoad: (toggle) => dispatch(setContactGridLoad(toggle)),
//     updateViewBody: (body) => dispatch(updateViewBody(body)),
//     updateActiveTab: (tab) => dispatch(updateActiveTab(tab)),
//     toggleDrawer: (toggle) => dispatch(toggleDrawer(toggle))
//   });

const mapDispatchToProps = {}
  
export default connect(mapStateToProps, mapDispatchToProps)(MostEmailed);