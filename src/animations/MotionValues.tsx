import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

const MotionValues = () => {
    const x = useMotionValue(0); // x값을 추적한다.
    // 📌 MotionValue는 업데이트 되더라도 렌더링이 되지 않는다.
    const rotateZ = useTransform(x, [-800, 800], [-360, 360]); // 📌 (variable, input, output)
    const gradient = useTransform(
        x,
        [-800, 800],
        [
            "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
            "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
        ]
    );
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
    return (
        <Wrapper style={{ background: gradient }}>
            {/* 📌x: x, rotateZ: rotateZ, scale: scale */}
            <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
        </Wrapper>
    );
};

const Wrapper = styled(motion.div)`
    height: 200vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default MotionValues;
