import { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectBanner } from "@modules/global/selector";
import styled from "styled-components";

const Content = styled.div`
  height: 600px;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export default function HomeCarousel() {
  const arrImg = useSelector(selectBanner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "getBanner" });
  }, []);

  const renderImg = () => {
    return arrImg.map((item: any, index: number) => {
      return (
        <div key={index}>
          <Content style={{ backgroundImage: `url(${item.hinhAnh})` }}>
            <img src={item.hinhAnh} className="opacity-0" alt={item.hinhAnh} />
          </Content>
        </div>
      );
    });
  };
  return (
    <Carousel effect="fade" style={{ width: "100%" }}>
      {renderImg()}
    </Carousel>
  );
}
