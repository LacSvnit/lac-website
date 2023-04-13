import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstLetterCapital from "./FirstLetterCapital";
import { libre_caslon_text } from "@/utils";

const BookClubIndicator = () => {
  return (
    <div className="flex flex-col space-y-5 relative w-10/12 h-auto py-7 px-7 rounded-md bg-[#FFE1BC]">
      <p
        className={
          "text-[#DA8E63] text-center font-[400] text-[44px] leading-[59.04px] " +
          libre_caslon_text.className
        }
      >
        <FirstLetterCapital letter="B" />
        ook <FirstLetterCapital letter="C" />
        lub
      </p>{" "}
      <div className="flex">
        <div className="w-4/5">
          {" "}
          <p className="font-[400] text-[15px] leading-[18.29px] text-left mb-14 px-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            facere iure exercitationem assumenda aliquid accusamus blanditiis
          </p>
          <Link
            href={`/book_club`}
            className="h-[40px] w-[137px] text-[17px] font-[600] leading-[17.07px] py-[12px] px-[23px] bg-[#DA8E63] text-white rounded-md"
          >
            Go, have a look!
          </Link>
        </div>

        <Image
          src={`/books.png`}
          height={200}
          width={200}
          alt="books piled up"
          className="absolute bottom-0 -right-20"
        />
      </div>
    </div>
  );
};

export default BookClubIndicator;
