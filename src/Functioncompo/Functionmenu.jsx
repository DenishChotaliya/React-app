import React from "react";
import { Link, Outlet } from "react-router-dom";

const Functionmenu = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <Link to="Classintro">Classintro</Link>
            </li>
            <li>
              <Link to="Name">Name</Link>
            </li>
            <li>
              <Link to="Denish">Denish</Link>
            </li>
            <li>
              <Link to="Classjsx">Classjsx</Link>
            </li>
            <li>
              <Link to="Classprops">Classprops</Link>
            </li>
            <li>
              <Link to="Classstate">Classstate</Link>
            </li>
            <li>
              <Link to="CHildforclass">CHildforclass</Link>
            </li>
            <li>
              <Link to="Statelifecycle">Statelifecycle</Link>
            </li>
            <li>
              <Link to="Classrendring">Classrendring</Link>
            </li>
            <li>
              <Link to="Classuncontroll">Classuncontroll</Link>
            </li>
            <li>
              <Link to="Classcontroll">Classcontroll</Link>
            </li>
            <li>
              <Link to="Statelifting">Statelifting</Link>
            </li>
            <li>
              <Link to="Hoc">Hoc</Link>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <Link to="Functionintro">Functionintro</Link>
            </li>
            <li>
              <Link to="Functionchild">Functionchild</Link>
            </li>
            <li>
              <Link to="Functionprops">Functionprops</Link>
            </li>
            <li>
              <Link to="Usestate">Usestate</Link>
            </li>
             <li>
                <Link to="FunctionUseeffict">FunctionUseeffict</Link>
              </li>
              <li>
                <Link to="Functionlayouteffect">Functionlayouteffect</Link>
              </li>
              <li>
                <Link to="Functionmemo">Functionmemo</Link>
              </li>
              <li>
                <Link to="FunctionUsecontext">FunctionUsecontext</Link>
              </li>
              <li>
                <Link to="Usecontextmain">Usecontextmain</Link>
              </li>
              <li>
                <Link to="Usereduser">Usereduser</Link>
              </li>
              <li>
                <Link to="Useref">Useref</Link>
              </li>
              <li>
                <Link to="Api">Api</Link>
              </li>
              <li>
                <Link to="Apipost">Apipost</Link>
              </li>
              <li>
                <Link to="Mycompo">Mycompo</Link>
              </li>
              <li>
                <Link to="Mycompotwo">Mycompotwo</Link>
              </li>
              <li>
                <Link to="Customhook">Customhook</Link>
              </li>
              <li>
                <Link to="Crud">Crud</Link>
              </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Functionmenu;
