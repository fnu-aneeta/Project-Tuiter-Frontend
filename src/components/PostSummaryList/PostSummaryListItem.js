import React from "react";
import '../HomeScreen/home.css';
import {Link} from "react-router-dom";

const PostSummaryListItem = (
    {
        post
    }
) => {

    return(
              <li className="list-group-item">

                  {/*{JSON.stringify(post)}*/}
                            <div className="row">
                                <div className="col-10">

                                    <span className="fw-bold"><a href={post.url}> {post.title}</a></span>
<br/>
                                   <div><a href={post.url}> i{post.companyName}</a></div>
                                    {/*<Link to="/description-job">*/}
                                    {/*    <span className="d-none d-xl-inline-block">{post.companyName}</span>*/}
                                    {/*</Link>*/}

                                    <div>
                                        <span>{post && post.address && post.address.city}, </span>
                                        <span>{post && post.address && post.address.state} </span>
                                        <span>({post && post.address && post.address.country})</span>
                                    </div>

                                    <div>
                                        <span style={{"fontSize": "0.8em"}}>
                                            {post && post.salary && post.salary.min} -
                                            {post && post.salary && post.salary.max}
                                        </span>
                                    </div>

                                  <br/>
                                    <h7 className="fw-normal text-color">Company Description: {post.description}</h7>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <h7 className="fw-normal text-color">Qualifications: {post.qualifications}</h7>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <h7 className="fw-normal text-color">Responsibilities: {post.responsibilities}</h7>
                                </div>

                                <div className="col-2 mt-3">
                                    <img className="rounded img-fluid" src={post['logo-image']}
                                         width="75px"
                                         height="75px"/>
                                </div>
                            </div>

              </li>
    );
}
export default PostSummaryListItem;
