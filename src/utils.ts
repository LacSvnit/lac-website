import { Libre_Caslon_Text, Montserrat } from "next/font/google";

const inputStyle = "flex-1 rounded-md p-2 pl-5 outline-none h-22 bg-gray-200 dark:text-[#2c1810]";
const adminButton =
  "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded";

function trimString(text: string) {
  return text.substring(0, 300) + "...";
}

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "background",
  "code-block",
  "script",
  "sub",
  "super",
  "direction",
  "align",
  "clean",
];

const libre_caslon_text = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const monsterrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export {
  inputStyle,
  adminButton,
  trimString,
  monsterrat,
  modules,
  formats,
  libre_caslon_text,
};
