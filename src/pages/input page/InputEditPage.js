import { MyContext } from "../../context/pages";
import React, { useState, useContext } from "react";

import "./styles/InputEditPage.css";
import "./styles/quill-editor-01.css";

import { IoMdRecording } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa6";

import QuillEditor from "./components/quill-editor-01";

function InputEditPage() {
    const { navBar, setNavBar } = useContext(MyContext);
    const { page, setPage } = useContext(MyContext);
    const {text, setText} =
       useContext(MyContext);

    const handleConfirm = () => {
        setPage("input-confirm");
    };

    const handleBack = () => {
        setPage("input");
        setNavBar(true);
    };

    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-GB");

    const formattedTime = today.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <>
            <div className="edit-container flex flex-col justify-between gap-6 fade-in-1">
                <div className="flex flex-row justify-start items-center gap-4">
                    <div className="circle-icon flex justify-center items-center">
                        <IoMdRecording size={30} fill={"var(--dark-gray)"} />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-0">
                        <h1 className="edit-title text-sm">{`Recorded`}</h1>
                        <h1 className="edit-title text-sm">{`${formattedDate} ${formattedTime}`}</h1>
                    </div>
                </div>
                <div className="textarea-container flex">
                    <textarea
                        className="input-box"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                </div>

                {/* <div className="textarea-container">
                    <QuillEditor />
                </div> */}

                <div className="flex flex-row justify-between gap-3  fade-in-2">
                    <button
                        className="button-edit-page button-restart flex flex-col justify-center items-center gap-2 text-sm"
                        onClick={handleBack}
                    >
                        <VscDebugRestart size={20} />
                        Restart
                    </button>

                    <button className="button-edit-page button-edit flex flex-col justify-center items-center gap-2 text-sm">
                        <FaRegEdit size={20} />
                        Edit
                    </button>

                    <button
                        className="button-edit-page button-save flex flex-col justify-center items-center gap-2 text-sm"
                        onClick={handleConfirm}
                    >
                        <FaCheck size={20} />
                        Save
                    </button>
                </div>
            </div>
        </>
    );
}

export default InputEditPage;
