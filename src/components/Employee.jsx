import React, { useState } from "react";
import Details from "./Details";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

function Employee(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <li
      key={props.email}
      className="flex justify-between gap-x-6 py-5"
      onClick={() => {
        props.showModal();
        toggleModal();
      }}
    >
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={props.imageUrl}
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {props.name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {props.email}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-end items-center"> {/* Alineación de elementos */}
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end w-full"> {/* Añadir w-full aquí también */}
          <p className="text-sm leading-6 text-gray-900">{props.role}</p>
          {props.lastSeen ? (
            <div className="flex flex-row">
              <IoChatboxEllipsesOutline  className="mr-2"/>
              <p className="mt-1 text-xs leading-5 text-gray-500">
              Last seen {" "} 
              <time dateTime={props.lastSeenDateTime}>{props.lastSeen}</time>
            </p>
            </div>
          ) : (
            <div className="mt-1 flex items-center gap-x-1.5">
              <IoChatboxEllipsesOutline  className="mr-2"/>
              <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs leading-5 text-gray-500">Online</p>
            </div>
          )}
        </div>
      </div>
      <div>
        {modalOpen && (
          <Details
            closeModal={() => {
              toggleModal();
              props.closeModal();
            }}
            email={props.email}
            name={props.name}
            role={props.role}
          />
        )}
      </div>
    </li>
  );
}

export default Employee;
