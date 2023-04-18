"use client";

let methods: string[] = ["GET", "POST"];

type Props = {
  url: string;
};

function MenuComponent({ url }: Props) {
  let AST: { name: string; regex: string }[];

  return (
    <>
      <div className="w-full h-16 bg-white mb-2 flex items-center"></div>
    </>
  );
}

/*
words = /[aA-zZ]+/g      
protocol = /(http*)\w+/g  #seperate words for protocals will replce
symbols = /[:/?=]/g
numbers  = /[0-9]+/g


"https://localhost:3000/loginZ?id=23".search(/[0-9]+/g) gives the starting point of a regex patterm


*/

function Tokenizer(text: string) {}

export default MenuComponent;
