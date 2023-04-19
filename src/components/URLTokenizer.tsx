"use client";

let methods: string[] = ["GET", "POST"];

type Props = {
  url: string;
};

function MenuComponent({ url }: Props) {
  return (
    <>
      <div className="w-full h-16 bg-white mb-2 flex items-center pl-5">
        <Tokenizer text={url} />
      </div>
    </>
  );
}

/*
words = /[aA-zZ]+/g      
protocol = /(http*)\w+/g  #seperate words for protocals will replce
symbols = /[:/?=]/g
numbers  = /[0-9]+/g


"https://localhost:3000/loginZ?id=23".search(/[0-9]+/g) gives the starting point of a regex patterm


"https://localhost:3000/loginZ?id=23".split(/[:/?=]/g)   splits the string from the symbols

*/

function Tokenizer({ text }: { text: string }) {
  let AST: { type: string; color: string; value: string; start: number; end: number }[] = [];
  let buffer: string = "";
  let nextchar: string = "";
  for (let i = 0; i < text.length; i++) {
    switch (ValidateCharType(text[i])) {
      case "letter":
        buffer += text[i];
        //check if the next char is a letter or not
        //if the next char is a letter the buffer will not be added in to the AST and the buffer will not be cleared
        //if the next char is not a letter the buffer will cleared after adding to the AST
        nextchar = text[i + 1] || "";

        if (nextchar === "undefined" || ValidateCharType(nextchar) != "letter") {
          AST.push({ value: buffer, type: "word", start: i + 1 - buffer.length, end: i, color: "text-gray-800" });
          buffer = "";
        }
        break;
      case "number":
        buffer += text[i];
        //check if the next char is a letter or not
        //if the next char is a letter the buffer will not be added in to the AST and the buffer will not be cleared
        //if the next char is not a letter the buffer will cleared after adding to the AST
        nextchar = text[i + 1] || "";

        if (nextchar === "undefined" || ValidateCharType(nextchar) != "number") {
          AST.push({ value: buffer, type: "number", start: i + 1 - buffer.length, end: i, color: "text-gray-600" });
          buffer = "";
        }
        break;
      case "symbol":
        AST.push({ value: text[i], type: "symbol", start: i, end: i, color: "text-gray-500" });
        break;
      default:
        break;
    }
  }

  return <>{MergeTokens(AST)}</>;
}

function ValidateCharType(char: string) {
  let charcode: number = char.charCodeAt(0);
  if ((charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <= 122)) {
    return "letter";
  } else if (charcode >= 48 && charcode <= 57) {
    return "number";
  } else {
    if (char == "undefined") {
      return "undefined";
    }
    return "symbol";
  }
}

function MergeTokens(AST: { type: string; color: string; value: string; start: number; end: number }[]) {
  return (
    <>
      {AST.map((item) => {
        return (
          <>
            <span className={`${item.color} font-semibold`}>{item.value}</span>
          </>
        );
      })}
    </>
  );
}

export default MenuComponent;
