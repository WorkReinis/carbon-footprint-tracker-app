import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Or 'quill.bubble.css' depending on your theme
import "./QuillEditor.css"; // Import your custom CSS

function QuillEditor() {
    const editorRef = useRef(null);

    useEffect(() => {
        const quill = new Quill(editorRef.current, {
            theme: "bubble", // 'snow' or 'bubble'
            modules: {
                toolbar: false, // No toolbar
            },
        });

        // Set the initial content
        const initialContent = [
            { insert: "I drove my car for " },
            {
                insert: "30 km",
                attributes: {
                    background: "var(--secondary-color)",
                    customStyle: "highlighted-text",
                    // italic: true,
                },
            },
            { insert: ", used " },
            {
                insert: "5 kWh",
                attributes: {
                    background: "var(--secondary-color)",
                    customStyle: "highlighted-text",
                    // italic: true,
                },
            },
            { insert: " of electricity.\n" },

            { insert: "I took a " },

            {
                insert: "flight",
                attributes: {
                    background: "var(--secondary-color)",
                    customStyle: "highlighted-text",
                    // italic: true,
                },
            },

            { insert: " from " },

            {
                insert: "New York",
                attributes: {
                    background: "var(--secondary-color)",
                    customStyle: "highlighted-text",
                    // italic: true,
                },
            },

            { insert: " to " },

            {
                insert: "Los Angeles",
                attributes: {
                    background: "var(--secondary-color)",
                    customStyle: "highlighted-text",
                    // italic: true,
                },
            },

            { insert: ".\n" },
            {
                insert: "I also used ",
            },

            {
                insert: "public transportation",
                attributes: {
                    background: "var(--secondary-color)",
                    customStyle: "highlighted-text",
                    // italic: true,
                },
            },

            { insert: " for a few " },

            {
                insert: "short trips",
                attributes: {
                    background: "var(--secondary-color)",
                    customStyle: "highlighted-text",
                    // italic: true,
                },
            },

            { insert: " around the city.\n" },

            { insert: "Oh and I also had a nice " },

            {
                insert: "steak",
                attributes: {
                    background: "var(--secondary-color)",
                    customStyle: "highlighted-text",
                    // italic: true,
                },
            },

            { insert: " yesterday.\n" },
            {
                insert: "These are some of my activities for the week that contribute to my carbon footprint.",
            },
        ];
        quill.setContents(initialContent);
    }, []);

    return (
        <div>
            <div ref={editorRef}></div>
        </div>
    );
}

export default QuillEditor;
