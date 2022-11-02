import React from "react";
import Image from "next/image";

const userName = "ulfurerulfu";

function BuyMeACoffeeButton() {
  return (
    <div className="">
      <a href="https://www.buymeacoffee.com/ulfurerulfu">
        <Image
          style={{ height: "90px" }}
          height={90}
          width={300}
          alt="Buy Me a Coffee Widget"
          src="/assets/buymecoffee.png"
        />
      </a>
    </div>
  );
}

export default BuyMeACoffeeButton;
