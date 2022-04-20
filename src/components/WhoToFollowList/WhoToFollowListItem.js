import React from "react";
import '../HomeScreen/home.css';
const WhoToFollowListItem = (
    {
        who =
            {
            avatarIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            userName: 'NASA',
            handle: 'NASA',
            }
    }
    ) => {
    return(
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-2">
                            <img src={who.avatarIcon} width="42" className="rounded-circle float-start"/>
                        </div>
                        <div className="col-6">
                          <div className="fw-bold text-nowrap">{who.userName}
                            <span className = "fa-stack" style={{"fontSize": "0.7em"}}>
                              <i className="fas fa-check-circle fa-stack-1x fa-inverse">&nbsp;</i>
                            </span>
                          </div>
                          <div>{who.handle}</div>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary rounded-pill mt-1">Follow</button>
                        </div>

                    </div>
                  </li>

 );
}
export default WhoToFollowListItem;
