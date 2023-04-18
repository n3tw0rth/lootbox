"use client";

let methods: string[] = ["GET", "POST"];

type Props = {
  url: string;
};

function MenuComponent({ url }: Props) {
  let AST: { name: string; regex: string }[];

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
  let Token: { name: string; regex: string; color: string }[] = [
    { name: "words", regex: "/[aA-zZ]+/g", color: "orange" },
    { name: "protocol", regex: "/(http*)w+/g", color: "green" },
    { name: "symbols", regex: "/[:/?=]/g", color: "blue" },
    { name: "numbers", regex: "/[0-9]+/g", color: "red" },
  ];

  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
  return <>{text}</>;
}

export default MenuComponent;
