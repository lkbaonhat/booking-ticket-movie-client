import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./Film_Flip.css";

export default function Film_Flip(props: any) {
  const { item } = props;

  return (
    <div className="flip-card mt-2">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={item.hinhAnh}
            alt="Avatar"
            style={{ width: 300, height: 300 }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://picsum.photos/300/300";
            }}
          />
        </div>
        <div
          className="flip-card-back"
          style={{
            position: "relative",
            backgroundColor: "rgba(0,0,0,.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div className="rounded-full cursor-pointer">
              <PlayCircleOutlined style={{ fontSize: "50px" }} />
              <div className="text-2xl mt-2 font-bold">{item.tenPhim}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
