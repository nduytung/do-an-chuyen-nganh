import { FC } from "react";

type TYPEBUTTON = "OUTLINE" | "DEFAULT";

type Dataprops = {
  nameBtn: string;
  classname?: string;
  type: TYPEBUTTON;
};

export const SecondaryButton: FC<Dataprops> = ({
  nameBtn,
  classname,
  type,
}) => {
  if (type === "DEFAULT") {
    const classBtn = `${classname} bg-[#54b5f1] hover:cursor-pointer leading-[44px] rounded duration-300 transition ease-out px-6 group hover:scale-90`;
    return (
      <div className={classBtn}>
        <a className="text-white text-base tracking-wide font-semibold">
          {nameBtn}
        </a>
      </div>
    );
  } else {
    const classBtn = `${classname} bg-white hover:cursor-pointer leading-[44px] rounded duration-300 transition ease-out px-6 group hover:scale-90`;
    return (
      <div className={classBtn}>
        <a className="text-black/60 text-base tracking-wide font-semibold ">
          {nameBtn}
        </a>
      </div>
    );
  }
};
