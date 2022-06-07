import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export const EDITOR_SETTING = {
  height: 500,
  innerWidth: 300,
  menubar: false,
  plugins: [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "charmap",
    "anchor",
    "searchreplace",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "preview",
    "help",
    "wordcount",
  ],
  toolbar:
    "undo redo | blocks | image " +
    "bold italic forecolor | alignleft aligncenter " +
    "alignright alignjustify | bullist numlist outdent indent | " +
    "removeformat | link ",
  content_style:
    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
  image_list: [],
};

const PrimaryTextEditor = ({ ref, error }: { ref: any; error: boolean }) => {
  return (
    <div
      className={`w-full overflow-hidden ${
        error === true ? "border border-red-500" : ""
      } `}
    >
      <Editor onInit={(evt, editor) => (ref = editor)} init={EDITOR_SETTING} />
    </div>
  );
};

export default PrimaryTextEditor;
