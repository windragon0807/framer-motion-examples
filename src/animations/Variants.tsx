import styled from "styled-components";
import { motion } from "framer-motion";

const boxVariants = {
    start: {
        opacity: 0,
        scale: 0.5,
    },
    end: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.5,
            // ๐ children 0.5์ด ๋๋ฆฌ๊ฒ ๋ํ๋๊ฒ ํ๋ ์์ฑ
            delayChildren: 0.5,
            // ๐ children ์ปดํฌ๋ํธ๋ผ๋ฆฌ delay ๋ถ์ฌ
            staggerChildren: 0.2,
        },
    },
};

const circleVariants = {
    start: {
        opacity: 0,
        y: 10,
    },
    end: {
        opacity: 1,
        y: 0,
    },
};

const Variants = () => {
    return (
        <Wrapper>
            <Box variants={boxVariants} initial="start" animate="end">
                {/* children์๊ฒ initial="start" animate="end"๋ฅผ ๋์ผํ๊ฒ ์ ์ฉํ๋ฏ๋ก variants๋ง ๋ค๋ฅด๊ฒ ํด์ฃผ๋ฉด ๋จ */}
                {[0, 1, 2, 3].map((index) => (
                    <Circle key={index} variants={circleVariants} />
                ))}
            </Box>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #d0e, #91f);
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
    background-color: white;
    height: 70px;
    width: 70px;
    place-self: center;
    border-radius: 35px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default Variants;
