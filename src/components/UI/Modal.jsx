import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {/* We are Using React Portals here with the help of it we can use component anywhere in the code but Render at specific position in the DOM tree
          It has two arguments:- 1.) What to Portal (Component we want to portal), 2.) Where to Portal (Define div id which we have to create in index.html)
      */}
      {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
