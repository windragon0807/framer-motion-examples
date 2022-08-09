import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const boxVariants = {
    hover: { rotateZ: 90 },
    click: { borderRadius: "100px" },
    // backgroundColor 값은 rgb 값 등의 정수 값을 반환해야 한다.
};

// for hover, click, drag, dragConstraints
const Gestures = () => {
    const biggerBoxRef = useRef<HTMLDivElement>(null);
    return (
        <Wrapper>
            <BiggerBox ref={biggerBoxRef}>
                <Box
                    drag
                    dragSnapToOrigin // 다시 원래 위치로 돌아감
                    dragElastic={0.5} // 당기는 힘(마우스 포인터와의 상대적 거리)
                    // dragElastic={0}으로 설정하면 Constraints 안에서 벗어나지 못함
                    dragConstraints={biggerBoxRef}
                    variants={boxVariants}
                    whileHover="hover"
                    whileTap="click"
                />
            </BiggerBox>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #91f, #70f);
`;

const BiggerBox = styled.div`
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default Gestures;
