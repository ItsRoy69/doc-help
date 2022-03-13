import React from 'react';

const ResourcesCard = ({image,heading,link}) => {
  return (
      <div className="resourcecard">
                <div className="col">
                    <div className="card shadow-sm p-3">
                        <img src={image} alt="WHO Logo" />
                        
                        <div className="card-body">
                            <p className="card-text">
                                {heading}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <a className="d-grid gap-2 col-12 mx-auto btn btn-outline-dark" href={link} target="_parent" role="button">
                                    Open
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
  );
};

export default ResourcesCard;
