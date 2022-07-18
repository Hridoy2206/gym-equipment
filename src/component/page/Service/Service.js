import React from 'react';
import "./Service.css"

const Service = () => {
    return (
    <div>
        <section id="services">

         <div className="container">

            <div className="sBoxWrapper">

                <div className="singleBox">
                    <div className="sBoxIcon"><i className="fab fa-accusoft"></i></div>
                    <div className="sBoxTitle">
                        <h2>architecture & engineering</h2>
                    </div>
                    <div className="sBoxDisk">
                        <p>Maurid mattis auctor tellus imperdiet tellus, imperdiet eu ut imperdiet tellus, imperdiet
                        </p>
                    </div>
                    <div className="sBoxLink"><a href="#">learn More<i className="fa-solid fa-arrow-right-long"></i></a></div>
                </div>

                <div className="singleBox active">
                    <div className="sBoxIconActive"><i className="fab fa-magento"></i></div>
                    <div className="sBoxTitle">
                        <h2>consultant & preparation</h2>
                    </div>
                    <div className="sBoxDisk">
                        <p>Maurid mattis auctor tellus imperdiet tellus, imperdiet eu ut imperdiet tellus, imperdiet
                        </p>
                    </div>
                    <div className="sBoxLink"><a href="#">learn More<i className="fa-solid fa-arrow-right-long"></i></a></div>
                </div>


                <div className="singleBox">
                    <div className="sBoxIcon"><i className="fab fa-accessible-icon"></i></div>
                    <div className="sBoxTitle">
                        <h2>infrustucture & customizing</h2>
                    </div>
                    <div className="sBoxDisk">
                        <p>Maurid mattis auctor tellus imperdiet tellus, imperdiet eu ut imperdiet tellus, imperdiet
                        </p>
                    </div>
                    <div className="sBoxLink"><a href="#">learn More<i className="fa-solid fa-arrow-right-long"></i></a></div>
                </div>
                
            </div>
         </div>
        </section>
    </div>
);
};

export default Service;