import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const LayoutEx = () => {
    const [clicked, setClicked] = useState(false);
    const toggleClicked = () => setClicked((prev) => !prev);

    return (
        <Wrapper onClick={toggleClicked}>
            {/* 📌 layoutId가 같으면 framer-motion은 같은 component라고 인식하여 연결해준다. */}
            <Box>{!clicked ? <Circle layoutId="circle" style={{ borderRadius: 50 }} /> : null}</Box>
            <Box>
                {clicked ? (
                    <Circle layoutId="circle" style={{ borderRadius: 20, scale: 2 }} />
                ) : null}
            </Box>
        </Wrapper>
    );
};

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(180deg, #05f, #09f);
`;

const Box = styled(motion.div)`
    width: 400px;
    height: 400px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
    background-color: #00a5ff;
    height: 100px;
    width: 100px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default LayoutEx;
